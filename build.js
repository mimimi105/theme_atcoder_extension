#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// ファイルを読み込む順序
const files = ["src/themes/halloween.js", "src/themes/spring.js", "src/config.js", "src/themeManager.js", "src/decorator.js", "src/main.js"];

// ユーザースクリプトヘッダー
const header = `// ==UserScript==
// @name         Halloween-AtCoder
// @namespace    https://github.com/mimimi105/halloween_atcoder_extension
// @version      2.0
// @description  AtCoderのWAやTLEの表示をテーマ別に装飾する拡張機能（ハロウィン、春など）
// @author       mimimi105
// @match        https://atcoder.jp/*
// @grant        none
// @license      MIT
// ==/UserScript==

`;

// ビルド処理
function build() {
    let output = header;
    output += "(function() {\n";
    output += "'use strict';\n\n";

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

        output += `// ========== ${file} ==========\n`;
        output += content;
        output += "\n\n";
    }

    output += "})();\n";

    // .user.jsファイルに書き込み
    const outputPath = path.join(__dirname, ".user.js");
    fs.writeFileSync(outputPath, output, "utf8");

    console.log("✓ Build completed successfully!");
    console.log(`  Output: ${outputPath}`);
}

// ビルド実行
try {
    build();
} catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
}
