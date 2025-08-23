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
  ],
} as SceneType;
