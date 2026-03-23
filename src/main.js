// メインエントリーポイント
import { ThemeManager } from './themeManager.js';
import { Decorator } from './decorator.js';

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
