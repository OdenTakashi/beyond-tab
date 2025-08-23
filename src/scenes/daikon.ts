import type { SceneType } from "../types/Scene";
import editor01 from "./editor/daikon_01";
import editor01_fix from "./editor/daikon_01_fix";
import editor02 from "./editor/daikon_02";
import editor03 from "./editor/daikon_03";
import editor03_fix from "./editor/daikon_03_fix";
import editor05 from "./editor/daikon_05";
import editor05_fix from "./editor/daikon_05_fixed";
import editor06 from "./editor/daikon_06";
import editor06_fix from "./editor/daikon_06_fixed";
import editor07 from "./editor/daikon_07";
import editor07_fix from "./editor/daikon_07_fix";
import editor08 from "./editor/daikon_08";
import editor08_fix from "./editor/daikon_08_fix";
import editor09 from "./editor/daikon_09";
import editor09_fix from "./editor/daikon_09_fix";
import editor11 from "./editor/daikon_11";
import editor11_fix from "./editor/daikon_11_fix";
import editor12 from "./editor/daikon_12";
import editor12_fix from "./editor/daikon_12_fix";
import editor13 from "./editor/daikon_13";
import editor14 from "./editor/daikon_14";
import terminal01 from "./terminal/terminal_01";
import terminal02 from "./terminal/terminal_02";
import terminal03 from "./terminal/terminal_03";
import terminal06 from "./terminal/terminal_06";
import terminal07 from "./terminal/terminal_07";
import terminal08 from "./terminal/terminal_08";
import terminal09 from "./terminal/terminal_09";
import terminal10 from "./terminal/terminal_10";
import terminal11 from "./terminal/terminal_11";
import terminal12 from "./terminal/terminal_12";
import terminal13 from "./terminal/terminal_13";
import terminal14 from "./terminal/terminal_14";
import terminal15 from "./terminal/terminal_15";
import terminal16 from "./terminal/terminal_16";
import terminal19 from "./terminal/terminal_19";
import terminal20 from "./terminal/terminal_20";
import terminal21 from "./terminal/terminal_21";
import terminal22 from "./terminal/terminal_22";
import ai01 from "./ai/ai_01";
import ai02 from "./ai/ai_02";
import ai03 from "./ai/ai_03";

export default [
  // ユーザを作る
  {
    editor: editor01,
    opacity: 0,
  },
  // terminal: User instance を作成
  {
    editor: editor01_fix,
    opacity: 0,
  },
  {
    editor: editor01_fix,
    terminal: terminal01,
    opacity: 0,
  },
  // laugh を定義
  {
    editor: editor02,
    opacity: 0,
  },
  // Emotion を定義
  {
    editor: editor03,
    opacity: 0,
  },
  // terminal: わらう
  {
    editor: editor03_fix,
    opacity: 0,
  },
  {
    editor: editor03_fix,
    terminal: terminal02,
    opacity: 0,
  },
  {
    editor: editor03_fix,
    terminal: terminal03,
    opacity: 0,
  },
  // coding を定義
  {
    editor: editor05,
    opacity: 0,
  },
  // terminal: coding
  {
    editor: editor05_fix,
    opacity: 0,
  },
  {
    editor: editor05_fix,
    terminal: terminal06,
    opacity: 0,
  },
  {
    editor: editor05_fix,
    terminal: terminal07,
    opacity: 0,
  },
  // vibe コーディングを定義
  {
    editor: editor06,
    opacity: 0,
  },
  // terminal: vibe コーディング
  {
    editor: editor06_fix,
    opacity: 0,
  },
  {
    editor: editor06_fix,
    terminal: terminal08,
    opacity: 0,
  },
  {
    editor: editor06_fix,
    terminal: terminal09,
    opacity: 0,
  },
  // terminal: travel_to
  {
    editor: editor06_fix,
    terminal: terminal10,
    opacity: 0,
  },
  // ユーザの年齢を取得
  {
    editor: editor07,
    opacity: 0,
  },
  // terminal: 年齢を取得
  {
    editor: editor07_fix,
    opacity: 0,
  },
  {
    editor: editor07_fix,
    terminal: terminal11,
    opacity: 0,
  },
  {
    editor: editor07_fix,
    terminal: terminal12,
    opacity: 0,
  },
  // 感情が nil になる
  {
    editor: editor08,
    opacity: 0,
  },
  // terminal: 感情が nil になる（coding）
  {
    editor: editor08_fix,
    opacity: 0,
  },
  {
    editor: editor08_fix,
    terminal: terminal13,
    opacity: 0,
  },
  {
    editor: editor08_fix,
    terminal: terminal14,
    opacity: 0,
  },
  // laugh に reason が必要になる
  {
    editor: editor09,
    opacity: 0,
  },
  // terminal: laugh がエラーになる
  {
    editor: editor09_fix,
    opacity: 0,
  },
  {
    editor: editor09_fix,
    terminal: terminal15,
    opacity: 0,
  },
  {
    editor: editor09_fix,
    terminal: terminal16,
    opacity: 0,
  },
  // chat: 感情を削除する
  {
    editor: editor09_fix,
    ai: ai01,
    opacity: 0.01,
  },
  // terminal: 感情を削除する
  {
    editor: editor09_fix,
    terminal: terminal19,
    opacity: 0.05,
  },
  // Emotion が消える
  {
    editor: editor11,
    opacity: 0.05,
  },
  {
    editor: editor11_fix,
    opacity: 0.1,
  },
  // ai: 行動が削除される
  {
    editor: editor11_fix,
    ai: ai02,
    opacity: 0.2,
  },
  // terminal: 行動が削除される
  {
    editor: editor11_fix,
    terminal: terminal20,
    opacity: 0.2,
  },
  // Action が消える
  {
    editor: editor12,
    opacity: 0.2,
  },
  {
    editor: editor12_fix,
    opacity: 0.2,
  },
  // ai: ユーザーが消える
  {
    editor: editor12_fix,
    ai: ai03,
    opacity: 0.2,
  },
  // terminal: ユーザーが消える
  {
    editor: editor12_fix,
    terminal: terminal21,
    opacity: 0.3,
  },
  // User が消える
  {
    editor: editor13,
    opacity: 0.4,
  },
  // 何もかもなくなる（虚無）
  {
    editor: editor14,
    opacity: 0.5,
  },
  {
    editor: editor14,
    terminal: terminal22,
    opacity: 0.5,
  },
] as SceneType[];
