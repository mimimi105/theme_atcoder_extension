// ハロウィンテーマの定義
export const halloweenTheme = {
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
