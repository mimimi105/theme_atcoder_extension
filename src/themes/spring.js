// 春/桜テーマの定義
export const springTheme = {
    name: 'spring',
    displayName: '春（桜）',
    period: {
        start: { month: 3, day: 20 },   // 3月20日
        end: { month: 4, day: 30 }      // 4月30日
    },

    styles: `
        /* 春/桜テーマのスタイル */
        .theme-wa {
            background: linear-gradient(180deg, #ffeb99 0%, #ffb347 50%, #ff9933 100%) !important;
            color: #fff !important;
            border: 3px solid rgba(255, 250, 230, 0.8) !important;
            border-radius: 20px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            font-family: 'Noto Sans', 'Noto Color Emoji', sans-serif !important;
            text-shadow: 0 0 3px rgba(150, 110, 60, 0.25), 0 0 6px rgba(150, 110, 60, 0.15), 2px 2px 4px rgba(255, 153, 51, 0.3) !important;
            box-shadow: 0 0 15px rgba(255, 179, 71, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(255, 250, 230, 0.3) !important;
            animation: orangeGlow 3s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-tle {
            background: linear-gradient(180deg, #fff5f5 0%, #ffd5cd 40%, #ffb3ba 100%) !important;
            color: #fff !important;
            border: 3px solid rgba(255, 240, 240, 0.8) !important;
            border-radius: 20px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            font-family: 'Noto Sans', 'Noto Color Emoji', sans-serif !important;
            text-shadow: 0 0 3px rgba(150, 100, 100, 0.25), 0 0 6px rgba(150, 100, 100, 0.15), 2px 2px 4px rgba(255, 179, 186, 0.3) !important;
            box-shadow: 0 0 15px rgba(255, 179, 186, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(255, 240, 240, 0.3) !important;
            animation: peachGlow 3s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-mle {
            background: linear-gradient(180deg, #f5e6ff 0%, #e0ccff 40%, #d9b3ff 100%) !important;
            color: #fff !important;
            border: 3px solid rgba(245, 240, 255, 0.8) !important;
            border-radius: 20px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            font-family: 'Noto Sans', 'Noto Color Emoji', sans-serif !important;
            text-shadow: 0 0 3px rgba(90, 80, 120, 0.3), 0 0 6px rgba(90, 80, 120, 0.2), 2px 2px 4px rgba(217, 179, 255, 0.3) !important;
            box-shadow: 0 0 15px rgba(217, 179, 255, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(245, 240, 255, 0.3) !important;
            animation: lavenderGlow 3s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-re {
            background: linear-gradient(135deg, #ffb3ba, #ff8fa3) !important;
            color: #fff !important;
            border: 3px solid rgba(255, 240, 245, 0.8) !important;
            border-radius: 20px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            font-family: 'Noto Sans', 'Noto Color Emoji', sans-serif !important;
            text-shadow: 0 0 3px rgba(140, 90, 100, 0.3), 0 0 6px rgba(140, 90, 100, 0.2), 2px 2px 4px rgba(255, 143, 163, 0.3) !important;
            box-shadow: 0 0 15px rgba(255, 143, 163, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(255, 240, 245, 0.3) !important;
            animation: roseGlow 3s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-ce {
            background: linear-gradient(180deg, #f5ede3 0%, #d4c4b0 50%, #c9b79c 100%) !important;
            color: #fff !important;
            border: 3px solid rgba(245, 240, 230, 0.8) !important;
            border-radius: 20px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            font-family: 'Noto Sans', 'Noto Color Emoji', sans-serif !important;
            text-shadow: 0 0 3px rgba(100, 85, 70, 0.25), 0 0 6px rgba(100, 85, 70, 0.15), 2px 2px 4px rgba(139, 115, 85, 0.3) !important;
            box-shadow: 0 0 15px rgba(201, 183, 156, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(245, 237, 227, 0.3) !important;
            animation: woodGlow 3s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        .theme-ac {
            background: linear-gradient(180deg, #e8ff4d 0%, #7be495 50%, #3dd9c6 100%) !important;
            color: #fff !important;
            border: 3px solid rgba(224, 247, 250, 0.8) !important;
            border-radius: 20px !important;
            padding: 6px 10px !important;
            font-weight: bold !important;
            font-family: 'Noto Sans', 'Noto Color Emoji', sans-serif !important;
            text-shadow: 0 0 3px rgba(60, 100, 90, 0.25), 0 0 6px rgba(60, 100, 90, 0.15), 2px 2px 4px rgba(61, 217, 198, 0.3) !important;
            box-shadow: 0 0 15px rgba(61, 217, 198, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(224, 247, 250, 0.3) !important;
            animation: springGlow 3s ease-in-out infinite alternate !important;
            position: relative !important;
        }

        /* オレンジマーク（WA用） */
        .theme-orange::before {
            content: "🌸" !important;
            font-size: 1.2em !important;
            margin-right: 8px !important;
            animation: sakuraFloat 2s ease-in-out infinite !important;
        }

        /* 桜マーク */
        .theme-sakura::before {
            content: "🌸" !important;
            font-size: 1.2em !important;
            margin-right: 8px !important;
            animation: sakuraFloat 2s ease-in-out infinite !important;
        }

        /* AC用の成功マーク */
        .theme-ac::before {
            content: "🌸" !important;
            font-size: 1.2em !important;
            margin-right: 8px !important;
            animation: sakuraFloat 2s ease-in-out infinite !important;
        }

        /* アニメーション効果 */
        @keyframes sakuraGlow {
            0% {
                box-shadow: 0 0 20px rgba(255, 182, 193, 0.5);
            }
            100% {
                box-shadow: 0 0 30px rgba(255, 192, 203, 0.8), 0 0 40px rgba(255, 182, 193, 0.4);
            }
        }

        @keyframes springGlow {
            0% {
                box-shadow: 0 0 20px rgba(61, 217, 198, 0.5);
            }
            100% {
                box-shadow: 0 0 30px rgba(61, 217, 198, 0.8), 0 0 40px rgba(123, 228, 149, 0.4);
            }
        }

        @keyframes peachGlow {
            0% {
                box-shadow: 0 0 15px rgba(255, 179, 186, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(255, 240, 240, 0.3);
            }
            100% {
                box-shadow: 0 0 20px rgba(255, 179, 186, 0.35), 0 0 10px rgba(255, 255, 255, 0.6) inset, 0 1px 6px rgba(255, 213, 205, 0.4);
            }
        }

        @keyframes orangeGlow {
            0% {
                box-shadow: 0 0 15px rgba(255, 179, 71, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(255, 250, 230, 0.3);
            }
            100% {
                box-shadow: 0 0 20px rgba(255, 179, 71, 0.35), 0 0 10px rgba(255, 255, 255, 0.6) inset, 0 1px 6px rgba(255, 235, 153, 0.4);
            }
        }

        @keyframes lavenderGlow {
            0% {
                box-shadow: 0 0 15px rgba(217, 179, 255, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(245, 240, 255, 0.3);
            }
            100% {
                box-shadow: 0 0 20px rgba(217, 179, 255, 0.35), 0 0 10px rgba(255, 255, 255, 0.6) inset, 0 1px 6px rgba(224, 204, 255, 0.4);
            }
        }

        @keyframes woodGlow {
            0% {
                box-shadow: 0 0 15px rgba(201, 183, 156, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(245, 237, 227, 0.3);
            }
            100% {
                box-shadow: 0 0 20px rgba(201, 183, 156, 0.35), 0 0 10px rgba(255, 255, 255, 0.6) inset, 0 1px 6px rgba(212, 196, 176, 0.4);
            }
        }

        @keyframes roseGlow {
            0% {
                box-shadow: 0 0 15px rgba(255, 143, 163, 0.25), 0 0 8px rgba(255, 255, 255, 0.5) inset, 0 1px 4px rgba(255, 240, 245, 0.3);
            }
            100% {
                box-shadow: 0 0 20px rgba(255, 143, 163, 0.35), 0 0 10px rgba(255, 255, 255, 0.6) inset, 0 1px 6px rgba(255, 179, 186, 0.4);
            }
        }

        @keyframes sakuraFloat {
            0%, 100% {
                transform: translateY(0px) rotate(-3deg);
                opacity: 1;
            }
            50% {
                transform: translateY(-5px) rotate(3deg);
                opacity: 0.8;
            }
        }

        @keyframes petalFall {
            0% {
                opacity: 1;
                transform: translateY(0px) rotate(0deg);
            }
            100% {
                opacity: 0.3;
                transform: translateY(5px) rotate(180deg);
            }
        }

        /* WA用オレンジ装飾 */
        .theme-wa::after {
            content: "🍊" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: ghostFloat 2s ease-in-out infinite !important;
        }

        /* TLE、RE用花びら装飾 */
        .theme-tle::after, .theme-re::after {
            content: "🌺" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: ghostFloat 2s ease-in-out infinite !important;
        }

        /* CE用木装飾 */
        .theme-ce::after {
            content: "🪵" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: ghostFloat 2s ease-in-out infinite !important;
        }

        /* MLE用ラベンダー装飾 */
        .theme-mle::after {
            content: "🪻" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: ghostFloat 2s ease-in-out infinite !important;
        }

        /* AC用の成功装飾 */
        .theme-ac::after {
            content: "🦋" !important;
            position: absolute !important;
            top: -5px !important;
            right: -5px !important;
            font-size: 0.8em !important;
            animation: butterflyFloat 3s ease-in-out infinite !important;
        }

        @keyframes ghostFloat {
            0%, 100% {
                opacity: 0.8;
                transform: translateY(0px) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: translateY(-2px) rotate(5deg);
            }
        }

        @keyframes butterflyFloat {
            0%, 100% {
                opacity: 0.9;
                transform: translate(0px, 0px) rotate(0deg);
            }
            25% {
                opacity: 1;
                transform: translate(-3px, -2px) rotate(-10deg);
            }
            50% {
                opacity: 0.9;
                transform: translate(0px, -4px) rotate(0deg);
            }
            75% {
                opacity: 1;
                transform: translate(3px, -2px) rotate(10deg);
            }
        }

        /* 春装飾された要素の親tr要素の高さ調整 */
        tr:has(.theme-wa), tr:has(.theme-tle), tr:has(.theme-mle), tr:has(.theme-re), tr:has(.theme-ce), tr:has(.theme-ac) {
            height: 33px !important;
            min-height: 33px !important;
        }

        /* td要素内で春装飾されたステータスを垂直中央寄せ */
        tr:has(.theme-wa) td, tr:has(.theme-tle) td, tr:has(.theme-mle) td, tr:has(.theme-re) td, tr:has(.theme-ce) td, tr:has(.theme-ac) td {
            vertical-align: middle !important;
            display: table-cell !important;
        }

        /* 春装飾の小要素のはみ出し防止 */
        .theme-wa, .theme-tle, .theme-mle, .theme-re, .theme-ce, .theme-ac {
            overflow: visible !important;
            position: relative !important;
            vertical-align: middle !important;
            display: inline-block !important;
        }

        /* 桜マークのサイズ調整 */
        .theme-sakura::before {
            font-size: 1.1em !important;
            margin-right: 6px !important;
        }

        /* 花びらのサイズ調整 */
        .theme-wa::after, .theme-tle::after, .theme-mle::after, .theme-re::after, .theme-ce::after {
            font-size: 0.7em !important;
            top: -5px !important;
            right: -5px !important;
        }
    `,

    statusClasses: {
        'WA': ['theme-wa', 'theme-orange'],
        'TLE': ['theme-tle', 'theme-sakura'],
        'MLE': ['theme-mle', 'theme-sakura'],
        'RE': ['theme-re', 'theme-sakura'],
        'CE': ['theme-ce', 'theme-sakura'],
        'AC': ['theme-ac']
    }
};
