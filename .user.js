// ==UserScript==
// @name         Halloween-AtCoder
// @namespace    https://github.com/mimimi105/halloween_atcoder_extension
// @version      2.0
// @description  AtCoderのWAやTLEの表示をテーマ別に装飾する拡張機能（ハロウィン、春など）
// @author       mimimi105
// @match        https://atcoder.jp/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
'use strict';

// ========== src/themes/halloween.js ==========
// ハロウィンテーマの定義
const halloweenTheme = {
    name: 'halloween',
    displayName: 'ハロウィン',
    period: {
        start: { month: 10, day: 1 },   // 10月1日
        end: { month: 11, day: 7 }      // 11月7日
    },

    styles: `
        /* WAとTLEのハロウィン装飾 */
        .theme-wa {
            background: linear-gradient(45deg, #ff6b35, #f7931e) !important;
            color: #fff !important;
            border: 3px solid #ce6317 !important;
            border-radius: 15px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
            box-shadow: 0 0 20px rgba(255, 107, 53, 0.6) !important;
            animation: halloweenGlow 2s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-tle {
            background: linear-gradient(45deg, #8b0000, #ff4500) !important;
            color: #fff !important;
            border: 3px solid #ad0000 !important;
            border-radius: 15px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
            box-shadow: 0 0 20px rgba(255, 69, 0, 0.6) !important;
            animation: halloweenGlow 2s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-mle {
            background: linear-gradient(45deg, #4b0082, #8a2be2) !important;
            color: #fff !important;
            border: 3px solid #2f0047 !important;
            border-radius: 15px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
            box-shadow: 0 0 20px rgba(138, 43, 226, 0.6) !important;
            animation: halloweenGlow 2s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-re {
            background: linear-gradient(45deg, #dc143c, #ff6347) !important;
            color: #fff !important;
            border: 3px solid #8b0000 !important;
            border-radius: 15px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
            box-shadow: 0 0 20px rgba(220, 20, 60, 0.6) !important;
            animation: halloweenGlow 2s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-ce {
            background: linear-gradient(45deg, #2f4f4f, #708090) !important;
            color: #fff !important;
            border: 3px solid #393939 !important;
            border-radius: 15px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
            box-shadow: 0 0 20px rgba(112, 128, 144, 0.6) !important;
            animation: halloweenGlow 2s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-ac {
            background: linear-gradient(45deg, #228b22, #32cd32) !important;
            color: #fff !important;
            border: 3px solid #008b00 !important;
            border-radius: 15px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5) !important;
            box-shadow: 0 0 20px rgba(34, 139, 34, 0.6) !important;
            animation: halloweenGlow 2s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        /* かぼちゃマーク */
        .theme-pumpkin::before {
            content: "🎃" !important;
            font-size: 1.2em !important;
            margin-right: 8px !important;
            animation: pumpkinBounce 1.5s ease-in-out infinite !important;
        }

        /* AC用の成功マーク */
        .theme-ac::before {
            content: "🍭" !important;
            font-size: 1.2em !important;
            margin-right: 8px !important;
            animation: candyBounce 1.5s ease-in-out infinite !important;
        }

        /* アニメーション効果 */
        @keyframes halloweenGlow {
            0% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.6); }
            100% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.9), 0 0 40px rgba(255, 107, 53, 0.4); }
        }

        @keyframes pumpkinBounce {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(5deg); }
        }

        @keyframes candyBounce {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(10deg); }
        }

        /* スパイダーウェブ装飾 */
        .theme-wa::after, .theme-tle::after, .theme-mle::after, .theme-re::after, .theme-ce::after {
            content: "🕷️" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: spiderWeb 3s ease-in-out infinite !important;
        }

        /* AC用の成功装飾 */
        .theme-ac::after {
            content: "👻" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: ghostFloat 2s ease-in-out infinite !important;
        }

        @keyframes ghostFloat {
            0%, 100% { opacity: 0.8; transform: translateY(0px) rotate(0deg); }
            50% { opacity: 1; transform: translateY(-3px) rotate(5deg); }
        }

        @keyframes spiderWeb {
            0%, 100% { opacity: 0.7; transform: rotate(0deg); }
            50% { opacity: 1; transform: rotate(180deg); }
        }

        /* ハロウィン装飾された要素の親tr要素の高さ調整 */
        tr:has(.theme-wa), tr:has(.theme-tle), tr:has(.theme-mle), tr:has(.theme-re), tr:has(.theme-ce), tr:has(.theme-ac) {
            height: 33px !important;
            min-height: 33px !important;
        }

        /* td要素内でハロウィン装飾されたステータスを垂直中央寄せ */
        tr:has(.theme-wa) td, tr:has(.theme-tle) td, tr:has(.theme-mle) td, tr:has(.theme-re) td, tr:has(.theme-ce) td, tr:has(.theme-ac) td {
            vertical-align: middle !important;
            display: table-cell !important;
        }

        /* ハロウィン装飾の小要素のはみ出し防止 */
        .theme-wa, .theme-tle, .theme-mle, .theme-re, .theme-ce, .theme-ac {
            overflow: visible !important;
            position: relative !important;
            vertical-align: middle !important;
            display: inline-block !important;
        }

        /* かぼちゃマークのサイズ調整 */
        .theme-pumpkin::before {
            font-size: 1.1em !important;
            margin-right: 6px !important;
        }

        /* クモのサイズ調整 */
        .theme-wa::after, .theme-tle::after, .theme-mle::after, .theme-re::after, .theme-ce::after {
            font-size: 0.7em !important;
            top: -5px !important;
            right: -5px !important;
        }
    `,

    // ステータスごとのクラス名マッピング
    statusClasses: {
        'WA': ['theme-wa', 'theme-pumpkin'],
        'TLE': ['theme-tle', 'theme-pumpkin'],
        'MLE': ['theme-mle', 'theme-pumpkin'],
        'RE': ['theme-re', 'theme-pumpkin'],
        'CE': ['theme-ce', 'theme-pumpkin'],
        'AC': ['theme-ac']
    }
};


