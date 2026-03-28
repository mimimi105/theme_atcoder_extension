// 装飾適用ロジック
export class Decorator {
    constructor(themeManager) {
        this.themeManager = themeManager;
    }

    // ジャッジ結果の要素のみを検出して装飾を適用
    applyDecoration() {
        const theme = this.themeManager.getCurrentTheme();

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

            // テーマがオンの場合のみ装飾を適用
            if (theme && theme.statusClasses && theme.statusClasses[text]) {
                const classes = theme.statusClasses[text];
                element.classList.add(...classes);
            }

            // 右クリックイベントは常に追加（テーマオフの時も設定変更できるように）
            if (!element.hasAttribute('data-context-menu-added')) {
                element.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.themeManager.showSettingsPanel(event.clientX, event.clientY);
                });
                element.setAttribute('data-context-menu-added', 'true');
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
