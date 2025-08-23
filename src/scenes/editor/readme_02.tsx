import type { LineType } from "../../types/LineValue";
import { Token } from "../../components/ide/Token";

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
        <Token value="## アプリ概要" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token
          value="このアプリは、ひたすらTabキーを連打するだけでコードが完成するという、かつてないコーディング体験を提供するシミュレーターです。"
          isSuggestion
        />
      </>
    ),
  },
] as LineType[];
