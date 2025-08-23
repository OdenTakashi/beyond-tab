import type { ChatType } from "./Chat";
import type { LineType } from "./LineValue";
import type { TerminalValue } from "./TerminalValue";

export type SceneType = {
  // 完全なスナップショット
  editor: LineType[];
  // 追加分だけ
  ai?: ChatType[];
  // ターミナルの出力
  terminal?: TerminalValue[];

  opacity: number;
};
