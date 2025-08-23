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
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleFileSelect = (files: string[]) => {
    if (files.length === 1) {
      const fileName = files[0];

      // ファイルが既に選択されている場合は、既存の選択を維持
      // 新しく選択されていない場合のみ追加
      setSelectedFiles(prev => {
        let newFiles: string[];

        if (prev.includes(fileName)) {
          // 既に選択されている場合は、そのファイルを最後に移動（アクティブにする）
          newFiles = [...prev.filter(file => file !== fileName), fileName];
        } else {
          // 新しく選択されていない場合は追加
          newFiles = [...prev, fileName];
        }

        return newFiles;
      });
    }
  };

  const handleTabClose = (closedFileName: string) => {
    // タブが閉じられたファイルを選択されたファイルリストから削除
    setSelectedFiles(prev => {
      const newFiles = prev.filter(file => file !== closedFileName);
      return newFiles;
    });
  };

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
          <PrimarySideBar onFileSelect={handleFileSelect} />
        </div>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <Pane
            panelHeight={panelHeight}
            onPanelHeightChange={setPanelHeight}
            isPanelResizing={isPanelResizing}
            onPanelResizeStateChange={setIsPanelResizing}
            selectedFiles={selectedFiles}
            onTabClose={handleTabClose}
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
const PrimarySideBar = ({ onFileSelect }: { onFileSelect: (files: string[]) => void }) => {
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
      <FileExplorer onFileSelect={onFileSelect} />
    </div>
  );
};

// 真ん中
const Pane = ({
  panelHeight,
  onPanelHeightChange,
  isPanelResizing,
  onPanelResizeStateChange,
  selectedFiles,
  onTabClose,
}: {
  panelHeight: number;
  onPanelHeightChange: (height: number) => void;
  isPanelResizing: boolean;
  onPanelResizeStateChange: (isResizing: boolean) => void;
  selectedFiles: string[];
  onTabClose: (closedFileName: string) => void;
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
        <Tab selectedFiles={selectedFiles} onTabClose={onTabClose} />
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
