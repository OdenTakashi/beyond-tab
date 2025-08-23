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
        <Token value="## キャッチコピー" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="ある日プログラミングライフに革命が起こりました" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="自力でコーディングする時代はもう終わり！" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="ひたすらTabキーを叩きまくれ！" isSuggestion />
      </>
    ),
  },
  {
    value: <></>,
  },
] as LineType[];
