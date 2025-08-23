import { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { Toolbar } from "./Toolbar";
import { FileExplorer } from "./FileExplorer";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Tab } from "./Tab";
import { Editor } from "./Editor";
import { AIPanel } from "./AIPanel";

export const IDEWindow = () => {
  const [panelHeight, setPanelHeight] = useState(200);
  const [isPanelResizing, setIsPanelResizing] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  // パネルの表示状態を変更する際のハンドラー
  const handlePanelVisibilityChange = (isVisible: boolean) => {
    // パネルを表示する際に、サイズが最小の場合はデフォルトサイズに戻す
    if (isVisible && panelHeight < 80) {
      setPanelHeight(200);
    }
    setIsPanelVisible(isVisible);
  };

  // キーボードショートカット（Ctrl+~）の実装
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+~ (Control + backtick/grave accent)
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        // パネルを表示する際に、サイズが最小の場合はデフォルトサイズに戻す
        if (!isPanelVisible && panelHeight < 80) {
          setPanelHeight(200);
        }
        setIsPanelVisible(!isPanelVisible);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPanelVisible, panelHeight]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: Colors.ide.background,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Header title="test" />
      <div style={{ display: "flex", flex: 1, flexDirection: "row", width: "100%" }}>
        <div style={{ width: 250 }}>
          <PrimarySideBar />
        </div>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <Pane
            panelHeight={panelHeight}
            isPanelResizing={isPanelResizing}
            isPanelVisible={isPanelVisible}
          />
        </div>
        <div style={{ width: 300 }}>
          <AIPanel />
        </div>
      </div>
      {/* パネルを絶対位置で配置 */}
      {isPanelVisible && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "250px", // PrimarySideBarの幅
            right: "300px", // AIPaneの幅
            zIndex: 10,
          }}
        >
          <Panel
            height={panelHeight}
            onHeightChange={setPanelHeight}
            onResizeStateChange={setIsPanelResizing}
            isVisible={isPanelVisible}
            onVisibilityChange={handlePanelVisibilityChange}
          />
        </div>
      )}
    </div>
  );
};

// ツールバーとかファイル一覧があるところ
const PrimarySideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        borderRight: `1px solid #3e3e42`,
      }}
    >
      <Toolbar />
      <FileExplorer />
    </div>
  );
};

// 真ん中
const Pane = ({
  panelHeight,
  isPanelResizing,
  isPanelVisible,
}: {
  panelHeight: number;
  isPanelResizing: boolean;
  isPanelVisible: boolean;
}) => {
  // パネルは絶対位置で配置されるため、エディターエリアのサイズ計算は不要

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ flex: 1, backgroundColor: Colors.ide.background }}>
        <Tab />
        <Editor />
        <div
          style={{
            flex: 1,
            backgroundColor: Colors.ide.background,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "14px",
            paddingBottom: isPanelVisible ? `${panelHeight}px` : "0px",
            transition: isPanelResizing ? "none" : "padding-bottom 0.15s ease-out",
          }}
        >
          Editor area (Panel visible: {isPanelVisible ? "Yes" : "No"})
        </div>
      </div>
    </div>
  );
};

// 右側：AIとチャットできるところ
const AIPane = () => {
  return (
    <div
      style={{
        height: "100%",
        // backgroundColor: Colors.ide.background,
        backgroundColor: "red",
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
