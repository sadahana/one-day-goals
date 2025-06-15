# 🗓️ OneDay Goals

「今日やることだけに集中する」  
シンプルでミニマルな 1 日専用の目標達成アプリです。

---

## 🚀 概要

**OneDay Goals** は、1 日の目標を記録し、完了状況を視覚化することで、達成感と集中力を高めるための Web アプリです。  
操作は直感的で、入力 → チェック → 達成確認というシンプルな流れで完結します。

---

## 🖼️ スクリーンショット

![OneDay Goals UI](./screenshot.png)

---

## ✨ 主な機能

- ✅ 1 日の目標の登録・編集・削除
- ✅ チェックボックスで達成状況を管理
- ✅ 今日の達成数を表示（例：3 / 4 達成！）
- ✅ 日付が変わると自動リセット（予定）
- ✅ LocalStorage でデータ保持（ログイン不要）

---

## 🛠 使用技術

| 項目           | 内容                 |
| -------------- | -------------------- |
| フレームワーク | Next.js (App Router) |
| 言語           | TypeScript           |
| 状態管理       | useState or Zustand  |
| スタイリング   | Tailwind CSS         |
| データ保存     | LocalStorage         |
| デプロイ       | Vercel               |
| ソース管理     | Git / GitHub         |

---

## 📦 セットアップ手順（開発者向け）

```bash
# 1. リポジトリをクローン
git clone https://github.com/sadaakix/one-day-goals.git
cd one-day-goals

# 2. 依存パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```