// ========== src/themes/spring.js ==========
// 春/桜テーマの定義（後で実装）
const springTheme = {
    name: 'spring',
    displayName: '春（桜）',
    period: {
        start: { month: 3, day: 20 },   // 3月20日
        end: { month: 4, day: 30 }      // 4月30日
    },

    styles: `
        /* 春テーマのスタイル（後で実装） */
        .theme-wa {
            /* TODO: 春仕様のスタイルを追加 */
        }
        /* ... 他のステータス */
    `,

    statusClasses: {
        'WA': ['theme-wa'],
        'TLE': ['theme-tle'],
        'MLE': ['theme-mle'],
        'RE': ['theme-re'],
        'CE': ['theme-ce'],
        'AC': ['theme-ac']
    }
};


// ========== src/config.js ==========
// 設定管理
const CONFIG_KEY = 'atcoder_theme_config';

const THEME_OPTIONS = {
    AUTO: 'auto',
    HALLOWEEN: 'halloween',
    SPRING: 'spring',
    OFF: 'off'
};

class Config {
    constructor() {
        this.loadConfig();
    }

    // 設定を読み込み
    loadConfig() {
        try {
            const saved = localStorage.getItem(CONFIG_KEY);
            if (saved) {
                this.config = JSON.parse(saved);
            } else {
                this.config = {
                    mode: THEME_OPTIONS.AUTO,  // デフォルトは自動
                    selectedTheme: THEME_OPTIONS.HALLOWEEN  // 手動選択時のデフォルト
                };
            }
        } catch (e) {
            console.error('Failed to load config:', e);
            this.config = {
                mode: THEME_OPTIONS.AUTO,
                selectedTheme: THEME_OPTIONS.HALLOWEEN
            };
        }
    }

    // 設定を保存
    saveConfig() {
        try {
            localStorage.setItem(CONFIG_KEY, JSON.stringify(this.config));
        } catch (e) {
            console.error('Failed to save config:', e);
        }
    }

    // モードを取得
    getMode() {
        return this.config.mode || THEME_OPTIONS.AUTO;
    }

    // モードを設定
    setMode(mode) {
        this.config.mode = mode;
        this.saveConfig();
    }

    // 選択されたテーマを取得
    getSelectedTheme() {
        return this.config.selectedTheme || THEME_OPTIONS.HALLOWEEN;
    }

    // 選択されたテーマを設定
    setSelectedTheme(theme) {
        this.config.selectedTheme = theme;
        this.saveConfig();
    }
}


// ========== src/themeManager.js ==========
// テーマ管理ロジック
class ThemeManager {
    constructor() {
        this.config = new Config();
        this.themes = {
            halloween: halloweenTheme,
            spring: springTheme
        };
        this.currentTheme = null;
    }

    // 現在の日付が指定された期間内かチェック
    isInPeriod(period) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;  // 0-11 -> 1-12
        const currentDay = now.getDate();

        const start = period.start;
        const end = period.end;

        // 年をまたぐ場合の処理
        if (start.month > end.month) {
            return (
                (currentMonth > start.month || (currentMonth === start.month && currentDay >= start.day)) ||
                (currentMonth < end.month || (currentMonth === end.month && currentDay <= end.day))
            );
        }

        // 同年内の場合
        if (currentMonth < start.month || currentMonth > end.month) {
            return false;
        }
        if (currentMonth === start.month && currentDay < start.day) {
            return false;
        }
        if (currentMonth === end.month && currentDay > end.day) {
            return false;
        }

