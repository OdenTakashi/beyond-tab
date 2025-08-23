import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIPanel = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "こんにちは！AIアシスタントです。コードの作成や修正、質問など、どんなことでもお手伝いさせていただきます。",
      isUser: false,
      timestamp: new Date("2024-03-20T10:00:00"),
    },
    {
      id: "2",
      content: "React + TypeScriptのプロジェクトを作りたいです。",
      isUser: true,
      timestamp: new Date("2024-03-20T10:01:00"),
    },
    {
      id: "3",
      content:
        "はい、承知しました。新しいプロジェクトを作成するために、以下のような手順をお勧めします：\n\n1. Viteを使用してプロジェクトを作成\n2. 必要なパッケージのインストール\n3. 基本的なコンポーネント構造の設定\n\nまずは、どのような機能を実装したいかお聞かせいただけますか？",
      isUser: false,
      timestamp: new Date("2024-03-20T10:01:30"),
    },
    {
      id: "4",
      content: "IDEライクなUIを作りたいです。VS Codeのような見た目にしたいです。",
      isUser: true,
      timestamp: new Date("2024-03-20T10:02:00"),
    },
    {
      id: "5",
      content:
        "素晴らしいアイデアですね。VS Codeライクなインターフェースを実装するために、以下のコンポーネントが必要になるでしょう：\n\n1. サイドバー（ファイルエクスプローラー）\n2. タブバー\n3. エディターパネル\n4. ステータスバー\n\nまた、VS Codeのダークテーマに合わせたカラースキームも用意しましょう。\n\n最初にどの部分から実装を始めたいですか？",
      isUser: false,
      timestamp: new Date("2024-03-20T10:02:30"),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: "#1e1e1e",
        borderLeft: `1px solid #2d2d30`,
      }}
    >
      {/* CHATヘッダー */}
      <div
        style={{
          padding: "8px 12px",
          backgroundColor: "#1e1e1e",
          borderBottom: "1px solid #2d2d30",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "11px",
          color: "#cccccc",
          fontWeight: 500,
          minHeight: "32px",
        }}
      >
        <span>CHAT</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              color: "#cccccc",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="#cccccc" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              color: "#cccccc",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#cccccc" strokeWidth="1" fill="none" />
              <path d="M8 5v3M8 11h0" />
            </svg>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              color: "#cccccc",
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="#cccccc">
              <circle cx="8" cy="3" r="1" />
              <circle cx="8" cy="8" r="1" />
              <circle cx="8" cy="13" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* メッセージエリア */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          backgroundColor: "#1e1e1e",
          minHeight: 0,
          maxHeight: "calc(100vh - 200px)",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={message.id}
            style={{
              padding: index === 0 ? "4px 12px 8px 12px" : "8px 12px",
              backgroundColor: message.isUser ? "#252526" : "#1e1e1e",
              borderBottom: index === messages.length - 1 ? "none" : "1px solid #2d2d30",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                color: "#e4e4e4",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 入力エリア */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          borderTop: "1px solid #2d2d30",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        {/* フォーム部分 */}
        <div
          style={{
            padding: "8px",
            display: "flex",
            alignItems: "stretch",
            gap: "8px",
          }}
        >
          <div
            style={{
              backgroundColor: "#252526",
              borderRadius: "6px",
              border: "1px solid #3c3c3c",
              padding: "8px",
              flex: 1,
              height: "60px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <textarea
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                placeholder="Plan, search, build anything"
                style={{
                  width: "100%",
                  minHeight: "44px",
                  maxHeight: "44px",
                  padding: "0",
                  fontSize: "13px",
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#cccccc",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  outline: "none",
                  resize: "none",
                  lineHeight: "1.4",
                  overflowY: "auto",
                }}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
            </form>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "2px",
              flexShrink: 0,
              paddingBottom: "8px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "2px",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="#cccccc">
                <path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h12v2H2z" />
              </svg>
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                borderRadius: "2px",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#cccccc" strokeWidth="1" fill="none" />
                <path d="M8 5v3M8 11h0" />
              </svg>
            </button>
          </div>
        </div>

        {/* Agent・Model情報 */}
        <div
          style={{
            padding: "4px 12px 8px 12px",
            fontSize: "11px",
            color: "#cccccc",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            borderTop: "1px solid #2d2d30",
            backgroundColor: "#1a1a1a",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              backgroundColor: "#2d2d30",
              borderRadius: "4px",
              padding: "2px 6px",
            }}
          >
            <span style={{ fontSize: "10px" }}>♾️</span>
            <span style={{ fontWeight: 500, color: "#858585", fontSize: "10px" }}>Agent</span>
          </div>
          <span style={{ color: "#858585", fontSize: "10px" }}>claude-4-sonnet</span>
        </div>
      </div>
    </div>
  );
};
