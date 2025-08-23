import { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { Toolbar } from "./Toolbar";
import { FileExplorer } from "./FileExplorer";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Tab } from "./Tab";
import { Editor } from "./Editor";
import { AIPanel } from "./AIPanel";
import type { SceneType } from "../../types/Scene";
import nanimonodemonai from "../../scenes/nanimonodemonai";
import type { LineType } from "../../types/LineValue";
import readmeScenes from "../../scenes/readme";
import daikonScenes from "../../scenes/daikon";

// ファイルタイプ別のシーン配列を定義
const README_SCENES = readmeScenes;
const ODEN_SCENES = daikonScenes;

export const IDEWindow = () => {
  const [panelHeight, setPanelHeight] = useState(300);
  const [isPanelResizing, setIsPanelResizing] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<string[]>(["README.md"]);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [currentFile, setCurrentFile] = useState<string>("README.md");

  // Tabキーでシーンを切り替える
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault(); // デフォルトのTab移動を防ぐ

      // 現在のファイルに応じて最大シーン数を取得
      let maxSceneIndex = 0;
      if (currentFile === "README.md") {
        maxSceneIndex = README_SCENES.length - 1;
      } else if (currentFile === "daikon.oden") {
        maxSceneIndex = ODEN_SCENES.length - 1;
      } else {
        maxSceneIndex = README_SCENES.length - 1;
      }

      // 最大シーン数に達していない場合のみシーンを切り替え
      if (sceneIndex < maxSceneIndex) {
        setSceneIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  const handleFileSelect = (files: string[]) => {
    if (files.length === 1) {
      const fileName = files[0];

      // 現在選択されているファイルを更新
      setCurrentFile(fileName);

      // ファイルに応じてシーンインデックスを設定
      if (fileName === "README.md") {
        setSceneIndex(0); // scene01から開始
      } else if (fileName === "daikon.oden") {
        setSceneIndex(0); // sceneReadme01から開始
      } else if (fileName === "konbu.oden") {
        setSceneIndex(0); // sceneReadme01から開始
      } else if (fileName === "tanpen.oden") {
        setSceneIndex(0); // sceneReadme01から開始
      } else if (fileName === "post.oden") {
        setSceneIndex(0); // sceneReadme01から開始
      }

      // ファイルが既に選択されている場合は、順序を変更せず選択状態のみ更新
      // 新しく選択されていない場合のみ追加
      setSelectedFiles(prev => {
        if (prev.includes(fileName)) {
          // 既に選択されている場合は、順序を変更せずそのまま返す
          return prev;
        } else {
          // 新しく選択されていない場合は末尾に追加
          return [...prev, fileName];
        }
      });
    }
  };

  const handleTabClick = (fileName: string) => {
    // タブクリック時にファイルを選択状態にする
    setCurrentFile(fileName);

    // ファイルの順序は変更せず、選択状態のみ更新
    // 既存のタブの位置は維持される
  };

  const handleTabClose = (closedFileName: string) => {
    // タブが閉じられたファイルを選択されたファイルリストから削除
    setSelectedFiles(prev => {
      const newFiles = prev.filter(file => file !== closedFileName);
      return newFiles;
    });
  };

  // 現在選択されているファイルに応じてEditorの内容を決定
  const getEditorContent = () => {
    if (currentFile === "README.md") {
      // README.mdの場合は、sceneReadme01, sceneReadme02, ... の順番で表示
      if (sceneIndex < README_SCENES.length) {
        return README_SCENES[sceneIndex] || README_SCENES[0];
      }
      return README_SCENES[0];
    } else if (currentFile === "daikon.oden") {
      // .odenファイルの場合は、scene01, scene02, ... の順番で表示
      if (sceneIndex < ODEN_SCENES.length) {
        return ODEN_SCENES[sceneIndex] || ODEN_SCENES[0];
      }
      return ODEN_SCENES[0];
    } else {
      // その他のファイルの場合はnanimonodemonai.tsxの内容を表示
      return nanimonodemonai;
    }
  };

  return (
    <div
      tabIndex={0} // キーボードイベントを受け取れるようにする
      onKeyDown={handleKeyDown}
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
            scene={getEditorContent()}
            editorContent={getEditorContent().editor}
            panelHeight={panelHeight}
            onPanelHeightChange={setPanelHeight}
            isPanelResizing={isPanelResizing}
            onPanelResizeStateChange={setIsPanelResizing}
            selectedFiles={selectedFiles}
            onTabClose={handleTabClose}
            onTabClick={handleTabClick}
          />
        </div>
        <div style={{ width: 300 }}>
          <AIPanelWrapper scene={getEditorContent()} />
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
  scene,
  editorContent,
  panelHeight,
  onPanelHeightChange,
  isPanelResizing,
  onPanelResizeStateChange,
  selectedFiles,
  onTabClose,
  onTabClick,
}: {
  scene: SceneType;
  editorContent: LineType[];
  panelHeight: number;
  onPanelHeightChange: (height: number) => void;
  isPanelResizing: boolean;
  onPanelResizeStateChange: (isResizing: boolean) => void;
  selectedFiles: string[];
  onTabClose: (closedFileName: string) => void;
  onTabClick: (fileName: string) => void;
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
      onPanelHeightChange(300);
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
          onPanelHeightChange(300);
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tab selectedFiles={selectedFiles} onTabClose={onTabClose} onTabClick={onTabClick} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Editor lines={editorContent} opacity={scene.opacity} />
        </div>
      </div>
      <Panel
        scene={scene}
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
const AIPanelWrapper = ({ scene }: { scene: SceneType }) => {
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
      <AIPanel chat={scene.ai} />
    </div>
  );
};
