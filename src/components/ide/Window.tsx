import { Colors } from "../../constants/Colors";
import { Toolbar } from "./Toolbar";
import { FileExplorer } from "./FileExplorer";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Tab } from "./Tab";
import { Editor } from "./Editor";

export const IDEWindow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: Colors.ide.background,
      }}
    >
      <Header title="test" />
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <PrimarySideBar />
        <Pane />
        <AIPane />
      </div>
    </div>
  );
};

// ツールバーとかファイル一覧があるところ
const PrimarySideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "250px",
        backgroundColor: Colors.ide.background,
        borderRight: `1px solid #3e3e42`,
      }}
    >
      <Toolbar />
      <FileExplorer />
    </div>
  );
};

// 真ん中
const Pane = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, backgroundColor: Colors.ide.background }}>
        <Tab />
        <Editor />
      </div>
      <Panel />
    </div>
  );
};

// 右側：AIとチャットできるところ
const AIPane = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "100%",
        backgroundColor: Colors.ide.background,
        borderLeft: `1px solid #3e3e42`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#666",
        fontSize: "14px",
      }}
    >
      AI Pane
    </div>
  );
};
