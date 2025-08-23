import { useState, useEffect } from "react";

interface TabItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  isModified: boolean;
  isCloseable: boolean;
}

interface TabProps {
  selectedFiles?: string[];
  onTabClose?: (closedFileName: string) => void;
}

export const Tab = ({ selectedFiles = [], onTabClose }: TabProps) => {
  // デバッグ用ログ
  console.log("Tab component - selectedFiles:", selectedFiles);

  // selectedFilesが変更されたときにタブを更新
  const tabs = selectedFiles.map((fileName, index) => {
    const isActive = index === selectedFiles.length - 1; // 最後に選択されたファイルをアクティブにする

    // ファイル拡張子に基づいてアイコンを決定
    let icon: React.ReactNode = "📄";
    if (fileName.endsWith(".md")) {
      icon = (
        <img src="/src/assets/readme.svg" alt="ruby" style={{ width: "16px", height: "16px" }} />
      );
    } else if (fileName.endsWith(".oden")) {
      icon = (
        <img src="/src/assets/ruby.svg" alt="ruby" style={{ width: "16px", height: "16px" }} />
      );
    }

    return {
      id: fileName,
      name: fileName,
      icon,
      isActive,
      isModified: false,
      isCloseable: true,
    };
  });

  console.log("Tab component - generated tabs:", tabs);

  const handleTabClick = (tabId: string) => {
    // タブクリック時の処理は親コンポーネントで管理するため、ここでは何もしない
    // 必要に応じて、親コンポーネントに通知するコールバックを追加することも可能
  };

  const handleTabClose = (tabId: string) => {
    // タブを閉じた時に親コンポーネントに通知
    if (onTabClose) {
      onTabClose(tabId);
    }
  };

  // タブがない場合は何も表示しない
  if (tabs.length === 0) {
    return null;
  }

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
        <div
          style={{
            display: "flex",
            overflow: "auto",
            flex: 1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {tabs.map(tab => (
            <div
              key={tab.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                backgroundColor: tab.isActive ? "#1e1e1e" : "transparent",
                color: tab.isActive ? "#ffffff" : "#cccccc",
                fontSize: "13px",
                cursor: "pointer",
                borderRight: "1px solid #3c3c3c",
                minWidth: "fit-content",
                whiteSpace: "nowrap",
                userSelect: "none",
                position: "relative",
                flexShrink: 0,
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
                  onClick={e => {
                    e.stopPropagation();
                    handleTabClose(tab.id);
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#3c3c3c";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
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
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#3c3c3c";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="5" cy="6" r="3" />
            <path d="M12 6h5a2 2 0 0 1 2 2v7" />
            <path d="m15 9-3-3 3-3" />
            <circle cx="19" cy="18" r="3" />
            <path d="M12 18H7a2 2 0 0 1-2-2V9" />
            <path d="m9 15 3 3-3 3" />
          </svg>
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
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#3c3c3c";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 3v18" />
          </svg>
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
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#3c3c3c";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          ⋯
        </button>
      </div>
    </div>
  );
};
