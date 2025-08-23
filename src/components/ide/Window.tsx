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
            onPanelHeightChange={setPanelHeight}
            isPanelResizing={isPanelResizing}
            onPanelResizeStateChange={setIsPanelResizing}
          />
        </div>
        <div style={{ width: 300 }}>
          <AIPanelWrapper />
        </div>
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
  onPanelHeightChange,
  isPanelResizing,
  onPanelResizeStateChange,
}: {
  panelHeight: number;
  onPanelHeightChange: (height: number) => void;
  isPanelResizing: boolean;
  onPanelResizeStateChange: (isResizing: boolean) => void;
}) => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // パネルの表示状態を変更する際のハンドラー
  const handlePanelVisibilityChange = (isVisible: boolean) => {
    // パネルを表示する際に、サイズが最小の場合はデフォルトサイズに戻す
    if (isVisible && panelHeight < 80) {
      onPanelHeightChange(200);
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
          onPanelHeightChange(200);
        }
        setIsPanelVisible(!isPanelVisible);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPanelVisible, panelHeight, onPanelHeightChange]);

  const availableHeight = windowHeight - 35; // Header height
  const effectivePanelHeight = isPanelVisible ? panelHeight : 0;
  const editorHeight = Math.max(100, availableHeight - effectivePanelHeight); // 最小100px

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", flex: 1 }}>
      <div
        style={{
          height: `${editorHeight}px`,
          backgroundColor: Colors.ide.background,
          overflow: "hidden",
          transition: isPanelResizing ? "none" : "height 0.15s ease-out",
        }}
      >
        <Tab />
        <Editor />
      </div>
      <Panel
        height={panelHeight}
        onHeightChange={onPanelHeightChange}
        onResizeStateChange={onPanelResizeStateChange}
        isVisible={isPanelVisible}
        onVisibilityChange={handlePanelVisibilityChange}
      />
    </div>
  );
};

// 右側：AIとチャットできるところ
const AIPanelWrapper = () => {
  return (
    <div
      style={{
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
