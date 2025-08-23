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
import sceneReadme01 from "../../scenes/readme_01";
import sceneReadme02 from "../../scenes/readme_02";
import sceneReadme03 from "../../scenes/readme_03";
import sceneReadme04 from "../../scenes/readme_04";
import sceneReadme05 from "../../scenes/readme_05";
import { scene01 } from "../../scenes/01";
import { scene02 } from "../../scenes/02";
import nanimonodemonai from "../../scenes/nanimonodemonai";
import type { ChatType } from "../../types/Chat";
import type { LineType } from "../../types/LineValue";

const scenes: SceneType[] = [
  sceneReadme01,
  sceneReadme02,
  sceneReadme03,
  sceneReadme04,
  sceneReadme05,
  scene01,
  scene02,
];

// ファイルタイプ別のシーン配列を定義
const README_SCENES = [sceneReadme01, sceneReadme02, sceneReadme03, sceneReadme04, sceneReadme05];
const ODEN_SCENES = [scene01, scene02];

export const IDEWindow = () => {
  const [panelHeight, setPanelHeight] = useState(200);
  const [isPanelResizing, setIsPanelResizing] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<string[]>(["README.md"]);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [currentFile, setCurrentFile] = useState<string>("README.md");
  const scene = scenes[sceneIndex];

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
        maxSceneIndex = scenes.length - 1;
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

  // 現在選択されているファイルに応じてEditorの内容を決定
  const getEditorContent = () => {
    if (currentFile === "README.md") {
      // README.mdの場合は、sceneReadme01, sceneReadme02, ... の順番で表示
      if (sceneIndex < README_SCENES.length) {
        return README_SCENES[sceneIndex]?.editor || sceneReadme01.editor;
      }
      return sceneReadme01.editor;
    } else if (currentFile === "daikon.oden") {
      // .odenファイルの場合は、scene01, scene02, ... の順番で表示
      if (sceneIndex < ODEN_SCENES.length) {
        return ODEN_SCENES[sceneIndex]?.editor || scene01.editor;
      }
      return scene01.editor;
    } else {
      // その他のファイルの場合はnanimonodemonai.tsxの内容を表示
      return nanimonodemonai.editor;
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
            scene={scene}
            editorContent={getEditorContent()}
            panelHeight={panelHeight}
            onPanelHeightChange={setPanelHeight}
            isPanelResizing={isPanelResizing}
            onPanelResizeStateChange={setIsPanelResizing}
            selectedFiles={selectedFiles}
            onTabClose={handleTabClose}
          />
        </div>
        <div style={{ width: 300 }}>
          <AIPanelWrapper scene={scene} />
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
}: {
  scene: SceneType;
  editorContent: LineType[];
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
        <Editor lines={editorContent} />
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