        return true;
    }

    // 自動でテーマを選択
    getAutoTheme() {
        // 各テーマの期間をチェック
        for (const [key, theme] of Object.entries(this.themes)) {
            if (theme.period && this.isInPeriod(theme.period)) {
                return theme;
            }
        }

        // どの期間にも当てはまらない場合はハロウィンをデフォルトとして返す
        return this.themes.halloween;
    }

    // 現在のテーマを取得
    getCurrentTheme() {
        const mode = this.config.getMode();

        if (mode === THEME_OPTIONS.OFF) {
            return null;
        }

        if (mode === THEME_OPTIONS.AUTO) {
            return this.getAutoTheme();
        }

        // 手動選択の場合
        const selectedTheme = this.config.getSelectedTheme();
        return this.themes[selectedTheme] || this.themes.halloween;
    }

    // テーマを適用
    applyTheme() {
        const theme = this.getCurrentTheme();

        if (theme === this.currentTheme) {
            return;  // 同じテーマなら何もしない
        }

        // 古いスタイルを削除
        const oldStyle = document.getElementById('atcoder-theme-styles');
        if (oldStyle) {
            oldStyle.remove();
        }

        this.currentTheme = theme;

        if (!theme) {
            return;  // テーマがオフの場合
        }

        // 新しいスタイルを追加
        const style = document.createElement('style');
        style.id = 'atcoder-theme-styles';
        style.textContent = theme.styles;
        document.head.appendChild(style);

        return theme;
    }

    // 設定パネルを作成
    createSettingsPanel() {
        // 既存のパネルがあれば削除
        const existing = document.getElementById('atcoder-theme-settings');
        if (existing) {
            existing.remove();
        }

        const panel = document.createElement('div');
        panel.id = 'atcoder-theme-settings';
        panel.innerHTML = `
            <style>
                #atcoder-theme-settings {
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    background: white;
                    border: 2px solid #ccc;
                    border-radius: 8px;
                    padding: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    z-index: 10000;
                    font-family: sans-serif;
                }
                #atcoder-theme-settings label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    font-size: 12px;
                }
                #atcoder-theme-settings select {
                    width: 100%;
                    padding: 5px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 12px;
                }
            </style>
            <label for="theme-selector">テーマ設定:</label>
            <select id="theme-selector">
                <option value="auto">自動（期間で切替）</option>
                <option value="halloween">ハロウィン</option>
                <option value="spring">春（桜）</option>
                <option value="off">オフ</option>
            </select>
        `;

        document.body.appendChild(panel);

        const selector = document.getElementById('theme-selector');
        selector.value = this.config.getMode();

        selector.addEventListener('change', (e) => {
            const mode = e.target.value;
            this.config.setMode(mode);

            if (mode !== THEME_OPTIONS.AUTO && mode !== THEME_OPTIONS.OFF) {
                this.config.setSelectedTheme(mode);
            }

            // テーマを再適用
            this.applyTheme();

            // ページをリロード（装飾を再適用するため）
            window.location.reload();
        });
    }
}


// ========== src/decorator.js ==========
// 装飾適用ロジック
class Decorator {
    constructor(themeManager) {
        this.themeManager = themeManager;
    }

    // ジャッジ結果の要素のみを検出して装飾を適用
    applyDecoration() {
        const theme = this.themeManager.getCurrentTheme();

        if (!theme) {
            return;  // テーマがオフの場合は何もしない
        }

        // まず、既に装飾済みの要素からクラスを除去
        const decoratedElements = document.querySelectorAll('[class*="theme-"]');
        decoratedElements.forEach(element => {
            // theme- で始まるクラスをすべて削除
            const classes = Array.from(element.classList);
            classes.forEach(cls => {
                if (cls.startsWith('theme-')) {
                    element.classList.remove(cls);
                }
            });
        });

        // ジャッジ結果のステータス要素のみを検索
        const statusElements = document.querySelectorAll('span.label.label-warning, span.label.label-success');

        statusElements.forEach(element => {
            const text = element.textContent.trim().toUpperCase();

            // テーマのステータスクラスマッピングを使用
            if (theme.statusClasses && theme.statusClasses[text]) {
                const classes = theme.statusClasses[text];
                element.classList.add(...classes);
            }
        });
    }

    // ページの変更を監視して動的に装飾を適用
    observePageChanges() {
        const observer = new MutationObserver((mutations) => {
            let shouldUpdate = false;
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                }
            });

            if (shouldUpdate) {
                setTimeout(() => this.applyDecoration(), 100);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}


// ========== src/main.js ==========
// メインエントリーポイント
(function () {
    'use strict';

    // 初期化
    function init() {
        const themeManager = new ThemeManager();
        const decorator = new Decorator(themeManager);

        // テーマを適用
        themeManager.applyTheme();

        // 装飾を適用
        decorator.applyDecoration();

        // ページの変更を監視
        decorator.observePageChanges();

        // 設定パネルを作成
        themeManager.createSettingsPanel();

        // ページロード完了後に再実行
        window.addEventListener('load', function () {
            setTimeout(() => decorator.applyDecoration(), 500);
        });
    }

    // DOMが準備できたら実行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();


})();
