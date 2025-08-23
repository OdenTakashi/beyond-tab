import { useState } from "react";

interface TabItem {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
  isModified: boolean;
  isCloseable: boolean;
}

export const Tab = () => {
  const [tabs, setTabs] = useState<TabItem[]>([
    {
      id: "1",
      name: "FileExplorer.tsx",
      icon: "⚛️", // Reactアイコン
      isActive: false,
      isModified: false,
      isCloseable: true,
    },
    {
      id: "2",
      name: "FileData.tsx",
      icon: "⚛️", // Reactアイコン
      isActive: false,
      isModified: false,
      isCloseable: true,
    },
  ]);

  const handleTabClick = (tabId: string) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabId,
    })));
  };

  const handleTabClose = (tabId: string) => {
    setTabs(tabs.filter(tab => tab.id !== tabId));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        borderBottom: "1px solid #3c3c3c",
        height: "35px",
        minHeight: "35px",
        overflow: "hidden",
      }}
    >
      {/* タブ一覧 */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              backgroundColor: tab.isActive ? "#1e1e1e" : "transparent",
              color: tab.isActive ? "#ffd700" : "#cccccc",
              fontSize: "13px",
              cursor: "pointer",
              borderRight: "1px solid #3c3c3c",
              minWidth: "fit-content",
              whiteSpace: "nowrap",
              userSelect: "none",
              position: "relative",
            }}
            onClick={() => handleTabClick(tab.id)}
          >
            {/* アイコン */}
            <span style={{ fontSize: "14px" }}>{tab.icon}</span>
            
            {/* ファイル名 */}
            <span style={{ fontWeight: "500" }}>{tab.name}</span>
            
            {/* 変更状態のMアイコン */}
            {tab.isModified && (
              <span
                style={{
                  color: "#ffd700",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                M
              </span>
            )}
            
            {/* 閉じるボタン */}
            {tab.isCloseable && (
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#cccccc",
                  cursor: "pointer",
                  padding: "2px",
                  borderRadius: "3px",
                  fontSize: "12px",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "8px",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTabClose(tab.id);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#3c3c3c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      {/* 右側のコントロールボタン */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0 8px",
          borderLeft: "1px solid #3c3c3c",
        }}
      >
        {/* ソースコントロールアイコン */}
        <button
          style={{
            background: "none",
            border: "none",
            color: "#cccccc",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "3px",
            fontSize: "14px",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="ソースコントロール"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3c3c3c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          🔀
        </button>

        {/* エディタ分割アイコン */}
        <button
          style={{
            background: "none",
            border: "none",
            color: "#cccccc",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "3px",
            fontSize: "14px",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="エディタを分割"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3c3c3c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          ⊞
        </button>

        {/* その他のオプション */}
        <button
          style={{
            background: "none",
            border: "none",
            color: "#cccccc",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "3px",
            fontSize: "14px",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="その他のオプション"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3c3c3c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          ⋯
        </button>
      </div>
    </div>
  );
};
