import { useState, useRef, useCallback, useEffect } from "react";
import { Colors } from "../../constants/Colors";

interface PanelTab {
  id: string;
  label: string;
  icon?: string;
  badge?: number;
}

const PANEL_TABS: PanelTab[] = [
  { id: "problems", label: "問題", badge: 0 },
  { id: "output", label: "出力" },
  { id: "debug", label: "デバッグ コンソール" },
  { id: "terminal", label: "ターミナル", badge: 1 },
  { id: "ports", label: "ポート" },
  { id: "gitlens", label: "GitLens" },
  { id: "spell", label: "Spell Checker" },
  { id: "docker", label: "docker", icon: "🐳" },
];

interface PanelProps {
  height?: number;
  onHeightChange?: (height: number) => void;
  onResizeStateChange?: (isResizing: boolean) => void;
}

export const Panel = ({ height = 200, onHeightChange, onResizeStateChange }: PanelProps) => {
  const [activeTab, setActiveTab] = useState("terminal");
  const [isMaximized, setIsMaximized] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      setStartY(e.clientY);
      setStartHeight(height);
      if (onResizeStateChange) {
        onResizeStateChange(true);
      }
    },
    [height, onResizeStateChange]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;

      // requestAnimationFrameを使用してスムーズなリサイズを実現
      requestAnimationFrame(() => {
        const deltaY = startY - e.clientY; // 上に動かすと正の値
        const newHeight = Math.max(100, Math.min(600, startHeight + deltaY)); // 最小100px、最大600px

        if (onHeightChange) {
          onHeightChange(newHeight);
        }
      });
    },
    [isResizing, startY, startHeight, onHeightChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    if (onResizeStateChange) {
      onResizeStateChange(false);
    }
  }, [onResizeStateChange]);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "ns-resize";
      document.body.style.userSelect = "none";

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={panelRef}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: Colors.ide.panel.background,
        borderTop: `1px solid ${Colors.ide.panel.border}`,
        height: isMaximized ? "100%" : `${height}px`,
        minHeight: "100px",
        maxHeight: "600px",
        transition: isResizing ? "none" : "height 0.15s ease-out",
      }}
    >
      {/* Resize Handle */}
      <div
        style={{
          height: "4px",
          backgroundColor: isResizing
            ? Colors.ide.panel.tabHoverBackground
            : Colors.ide.panel.background,
          cursor: "ns-resize",
          borderBottom: `1px solid ${Colors.ide.panel.border}`,
          transition: isResizing ? "none" : "background-color 0.2s ease",
        }}
        onMouseDown={handleMouseDown}
      />

      {/* Tab Bar */}
      <div
        style={{
          display: "flex",
          backgroundColor: Colors.ide.panel.tabBackground,
          borderBottom: `1px solid ${Colors.ide.panel.border}`,
          minHeight: "35px",
          alignItems: "center",
        }}
      >
        {/* Tabs */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {PANEL_TABS.map(tab => (
            <PanelTabItem
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* Tab Controls */}
        <div style={{ display: "flex", alignItems: "center", paddingRight: "8px" }}>
          <TabControlButton title="新しいターミナル">+</TabControlButton>
          <TabControlButton title="設定">⋯</TabControlButton>
          <TabControlButton
            title={isMaximized ? "最小化" : "最大化"}
            onClick={() => {
              setIsMaximized(!isMaximized);
              if (!isMaximized && onHeightChange) {
                // 最大化時は利用可能な高さの80%に設定
                const maxHeight = Math.min(600, (window.innerHeight - 35) * 0.8);
                onHeightChange(maxHeight);
              } else if (isMaximized && onHeightChange) {
                // 最小化時は200pxに戻す
                onHeightChange(200);
              }
            }}
          >
            {isMaximized ? "▼" : "▲"}
          </TabControlButton>
          <TabControlButton title="閉じる">×</TabControlButton>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <PanelContent activeTab={activeTab} />
      </div>
    </div>
  );
};

const PanelTabItem = ({
  tab,
  isActive,
  onClick,
}: {
  tab: PanelTab;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "4px 12px",
        margin: "4px 2px",
        backgroundColor: isActive
          ? Colors.ide.panel.background
          : isHover
            ? Colors.ide.panel.tabHoverBackground
            : Colors.ide.panel.tabBackground,
        color: isActive ? Colors.ide.panel.textActive : Colors.ide.panel.text,
        fontSize: "13px",
        cursor: "pointer",
        minWidth: "fit-content",
        whiteSpace: "nowrap",
        userSelect: "none",
        borderRadius: "8px",
        borderBottom: isActive
          ? `2px solid ${Colors.ide.panel.background}`
          : "2px solid transparent",
        transition: "all 0.15s ease",
        position: "relative",
        boxShadow: isActive ? `0 -2px 4px rgba(0, 0, 0, 0.15)` : "none",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {tab.icon && <span>{tab.icon}</span>}
      <span>{tab.label}</span>
      {tab.badge !== undefined && tab.badge > 0 && (
        <span
          style={{
            backgroundColor: "#e74c3c",
            color: "white",
            borderRadius: "10px",
            padding: "1px 6px",
            fontSize: "11px",
            minWidth: "16px",
            textAlign: "center",
          }}
        >
          {tab.badge}
        </span>
      )}
    </div>
  );
};

const TabControlButton = ({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode;
  title: string;
  onClick?: () => void;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      style={{
        background: isHover ? Colors.ide.panel.tabHoverBackground : "transparent",
        border: "none",
        color: Colors.ide.panel.text,
        padding: "4px 8px",
        margin: "0 2px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
      }}
      title={title}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </button>
  );
};

const PanelContent = ({ activeTab }: { activeTab: string }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "problems":
        return (
          <div style={{ padding: "16px", color: Colors.ide.panel.textMuted }}>
            問題は見つかりませんでした。
          </div>
        );
      case "output":
        return (
          <div style={{ padding: "16px", color: Colors.ide.panel.text }}>
            <div style={{ marginBottom: "8px", color: Colors.ide.panel.textMuted }}>
              出力チャンネルを選択してください
            </div>
          </div>
        );
      case "debug":
        return (
          <div style={{ padding: "16px", color: Colors.ide.panel.textMuted }}>
            デバッグセッションを開始してください。
          </div>
        );
      case "terminal":
        return (
          <div
            style={{
              padding: "12px",
              fontFamily: "Monaco, 'Cascadia Code', 'Roboto Mono', monospace",
              fontSize: "13px",
              lineHeight: "1.4",
              color: Colors.ide.panel.text,
            }}
          >
            <div style={{ color: "#569cd6" }}>Attaching to app-1</div>
            <div style={{ color: "#4ec9b0" }}>
              app-1 | <span style={{ color: Colors.ide.panel.text }}>yarn run v1.22.22</span>
            </div>
            <div style={{ color: "#4ec9b0" }}>
              app-1 | <span style={{ color: Colors.ide.panel.text }}>$ vite --host</span>
            </div>
            <div style={{ color: "#4ec9b0" }}>app-1 |</div>
            <div style={{ color: "#4ec9b0" }}>
              app-1 |{" "}
              <span style={{ color: Colors.ide.panel.text }}>VITE v7.1.3 ready in 94 ms</span>
            </div>
            <div style={{ color: "#4ec9b0" }}>app-1 |</div>
            <div style={{ color: "#4ec9b0" }}>
              app-1 |{" "}
              <span style={{ color: Colors.ide.panel.text }}>➜ Local: http://localhost:5173/</span>
            </div>
            <div style={{ color: "#4ec9b0" }}>
              app-1 |{" "}
              <span style={{ color: Colors.ide.panel.text }}>
                ➜ Network: http://192.168.107.2:5173/
              </span>
            </div>
            <div style={{ color: "#4ec9b0" }}>
              app-1 |{" "}
              <span style={{ color: "#ffd700" }}>
                1:23:10 PM [vite] (client) hmr update /src/components/ide/Tab.tsx
              </span>
            </div>
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center" }}>
              <span style={{ color: Colors.ide.panel.textMuted, marginRight: "8px" }}>
                ⌘K to generate a command
              </span>
            </div>
          </div>
        );
      case "ports":
        return (
          <div style={{ padding: "16px" }}>
            <div style={{ color: Colors.ide.panel.textMuted, marginBottom: "12px" }}>
              転送されたポート
            </div>
            <div style={{ color: Colors.ide.panel.text, fontSize: "13px" }}>
              localhost:5173 → app-1:5173
            </div>
          </div>
        );
      case "gitlens":
        return (
          <div style={{ padding: "16px", color: Colors.ide.panel.textMuted }}>
            GitLens: Git情報を表示
          </div>
        );
      case "spell":
        return (
          <div style={{ padding: "16px", color: Colors.ide.panel.textMuted }}>
            スペルチェッカー: 問題は見つかりませんでした。
          </div>
        );
      case "docker":
        return (
          <div style={{ padding: "16px" }}>
            <div style={{ color: Colors.ide.panel.text, marginBottom: "8px" }}>
              🐳 Docker コンテナ
            </div>
            <div style={{ color: Colors.ide.panel.textMuted, fontSize: "13px" }}>
              running: app-1 (beyond-tab)
            </div>
          </div>
        );
      default:
        return (
          <div style={{ padding: "16px", color: Colors.ide.panel.textMuted }}>
            コンテンツがありません
          </div>
        );
    }
  };

  return <div style={{ height: "100%", overflow: "auto" }}>{renderContent()}</div>;
};
