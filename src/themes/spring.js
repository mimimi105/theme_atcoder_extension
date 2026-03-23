// 春/桜テーマの定義（後で実装）
export const springTheme = {
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
