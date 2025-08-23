import { Token } from "../../components/ide/Token";
import type { LineType } from "../../types/LineValue";

export default [
  {
    value: (
      <>
        <Token value="# アプリ概要" />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="## タイトル" />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="Tabキーだけじゃだめですか" />
      </>
    ),
  },
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="## キャッチコピー" />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="ある日プログラミングライフに革命が起こりました" />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="自力でコーディングする時代はもう終わり！" />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="ひたすらTabキーを叩きまくれ！" />
      </>
    ),
  },
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="## アプリ概要" />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="このアプリは、ひたすらTabキーを連打するだけでコードが完成するという、かつてないコーディング体験を提供するシミュレーターです。" />
      </>
    ),
  },
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="もはや、指先の運動能力こそが、最高のコードを生み出す鍵となるでしょう。タイピング速度、思考力、アルゴリズム設計…そんな常識は今日をもって捨て去ってください。" />
      </>
    ),
  },
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="あなたの指先から生まれる、虚無とコードのハーモニーを心ゆくまでお楽しみください。" />
      </>
    ),
  },
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="# 遊び方" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="1. Tabを叩いてコーティングする" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token
          value="controller/daikon.oden ファイルを開いてください。このファイルは、あなたのTabキー連打をただひたすらに待っています。あとは、指が筋肉痛になるまでTabキーを叩きまくってください。"
          isSuggestion
        />
      </>
    ),
  },
] as LineType[];
