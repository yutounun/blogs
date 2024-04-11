---
external: false
draft: false
title: 「Web フロントエンド ハイパフォーマンス チューニング」を読んで要点をまとめた
description: 「Web フロントエンド ハイパフォーマンス チューニング」を読んで要点をまとめた
date: 2024-04-10
categories:
  - front-end
  - web-development
  - performance
---

# 1. web パフォーマンスとは何か

「ユーザーの振る舞いに対してブラウザが応答を返す速さ」

元々は「インタラクション」といえばページ遷移のみを指していたが、今はページ内でモーダル開閉など様々な「インタラクション」が存在する

# 2. ブラウザのレンダリングの仕組み

## レンダリングエンジン

ブラウザの内部で利用される HTML の描画エンジン(ブラウザそのものではない)

Chrome であれば Blink というレンダリングエンジンを利用

## JavaScript エンジン

JavaScript の実行環境を提供するソフトウェアコンポーネント

Chrome であれば V8

## レンダリングの流れ

### 概要

1. リソースのダウンロード
2. DOM ツリー作成
3. CSSOM ツリー作成
4. 上記ツリーを組み合わせてレンダーツリー作成
5. レンダーツリーを元にレイアウト
6. レイアウトを元にペインティング

### Loading: リソースのダウンロード

- リソース(HTML, CSS, JS, Image)をサーバーからダウンロード
- リソースをパース(構文解析)し、レンダリングエンジンの内部表現に変換
- HTTP(HTTPS) / IP / TCP のプロトコルを利用し、データはパケットに含まれる

1. 3 ウェイ・ハンドシェイクという手順で TCP コネクションという通信を確立させ、HTML を読み込み、HTML 内の参照を通して再起的に CSS などを読み込む。CSSOM の構築中も DOM の構築は進行。
2. HTML と CSS をパースして、DOM ツリーと CSS 用の CSSOM ツリーを構築する

#### HTML→DOM ツリー

① 字句解析：HTML の文字列がトークンと呼ばれる意味のあるチャンクに分割されます。これらのトークンは HTML のタグ、属性、内容などを表します。

```
StartTag: html、StartTag: head、StartTag: title、EndTag: title、……
```

② 構文解析: トークンをオブジェクト化(構文木作成)します。

```
DOCTYPE: html、HTML、HEAD、#text:、TITLE、#text: DevWhisperer、#text:、#text:、BODY、
#text:、H1、#text: 記事タイトル、#text:、#comment: コメント、#text:、p、#text: Hello World!!、#text:
```

③ DOM ツリーの構築：構文木から DOM ツリー(検証ツールの Elements で確認可能)が作成されます。この過程では、構文木内にある JavaScript が実行されることもあり、これが DOM ツリーの構築に影響を与えることがあります。

```
├DOCTYPE: html
└HTML
  ├HEAD
  │ ├#text:
  │ ├TITLE
  │ │ └#text: DevWhisperer、
  │ └#text:
  ├#text:
  └BODY
    ├#text:
    ├H1
    │ └#text: TITLE
    ├#text:
    ├#comment: コメント
    ├#text:
    ├p
    │ └#text: Hello World!!
    └#text:
```

#### CSS→CSSOM

DOM ツリー構築中に CSS ファイルの参照や Style の記述があると、上記の手順と同じように CSSOM というツリーを作成する。

※ DOM だけでなく CSSOM の構築も完了しなければ、レンダリングを始められないため、初期画面に必要な CSS だけを優先して読む方法もある

### Scripting: JavaScript の実行

HTML や CSS のツリー作成時同様に、字句解析と構文解析を行う

```
"console",".","log", "(","hello",")"
```

HTML パーサーが JavaScript のコードに到達すると、JavaScript を実行し、他の CSS や HTML の解析をブロックする(**Parser Blocking Resource**)

※ scripting が rendering の前に実行されるため、同期関数を実行すると rendering がその分遅れる

### Rendering

1. CSS のセレクタ名と DOM のマッチング処理
2. 適用されるスタイルの算出: 被っている CSS などがある場合、どのスタイルを優先・適用するかを決める。style=""に書くと優先度が高いなど色々ある。
3. レイアウト: 大きさやマージンなどの計算を行う

※ 「この画面をレンダリングした時に〜」という言い回しはこの rendering プロセスのみではなく、プロセス全体を指しており、このプロセスでは描画はまだ行わない

