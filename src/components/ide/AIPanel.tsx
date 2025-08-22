import { useState } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIPanel = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'こんにちは！AIアシスタントです。コードの作成や修正、質問など、どんなことでもお手伝いさせていただきます。',
      isUser: false,
      timestamp: new Date('2024-03-20T10:00:00'),
    },
    {
      id: '2',
      content: 'React + TypeScriptのプロジェクトを作りたいです。',
      isUser: true,
      timestamp: new Date('2024-03-20T10:01:00'),
    },
    {
      id: '3',
      content: 'はい、承知しました。新しいプロジェクトを作成するために、以下のような手順をお勧めします：\n\n1. Viteを使用してプロジェクトを作成\n2. 必要なパッケージのインストール\n3. 基本的なコンポーネント構造の設定\n\nまずは、どのような機能を実装したいかお聞かせいただけますか？',
      isUser: false,
      timestamp: new Date('2024-03-20T10:01:30'),
    },
    {
      id: '4',
      content: 'IDEライクなUIを作りたいです。VS Codeのような見た目にしたいです。',
      isUser: true,
      timestamp: new Date('2024-03-20T10:02:00'),
    },
    {
      id: '5',
      content: '素晴らしいアイデアですね。VS Codeライクなインターフェースを実装するために、以下のコンポーネントが必要になるでしょう：\n\n1. サイドバー（ファイルエクスプローラー）\n2. タブバー\n3. エディターパネル\n4. ステータスバー\n\nまた、VS Codeのダークテーマに合わせたカラースキームも用意しましょう。\n\n最初にどの部分から実装を始めたいですか？',
      isUser: false,
      timestamp: new Date('2024-03-20T10:02:30'),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

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
    setInputMessage('');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '300px',
      backgroundColor: '#1e1e1e',
      borderLeft: `1px solid #2d2d30`,
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '8px 12px',
        backgroundColor: '#1e1e1e',
        borderBottom: '1px solid #2d2d30',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#cccccc',
        fontWeight: 500,
      }}>
        <span>CHAT</span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            color: '#cccccc',
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="#cccccc" strokeWidth="1.5" />
            </svg>
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            color: '#cccccc',
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#cccccc" strokeWidth="1" fill="none" />
              <path d="M8 5v3M8 11h0" />
            </svg>
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            color: '#cccccc',
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="#cccccc">
              <circle cx="8" cy="3" r="1" />
              <circle cx="8" cy="8" r="1" />
              <circle cx="8" cy="13" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* メッセージ入力 */}
      <div style={{
        padding: '8px 12px',
        backgroundColor: '#1e1e1e',
        borderBottom: '1px solid #2d2d30',
      }}>
        <div style={{
          backgroundColor: '#252526',
          borderRadius: '4px',
          border: '1px solid #3c3c3c',
          padding: '8px',
          fontSize: '12px',
          color: '#cccccc',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ color: '#ffd700' }}>⚠️</span>
          <span>スクリーンショットのスタイル全てを再現して</span>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#cccccc',
            marginLeft: 'auto',
          }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#cccccc" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* メッセージエリア */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1e1e1e',
      }}>
        <div style={{
          padding: '16px',
          fontSize: '12px',
          color: '#cccccc',
          lineHeight: '1.5',
        }}>
          <div style={{ marginBottom: '12px', fontWeight: 500 }}>主な改善点：</div>

          <div style={{ marginBottom: '8px', fontWeight: 500 }}>1. ヘッダー部分:</div>
          <div style={{ marginLeft: '16px', marginBottom: '8px' }}>
            <div style={{ marginBottom: '2px' }}>• 背景色を #181818 に変更</div>
            <div style={{ marginBottom: '2px' }}>• アイコンをSVGに変更</div>
            <div style={{ marginBottom: '2px' }}>• フォントサイズを11pxに調整</div>
            <div style={{ marginBottom: '2px' }}>• "Keep All" ボタンを青色背景に</div>
          </div>

          <div style={{ marginBottom: '8px', fontWeight: 500 }}>2. タブ部分:</div>
          <div style={{ marginLeft: '16px', marginBottom: '8px' }}>
            <div style={{ marginBottom: '2px' }}>• アイコンをSVGに変更</div>
            <div style={{ marginBottom: '2px' }}>• より小さなサイズに調整</div>
          </div>

          <div style={{ marginBottom: '8px', fontWeight: 500 }}>3. プラン入力部分:</div>
          <div style={{ marginLeft: '16px', marginBottom: '8px' }}>
            <div style={{ marginBottom: '2px' }}>• 緑色のテキスト表示</div>
          </div>

          <div style={{ marginBottom: '8px', fontWeight: 500 }}>4. エージェント情報:</div>
          <div style={{ marginLeft: '16px', marginBottom: '8px' }}>
            <div style={{ marginBottom: '2px' }}>• アイコンサイズを14pxに調整</div>
            <div style={{ marginBottom: '2px' }}>• フォントサイズを11pxに</div>
            <div style={{ marginBottom: '2px' }}>• 右側のアイコンをSVGに変更</div>
          </div>

          <div style={{ marginBottom: '8px', fontWeight: 500 }}>5. 入力エリア:</div>
          <div style={{ marginLeft: '16px', marginBottom: '8px' }}>
            <div style={{ marginBottom: '2px' }}>• 背景色を #252526 に変更</div>
            <div style={{ marginBottom: '2px' }}>• 角丸を6pxに調整</div>
            <div style={{ marginBottom: '2px' }}>• エージェント情報を統合</div>
            <div style={{ marginBottom: '2px' }}>• アクションボタンを小さく（16px × 16px）</div>
            <div style={{ marginBottom: '2px' }}>• SVGアイコンのサイズを10pxに調整</div>
            <div style={{ marginBottom: '2px' }}>• ストローク幅を細く調整</div>
          </div>

          <div style={{ marginTop: '16px' }}>
            これで、VS Codeのチャットパネルと視覚的に完全に一致するデザインになりました！
          </div>
        </div>

        {/* Review Changes セクション */}
        <div style={{
          padding: '8px 12px',
          backgroundColor: '#1e1e1e',
          borderTop: '1px solid #2d2d30',
          borderBottom: '1px solid #2d2d30',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#569cd6',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <span>📋</span>
            <span>Review Changes</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#cccccc',
          }}>
            <span>36%</span>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#cccccc',
            }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="#cccccc">
                <circle cx="8" cy="3" r="1" />
                <circle cx="8" cy="8" r="1" />
                <circle cx="8" cy="13" r="1" />
              </svg>
            </button>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#cccccc',
            }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h10v10H3z" stroke="#cccccc" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{
        padding: '6px 12px',
        backgroundColor: '#181818',
        borderBottom: '1px solid #2d2d30',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#cccccc',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="#cccccc">
            <path d="M8 3l5 2v6l-5 2-5-2V5l5-2z" />
          </svg>
          <span>1 File</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#cccccc',
            fontSize: '10px',
            cursor: 'pointer',
            padding: '2px 4px',
            borderRadius: '2px',
            textDecoration: 'underline',
          }}>
            Undo All ⌘+⌥+Z
          </button>
          <button style={{
            background: '#0078d4',
            border: 'none',
            color: '#ffffff',
            fontSize: '10px',
            cursor: 'pointer',
            padding: '3px 6px',
            borderRadius: '3px',
            fontWeight: 500,
          }}>
            Keep All ⌘+O
          </button>
        </div>
      </div>

      <div style={{
        padding: '6px 12px',
        backgroundColor: '#1e1e1e',
        fontSize: '11px',
        color: '#cccccc',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
        <svg width="10" height="10" viewBox="0 0 16 16" fill="#cccccc">
          <circle cx="8" cy="8" r="2" />
        </svg>
        <svg width="10" height="10" viewBox="0 0 16 16" fill="#569cd6">
          <path d="M3 8h10M8 3l5 5-5 5" />
        </svg>
        <span>1 Tab</span>
      </div>

      <div style={{
        padding: '6px 12px',
        backgroundColor: '#1e1e1e',
        fontSize: '11px',
        color: '#6a9955',
        display: 'flex',
        alignItems: 'center',
      }}>
        Plan, search, build anything
      </div>

      <div style={{
        padding: '6px 12px',
        borderBottom: '1px solid #2d2d30',
        backgroundColor: '#1e1e1e',
        fontSize: '11px',
        color: '#cccccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <div style={{
            width: '14px',
            height: '14px',
            borderRadius: '2px',
            backgroundColor: '#0078d4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8px',
            fontWeight: 'bold',
            color: 'white',
          }}>
            ∞
          </div>
          <span style={{ fontWeight: 500 }}>Agent</span>
          <span style={{ color: '#6a9955', fontSize: '10px' }}>claude-4-sonnet</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            borderRadius: '2px',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="#cccccc">
              <path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h12v2H2z" />
            </svg>
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            borderRadius: '2px',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="#cccccc">
              <circle cx="8" cy="8" r="6" stroke="#cccccc" strokeWidth="1" fill="none" />
              <path d="M8 5v3M8 11h0" />
            </svg>
          </button>
        </div>
      </div>

      {/* 統合された入力・エージェント情報エリア */}
      <div style={{
        padding: '8px 12px',
        backgroundColor: '#1e1e1e',
        fontSize: '11px',
        color: '#cccccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '32px',
        borderTop: '1px solid #2d2d30',
      }}>
        <div style={{
          backgroundColor: '#252526',
          borderRadius: '6px',
          border: '1px solid #3c3c3c',
          padding: '6px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flex: 1,
          marginRight: '8px',
        }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flex: 1,
            }}
          >
            <div style={{
              width: '14px',
              height: '14px',
              borderRadius: '2px',
              backgroundColor: '#0078d4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 'bold',
              color: 'white',
            }}>
              ∞
            </div>
            <span style={{ fontWeight: 500 }}>Agent</span>
            <span style={{ color: '#6a9955', fontSize: '10px' }}>claude-4-sonnet</span>

            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="ファイルに切り出す方法"
              style={{
                flex: 1,
                padding: '0',
                fontSize: '11px',
                border: 'none',
                backgroundColor: 'transparent',
                color: '#cccccc',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                outline: 'none',
                marginLeft: '8px',
              }}
            />
          </form>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            borderRadius: '2px',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
          }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="#cccccc">
              <path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h12v2H2z" />
            </svg>
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            borderRadius: '2px',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
          }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#cccccc" strokeWidth="1" fill="none" />
              <path d="M8 5v3M8 11h0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
