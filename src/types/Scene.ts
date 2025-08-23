import type { ChatType } from "./Chat";
import type { LineType } from "./LineValue";

export type SceneType = {
  // 完全なスナップショット
  editor: LineType[];
  // 追加分だけ
  ai?: ChatType[];
};
