// 設定管理
export const CONFIG_KEY = 'atcoder_theme_config';

// 環境設定
export const ENV = 'prod'; // 'dev' or 'prod'

export const THEME_OPTIONS = {
    AUTO: 'auto',
    HALLOWEEN: 'halloween',
    SPRING: 'spring',
    OFF: 'off'
};

export class Config {
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
