import { Token } from "../components/ide/Token";
import type { SceneType } from "../types/Scene";

export default {
  lines: [
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
  ],
} as SceneType;
