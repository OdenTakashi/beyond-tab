import { Colors } from "../../constants/Colors";
import { Toolbar } from "./Toolbar";
import { FileExplorer } from "./FileExplorer";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Tab } from "./Tab";
import { AIPanel } from "./AIPanel";

export const IDEWindow = () => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: Colors.ide.background }}>
      <Header title="test" />
      <div style={{ display: "flex", flexDirection: "row", height: "calc(100% - 32px)" }}>
        <PrimarySideBar />
        <Pane />
        <AIPanel />
      </div>
    </div>
  );
};

// ツールバーとかファイル一覧があるところ
const PrimarySideBar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      <Toolbar />
      <FileExplorer />
    </div>
  );
};

// 真ん中
const Pane = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", flex: 1, overflow: "hidden" }}>
      <Tab />
      <Panel />
    </div>
  );
};
