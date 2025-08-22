import { Colors } from "../../constants/Colors";
import { Toolbar } from "./Toolbar";
import { FileExplorer } from "./FileExplorer";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Tab } from "./Tab";
import { AIPanel } from "./AIPanel";

export const IDEWindow = () => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: Colors.ide.background }}>
      <Header title="test" />
      <div style={{ display: "flex", flexDirection: "row", height: "calc(100vh - 35px)" }}>
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
    <div style={{ display: "flex", flexDirection: "column", height: "100%", flex: 1 }}>
      <div style={{ flex: 1, backgroundColor: Colors.ide.background }}>
        <Tab />
        {/* Main editor area would go here */}
        <div
          style={{
            height: "calc(100% - 35px)",
            backgroundColor: Colors.ide.background,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Editor area
        </div>
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
      <AIPanel />
    </div>
  );
};