### Painting: スタイルの適用

1. Paint: 簡単なスタイル適用の命令を作成
2. Rasterize: 上記の命令をもとにピクセルでできたレイヤーへ描画
3. レイヤーの合成: 上記で作成した重なり合ったレイヤーなどを合成

### (状況によっては)再レンダリング

React の State 変更時などの再レンダリング時に全てのレンダリング処理が全てやり直しになるのではなく、必要な手順からやり直しを行う

# 3. チューニングの基礎

## チューニングのリスク

- コードの単純さが失われること
- 人的リソースが費やされること

闇雲にテクニックを実施するのではなく、前提条件やなぜパフォーマンスが改善されるかを理解することやコストパフォーマンスが良いか計測することが大事

## 計測

推測するのではなく、自分で開発したプロダクトであっても計測を行い、ボトルネックを改善する

## パフォーマンス改善の指標

| 項目                                          | 基準時間    |     |     |     |
| --------------------------------------------- | ----------- | --- | --- | --- |
| Response: ユーザーアクションへの応答          | 100ms       |     |     |     |
| Animation                                     | 15ms(60FPS) |     |     |     |
| Idle                                          | 50ms        |     |     |     |
| Load: loading icon など何かしらの初期画面描画 | 100ms       |     |     |     |

#### Animation

Scripting/Rendering/Painting の Frame 工程を何度も連続して再描画することで、アニメーションの動きを表現する
1 度の frame を 16ms 以内に収めると、1s で 60 回の frame 描画(60FPS)が行え、滑らかに感じる

#### Idle

ユーザーのアクションを待っている間にバックグラウンドで実行している JavaScript の処理を 50ms に抑える。1 分間何もアクションが長い場合は 50ms 毎のチャンクを何度も実行する。

## 計測手段

### Dev Tool による計測

ユーザーが実際に利用している条件下での計測ができない、自動化ができないという問題がある。

下記のタブを主に利用

- Network タブ
- Performance タブ
- Memory タブ

### JavaScript による計測

#### Navigation Timing API による計測

ユーザーがブラウザのナビゲーション処理に合計どれほど待たされているかを計測

ドキュメント読み込み時のパフォーマンス情報を中心に取得できる

```javascript
const timing = window.performance.timing;

// リダイレクトにかかる時間
console.log(timing.redirectEnd - timing.redirectStart);

// ドメインの解決にかかる時間
console.log(timing.domainLookupEnd - timing.domainLookupStart);
```

![navigation-api](/images/navigation-api.png)

### User Timing API による計測

任意の処理にかかる時間を計測できる。

```javascript
performance.mark("start");
new Promise((resolve) => setTimeOut(resolve, "2000"));
performance.mark("end");

// 測定を宣言する
// 測定に対してsomething-timeという名前をつける
performace.measure("something-time", "something-start", "something-end");

varmeasure = performance.getEntriesByName("something-time")[0];

// ミリ秒単位の処理時間
console.log(measure.duration);
```

### Resource Timing API による計測

- リダイレクト処理
- DNS lookup
- ネットワーク接続の確立
- HTTP レスポンスの受け取り

  上記四つの個別のパフォーマンスを測定可能

```javascript
const entries = performance.getEntriesByType("resource");

// DNS lookup開始時間
console.log(entries.domainLookupStart);

// DNS lookup終了時間
console.log(entries.domainLookupEnd);
```

## パフォーマンス診断ツール

### PageSpeed Insights

[こちら](https://pagespeed.web.dev/)で URL を打ち込み、パフォーマンスの計測と改善の施策を提案

![page-speed-insights](/images/page-speed-insights.png)

### Lighthouse

PageSpeed Insights の機能に加えて、

- アクセシビリティチェック
- PWA 準拠度チェック
- CLI ツールの提供
- 簡易な結果のエクスポート機能の提供

が含まれる

### New Relic

ユーザーの実際のパフォーマンスを継続的に視覚的に確認可能。内部的には Navigation Timing API などを利用。

# 参考

- [何度調べてもわからない DOM に決着をつける](https://zenn.dev/antez/articles/b6eb22cb228a49)
- [Web フロントエンド ハイパフォーマンス チューニング](https://www.amazon.co.jp/Web%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89-%E3%83%8F%E3%82%A4%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0-%E4%B9%85%E4%BF%9D%E7%94%B0-%E5%85%89%E5%89%87/dp/4774189677)
