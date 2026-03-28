# 🎃 Seasonal AtCoder Extension

AtCoderのジャッジ結果（WA、TLE、MLE、RE、CE、AC）を季節のテーマで装飾する拡張機能です。

現在対応しているテーマ：
- 🎃 ハロウィン（10月1日〜11月7日）
- 🌸 春/桜（3月20日〜4月30日）

[![Install from GreasyFork](https://img.shields.io/badge/GreasyFork-Install-red.svg)](https://greasyfork.org/ja/scripts/553267-halloween-atcoder)   [![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/mimimi105/theme_atcoder_extension)

## 🖼️ テーマ一覧
- ハロウィン


## 🎃 プレビュー
提出一覧や、提出結果などでかわいく装飾されます！
<div>
<img width="502" height="302" alt="image" src="https://github.com/user-attachments/assets/c6975008-deec-4425-af92-3d3a4e1d5c23" />
<img width="147" height="288" alt="image" src="https://github.com/user-attachments/assets/b0df1f31-86f6-441b-ab04-a04a43fb207a" />
</div>


## 🚀 インストール方法

1. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja) などのスクリプトマネージャーをインストール
2. [![Install from GreasyFork](https://img.shields.io/badge/GreasyFork-Install-red.svg)](https://greasyfork.org/ja/scripts/553267-theme-atcoder) からインストール

## 🎯 対象サイト

- https://atcoder.jp/*

## 🛠️ 技術仕様

- **対応ブラウザ**: Chrome, Firefox, Safari, Edge
- **依存関係**: なし
- **権限**: なし（DOM操作のみ）
- **装飾内容**:
    - WA/TLE/MLE/RE/CE: かぼちゃマーク付きの背景グラデーション
    - AC: キャンディマークとおばけマーク付きの背景グラデーション
    - ページ動的更新に対応（MutationObserver利用）

## 📝 使用方法

- ページを開くだけで自動で装飾が適用されます
- 画面右上の設定パネルからテーマを切り替えられます
  - **自動（期間で切替）**: 現在の日付に応じて自動的にテーマを切り替え
  - **ハロウィン**: 常にハロウィンテーマを適用
  - **春（桜）**: 常に春テーマを適用
  - **オフ**: 装飾を無効化
- リロードやページ遷移でも設定と装飾が維持されます

## 🔧 開発者向け

### ファイル構造

```
src/
├── themes/
│   ├── halloween.js    # ハロウィンテーマ定義
│   └── spring.js       # 春テーマ定義
├── config.js           # 設定管理
├── themeManager.js     # テーマ選択・管理ロジック
├── decorator.js        # 装飾適用ロジック
└── main.js            # エントリーポイント
build.js               # ビルドスクリプト
.user.js              # ビルド後のユーザースクリプト
```

### ビルド方法

```bash
npm run build
```

### 新しいテーマの追加方法

1. `src/themes/` に新しいテーマファイルを作成
2. `src/themeManager.js` の `themes` オブジェクトに追加
3. `build.js` の `files` 配列に追加
4. `npm run build` でビルド

## 📝 ライセンス

MIT License

## 🛠️ 作者
twitter: [@_mimiminomi](https://x.com/_mimiminomi)

---

**Happy Halloween! 🎃👻🍭**
