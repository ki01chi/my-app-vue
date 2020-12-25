# Haiiku
**誰もが気軽に投稿できる俳句アプリです。**
<br><br>
**URL：** https://my-app-vue-1b432.web.app/

## アプリ概要  
  
誰でも簡単に俳句をつくって投稿できるアプリです。  
そのため、投稿などはログインしなくてもできるようにしています。
スマートフォンからでも投稿できるようにレスポンシブにも対応しております。  

投稿された俳句をみて 「はぁ、、良い句♪」 と思わず感嘆をもらすという意味を込めて、  
**「Haiiku」** という名前でサービスを開発しました。  

## 開発した背景  

某バラエティ番組の俳句コーナーを見て 「俳句つくっても見せる場所がない」 という母の一言を聞いて
もっと身近に共有できる場所があればと思い、開発しました。
昨今は気軽に人に会うことも難しくなってしまったので、距離があってもチャットのような感覚で趣味を共有というコンセプトで作りました。  

## 使用画面のイメージ
#### メインページ
![haikuPF](https://user-images.githubusercontent.com/70625280/102736591-a521c880-4388-11eb-8609-b420851b2273.png)

#### 新規登録画面
![スクリーンショット 2020-12-21 12 16 21](https://user-images.githubusercontent.com/70625280/102735929-fdf06180-4386-11eb-8853-77be93a89df2.png)

#### ログイン画面
![スクリーンショット 2020-12-21 12 16 07](https://user-images.githubusercontent.com/70625280/102735923-f761ea00-4386-11eb-85d1-f9d9ef862e44.png)

#### GIF
![Haiiku](https://user-images.githubusercontent.com/70625280/102737853-d8b22200-438b-11eb-8af8-109600c006c2.gif)

## 使用技術

* __フロントエンド__
  * __Vue.js ( VueRouter / Vuetify )__

* __バックエンド__
  * __Firebase ( Hosting / Authentication / CloudFirestore )__
  
## 機能一覧

* __ユーザー登録関連__
  * 新規登録
  * ログイン、ログアウト機能
  * パスワード表示、非表示切り替え機能
  
* __投稿関連__
  * 俳句投稿機能
  * ローマ字縦書き対応
  * 日付表示
