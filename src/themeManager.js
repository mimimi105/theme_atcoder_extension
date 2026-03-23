// テーマ管理ロジック
import { halloweenTheme } from './themes/halloween.js';
import { springTheme } from './themes/spring.js';
import { Config, THEME_OPTIONS } from './config.js';

export class ThemeManager {
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
