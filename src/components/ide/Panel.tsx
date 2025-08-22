import { useState } from "react";
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

export const Panel = () => {
  const [activeTab, setActiveTab] = useState("terminal");
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: Colors.ide.panel.background,
        borderTop: `1px solid ${Colors.ide.panel.border}`,
        height: isMaximized ? "100%" : "200px",
        minHeight: "150px",
      }}
    >
      {/* Resize Handle */}
      <div
        style={{
          height: "4px",
          backgroundColor: Colors.ide.panel.background,
          cursor: "ns-resize",
          borderBottom: `1px solid ${Colors.ide.panel.border}`,
        }}
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
            onClick={() => setIsMaximized(!isMaximized)}
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
        gap: "6px",
        padding: "6px 12px",
        backgroundColor: isActive
          ? Colors.ide.panel.tabActiveBackground
          : isHover
            ? Colors.ide.panel.tabHoverBackground
            : "transparent",
        color: isActive ? Colors.ide.panel.textActive : Colors.ide.panel.text,
        fontSize: "13px",
        cursor: "pointer",
        borderRight: `1px solid ${Colors.ide.panel.border}`,
        minWidth: "fit-content",
        whiteSpace: "nowrap",
        userSelect: "none",
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
