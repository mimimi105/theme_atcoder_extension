// テーマ管理ロジック
import { halloweenTheme } from './themes/halloween.js';
import { springTheme } from './themes/spring.js';
import { Config, THEME_OPTIONS, ENV } from './config.js';

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
        for (const theme of Object.values(this.themes)) {
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

        // Google Fontsを読み込む（初回のみ）
        if (!document.getElementById('google-fonts-noto')) {
            const link = document.createElement('link');
            link.id = 'google-fonts-noto';
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap';
            document.head.appendChild(link);
        }

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

    // テスト用のステータステーブルを作成
    createTestTable() {
        // 既存のテストテーブルがあれば削除
        const existing = document.getElementById('test-status-table');
        if (existing) {
            existing.remove();
        }

        // テーブルを探す（AtCoderの提出一覧テーブル）
        let targetTable = document.querySelector('table.table');

        if (!targetTable) {
            // テーブルがない場合は新規作成
            const container = document.createElement('div');
            container.id = 'test-status-table';
            container.style.cssText = 'margin: 20px; padding: 20px; background: #f5f5f5;';

            targetTable = document.createElement('table');
            targetTable.className = 'table table-bordered table-striped';
            targetTable.style.cssText = 'width: 100%; background: white;';

            container.appendChild(targetTable);
            document.body.insertBefore(container, document.body.firstChild);
        }

        // テーブルにテストケースを追加
        const statuses = ['WA', 'TLE', 'MLE', 'RE', 'CE', 'AC'];
        const tbody = targetTable.querySelector('tbody') || targetTable;

        statuses.forEach((status, index) => {
            const tr = document.createElement('tr');

            // 提出時刻（ダミー）
            const td1 = document.createElement('td');
            td1.textContent = '2024-03-23 12:00:00';
            tr.appendChild(td1);

            // 問題名（ダミー）
            const td2 = document.createElement('td');
            td2.textContent = `テスト問題 ${index + 1}`;
            tr.appendChild(td2);

            // ユーザー（ダミー）
            const td3 = document.createElement('td');
            td3.textContent = 'test_user';
            tr.appendChild(td3);

            // 言語（ダミー）
            const td4 = document.createElement('td');
            td4.textContent = 'C++ (GCC 9.2.1)';
            tr.appendChild(td4);

            // 得点（ダミー）
            const td5 = document.createElement('td');
            td5.textContent = status === 'AC' ? '100' : '0';
            tr.appendChild(td5);

            // コード長（ダミー）
            const td6 = document.createElement('td');
            td6.textContent = '1234 Byte';
            tr.appendChild(td6);

            // ステータス
            const td7 = document.createElement('td');
            const statusSpan = document.createElement('span');
            statusSpan.className = status === 'AC' ? 'label label-success' : 'label label-warning';
            statusSpan.textContent = status;
            td7.appendChild(statusSpan);
            tr.appendChild(td7);

            // 実行時間（ダミー）
            const td8 = document.createElement('td');
            td8.textContent = status === 'TLE' ? '2000 ms' : '123 ms';
            tr.appendChild(td8);

            // メモリ（ダミー）
            const td9 = document.createElement('td');
            td9.textContent = status === 'MLE' ? '2048 KB' : '512 KB';
            tr.appendChild(td9);

            tbody.appendChild(tr);
        });
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

        const devButtonHTML = ENV === 'dev' ? `
            <button id="create-test-btn" style="
                width: 100%;
                padding: 8px;
                margin-top: 10px;
                background: #4CAF50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
            ">テストケースを作成</button>
        ` : '';

        panel.innerHTML = `
            <style>
                #atcoder-theme-settings {
                    position: fixed !important;
                    top: 10px !important;
                    right: 10px !important;
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%) !important;
                    border: none !important;
                    border-radius: 12px !important;
                    padding: 14px !important;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08) !important;
                    z-index: 10000 !important;
                    font-family: 'Noto Sans', 'Noto Color Emoji', system-ui, -apple-system, sans-serif !important;
                    min-width: 240px !important;
                    display: none !important;
                    backdrop-filter: blur(10px) !important;
                }
                #atcoder-theme-settings.visible {
                    display: block !important;
                    animation: slideIn 0.2s ease-out !important;
                }
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                #atcoder-theme-settings * {
                    all: revert !important;
                }
                #atcoder-theme-settings label {
                    display: block !important;
                    margin: 0 0 8px 0 !important;
                    padding: 0 !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    color: #2c3e50 !important;
                    line-height: normal !important;
                    letter-spacing: 0.3px !important;
                }
                #atcoder-theme-settings select {
                    display: block !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 10px 12px !important;
                    font-size: 14px !important;
                    font-family: 'Noto Sans', 'Noto Color Emoji', system-ui, -apple-system, sans-serif !important;
                    line-height: normal !important;
                    color: #2c3e50 !important;
                    background: white !important;
                    border: 2px solid #e1e8ed !important;
                    border-radius: 8px !important;
                    box-sizing: border-box !important;
                    cursor: pointer !important;
                    transition: all 0.2s ease !important;
                    appearance: none !important;
                    -webkit-appearance: none !important;
                    -moz-appearance: none !important;
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232c3e50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
                    background-repeat: no-repeat !important;
                    background-position: right 8px center !important;
                    background-size: 20px !important;
                    padding-right: 36px !important;
                }
                #atcoder-theme-settings select:hover {
                    border-color: #3498db !important;
                    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1) !important;
                }
                #atcoder-theme-settings select:focus {
                    outline: none !important;
                    border-color: #3498db !important;
                    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.15) !important;
                }
                #create-test-btn {
                    display: block !important;
                    width: 100% !important;
                    margin-top: 12px !important;
                    padding: 10px !important;
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%) !important;
                    color: white !important;
                    border: none !important;
                    border-radius: 8px !important;
                    cursor: pointer !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                    font-family: 'Noto Sans', 'Noto Color Emoji', system-ui, -apple-system, sans-serif !important;
                    line-height: normal !important;
                    transition: all 0.2s ease !important;
                    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3) !important;
                }
                #create-test-btn:hover {
                    background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%) !important;
                    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4) !important;
                    transform: translateY(-1px) !important;
                }
                #create-test-btn:active {
                    transform: translateY(0) !important;
                    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.3) !important;
                }
                #atcoder-theme-settings .select2.select2-container.select2-container--bootstrap {
                    display: none !important;
                }
            </style>
            <label for="theme-selector">テーマ設定:</label>
            <select id="theme-selector">
                <option value="auto">自動（期間で切替）</option>
                <option value="halloween">ハロウィン</option>
                <option value="spring">春（桜）</option>
                <option value="off">オフ</option>
            </select>
            ${devButtonHTML}
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

        // devモードの場合、テストボタンのイベントリスナーを追加
        if (ENV === 'dev') {
            const testBtn = document.getElementById('create-test-btn');
            if (testBtn) {
                testBtn.addEventListener('click', () => {
                    this.createTestTable();
                    // 装飾を再適用
                    setTimeout(() => {
                        const decorator = window.atcoderDecorator;
                        if (decorator) {
                            decorator.applyDecoration();
                        }
                    }, 100);
                });
            }
        }

        // 外側クリックで閉じる
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target)) {
                this.hideSettingsPanel();
            }
        });
    }

    // 設定パネルを表示
    showSettingsPanel(x, y) {
        const panel = document.getElementById('atcoder-theme-settings');
        if (!panel) {
            return;
        }

        // 画面の端を超えないように位置調整
        const panelWidth = 220;  // min-width + padding
        const panelHeight = 100;  // 概算の高さ

        let left = x;
        let top = y;

        // 右端を超える場合は左に表示
        if (left + panelWidth > window.innerWidth) {
            left = window.innerWidth - panelWidth - 10;
        }

        // 下端を超える場合は上に表示
        if (top + panelHeight > window.innerHeight) {
            top = window.innerHeight - panelHeight - 10;
        }

        // 位置を設定してから表示
        panel.style.setProperty('left', `${left}px`, 'important');
        panel.style.setProperty('top', `${top}px`, 'important');
        panel.style.setProperty('right', 'auto', 'important');
        panel.classList.add('visible');
    }

    // 設定パネルを非表示
    hideSettingsPanel() {
        const panel = document.getElementById('atcoder-theme-settings');
        if (panel) {
            panel.classList.remove('visible');
        }
    }
}
