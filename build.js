#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { minify } = require("terser");

// ファイルを読み込む順序
const files = ["src/themes/halloween.js", "src/themes/spring.js", "src/config.js", "src/themeManager.js", "src/decorator.js", "src/main.js"];

// config.jsからENVを読み取る
function getEnv() {
    const configPath = path.join(__dirname, "src/config.js");
    const configContent = fs.readFileSync(configPath, "utf8");
    const envMatch = configContent.match(/export\s+const\s+ENV\s+=\s+['"](\w+)['"]/);
    return envMatch ? envMatch[1] : 'prod';
}

const ENV = getEnv();
const scriptName = ENV === 'dev' ? 'Theme-AtCoder - dev' : 'Theme-AtCoder';

// ユーザースクリプトヘッダー
const header = `// ==UserScript==
// @name         ${scriptName}
// @namespace    https://github.com/mimimi105/theme_atcoder_extension
// @version      2.0.5
// @description  AtCoderのWAやTLEの表示をテーマ別に装飾する拡張機能（ハロウィン、春など）
// @author       mimimi105
// @match        https://atcoder.jp/*
// @grant        none
// @license      MIT
// ==/UserScript==

`;

// ビルド処理
async function build() {
    let output = header;
    let code = "";
    code += "(function() {\n";
    code += "'use strict';\n\n";

    // 各ファイルの内容を読み込んで結合
    for (const file of files) {
        const filePath = path.join(__dirname, file);
        if (!fs.existsSync(filePath)) {
            console.error(`Error: File not found: ${file}`);
            process.exit(1);
        }

        let content = fs.readFileSync(filePath, "utf8");

        // export/importを削除
        content = content.replace(/export\s+(const|class|function)/g, "$1");
        content = content.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"];?\s*/g, "");
        content = content.replace(/import\s+\*\s+as\s+\w+\s+from\s+['"][^'"]+['"];?\s*/g, "");

        code += `// ========== ${file} ==========\n`;
        code += content;
        code += "\n\n";
    }

    code += "})();\n";

    // 圧縮処理（オプション）
    const shouldMinify = process.argv.includes('--minify');
    if (shouldMinify) {
        console.log("Minifying...");
        const result = await minify(code, {
            compress: {
                dead_code: true,
                drop_console: false,  // console.logを残す
                drop_debugger: true,
            },
            mangle: false,  // UserScriptなので変数名は保持
            format: {
                comments: false,
            }
        });

        if (result.error) {
            throw result.error;
        }

        output += result.code;
        console.log("✓ Minification completed");
    } else {
        output += code;
    }

    // .user.jsファイルに書き込み
    const outputPath = path.join(__dirname, ".user.js");
    fs.writeFileSync(outputPath, output, "utf8");

    console.log("✓ Build completed successfully!");
    console.log(`  Output: ${outputPath}`);
}

// ビルド実行
build().catch(error => {
    console.error("Build failed:", error);
    process.exit(1);
});
