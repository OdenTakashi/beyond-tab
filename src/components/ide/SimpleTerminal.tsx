import { useState, useEffect, useRef } from "react";
import { Colors } from "../../constants/Colors";

interface TerminalLine {
  id: number;
  type: "command" | "output" | "error";
  content: string;
  timestamp: Date;
}

interface Command {
  name: string;
  description: string;
  handler: (args: string[]) => string[];
}

export const SimpleTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lineIdCounter, setLineIdCounter] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // ニヒルなディレクトリ名のパターン
  const nihilDirectoryNames = [
    "虚無の果て",
    "意味なき場所",
    "無価値な領域",
    "絶望の住処",
    "空虚な箱",
    "無意味な点",
  ];

  const nihilAbsolutePaths = [
    "/存在しない道/意味のない旅路/虚無の果て",
    "/無価値な階層/絶望の深淵/意味なき場所",
    "/空虚な構造/無意味な分岐/無価値な領域",
    "/虚構の体系/偽りの秩序/絶望の住処",
    "/無駄な階層/意味なき道筋/空虚な箱",
    "/徒労の系譜/虚しき歩み/無意味な点",
  ];

  // 現在のニヒルなディレクトリ名を取得（セッション中は固定）
  const [currentNihilDir] = useState(() => {
    const index = Math.floor(Math.random() * nihilDirectoryNames.length);
    return {
      name: nihilDirectoryNames[index],
      absolutePath: nihilAbsolutePaths[index],
    };
  });

  // 利用可能なコマンド定義
  const commands: Record<string, Command> = {
    help: {
      name: "help",
      description: "Show available commands",
      handler: () => [
        "Available commands:",
        "  help          - Show this help message",
        "  clear         - Clear the terminal",
        "  ls            - List files and directories",
        "  pwd           - Show current directory",
        "  whoami        - Show current user",
        "  date          - Show current date and time",
        "  echo <text>   - Echo the given text",
        "  cat <file>    - Display file contents",
        "  history       - Show command history",
        "  uptime        - Show system uptime",
        "  dev-status    - Show development server status",
        "  build         - Simulate build process",
        "  test          - Run tests",
        "  git-status    - Show git status",
        "  docker-ps     - Show running containers",
        "  version       - Show version information",
        "",
        "Tips:",
        "  - Use ↑/↓ arrow keys to navigate command history",
        "  - Use Tab for command completion",
        "  - Click anywhere in the terminal to focus input",
      ],
    },
    clear: {
      name: "clear",
      description: "Clear the terminal",
      handler: () => {
        setLines([]);
        return [];
      },
    },
    ls: {
      name: "ls",
      description: "List files and directories",
      handler: () => [
        "無駄な努力/",
        "偽りの希望/",
        "意味なき依存/",
        "空虚な設定.json",
        "虚構の型定義.json",
        "無価値な構成.ts",
        "読まれぬ文書.md",
        "孤独な容器",
        "絶望の編成.yml",
      ],
    },
    pwd: {
      name: "pwd",
      description: "Show current directory",
      handler: () => [currentNihilDir.absolutePath],
    },
    whoami: {
      name: "whoami",
      description: "Show current user",
      handler: () => ["虚無に囚われし者"],
    },
    date: {
      name: "date",
      description: "Show current date and time",
      handler: () => {
        const nihilTimes = [
          "永遠に続く虚無の刻",
          "意味を失った時の流れ",
          "価値なき瞬間の連続",
          "絶望が支配する今",
          "空虚な時間の断片",
          "無意味な秒針の音",
        ];
        const randomTime = nihilTimes[Math.floor(Math.random() * nihilTimes.length)];
        return [randomTime];
      },
    },
    echo: {
      name: "echo",
      description: "Echo the given text",
      handler: args => [args.join(" ")],
    },
    "dev-status": {
      name: "dev-status",
      description: "Show development server status",
      handler: () => [
        "💀 絶望のサーバー: 虚無のポート:5173で稼働中",
        "🔥 無意味な置換: 常に動作（意味はない）",
        "📝 TypeScript: エラーなし（価値もなし）",
        "📦 虚無の塊: 2.3MBの無駄",
      ],
    },
    build: {
      name: "build",
      description: "Simulate build process",
      handler: () => [
        "🔨 無意味な構築を開始...",
        "📦 虚無を束ねています...",
        "🎯 絶望を最適化中...",
        "💀 虚無の完成！（意味はない）",
        "📊 無価値な塊: 145KB（圧縮された絶望）",
      ],
    },
    test: {
      name: "test",
      description: "Run tests",
      handler: () => [
        "🧪 虚無のテストを実行中...",
        "💀 全ての絶望が成功 (12/12)",
        "📊 無意味な網羅率: 85%",
        "⏱️  虚しい時間: 2.34秒",
      ],
    },
    "git-status": {
      name: "git-status",
      description: "Show git status",
      handler: () => [
        "絶望のブランチ: feature/虚無への道",
        "あなたの絶望は最新です（意味はない）",
        "",
        "コミットされぬ変更（永遠に）:",
        "  変更済み:   無駄な努力/虚無なパネル.tsx",
        "  変更済み:   空虚な窓/意味なき表示.tsx",
        "",
        "追跡されぬファイル（孤独に）:",
        "  無価値なターミナル/絶望の実装.tsx",
      ],
    },
    "docker-ps": {
      name: "docker-ps",
      description: "Show running containers",
      handler: () => [
        "虚無ID        絶望イメージ    状態           無意味なポート           名前",
        "虚無123絶望456  beyond-tab     絶望中 2時間   0.0.0.0:5173->5173/tcp   虚無なアプリ-1",
        "絶望456虚無789  postgres:14    絶望中 2時間   5432/tcp                 意味なきDB-1",
      ],
    },
    version: {
      name: "version",
      description: "Show version information",
      handler: () => [
        "絶望タブIDE v虚無.1.0",
        "React: 19.1.1（無意味な更新）",
        "TypeScript: 5.8.3（型なき絶望）",
        "Vite: 7.1.2（高速な虚無）",
        "Node.js: 不明（ブラウザの牢獄）",
      ],
    },
    cat: {
      name: "cat",
      description: "Display file contents",
      handler: args => {
        if (args.length === 0) {
          return ["虚無: ファイルが指定されていません（当然の結果）"];
        }
        const filename = args[0];
        const mockFiles: Record<string, string[]> = {
          "package.json": [
            "{",
            '  "name": "beyond-tab",',
            '  "version": "0.0.0",',
            '  "type": "module",',
            '  "scripts": {',
            '    "dev": "vite",',
            '    "build": "tsc -b && vite build"',
            "  }",
            "}",
          ],
          "README.md": [
            "# Beyond Tab",
            "",
            "A modern web-based IDE built with React and TypeScript.",
            "",
            "## Features",
            "- Interactive terminal",
            "- File explorer",
            "- Code editor",
            "- Panel management",
          ],
        };

        if (mockFiles[filename]) {
          return mockFiles[filename];
        } else {
          return [`虚無: ${filename}: そのようなファイルは存在しません（最初から無意味）`];
        }
      },
    },
    history: {
      name: "history",
      description: "Show command history",
      handler: () => {
        return commandHistory.map((cmd, index) => `${index + 1}  ${cmd}`);
      },
    },
    uptime: {
      name: "uptime",
      description: "Show system uptime",
      handler: () => {
        const uptime = Math.floor(performance.now() / 1000);
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = uptime % 60;
        return [`絶望継続中 ${hours}時間 ${minutes}分 ${seconds}秒（意味なき時間）`];
      },
    },
  };

  // 初期メッセージ
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      {
        id: 0,
        type: "output",
        content: "💀 絶望タブターミナルへようこそ（意味はありません）",
        timestamp: new Date(),
      },
      {
        id: 1,
        type: "output",
        content: '"help"で無意味なコマンド一覧をご覧ください。',
        timestamp: new Date(),
      },
      {
        id: 2,
        type: "output",
        content: "",
        timestamp: new Date(),
      },
    ];
    setLines(welcomeLines);
    setLineIdCounter(3);
  }, []);

  // 自動スクロール
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // 入力フォーカス維持
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener("click", handleClick);
      return () => terminal.removeEventListener("click", handleClick);
    }
  }, []);

  const addLine = (type: TerminalLine["type"], content: string) => {
    setLines(prev => [
      ...prev,
      {
        id: lineIdCounter,
        type,
        content,
        timestamp: new Date(),
      },
    ]);
    setLineIdCounter(prev => prev + 1);
  };

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim();

    // 空の入力の場合は改行のみ追加
    if (!trimmedInput) {
      addLine("command", `${currentNihilDir.name}$ `);
      return;
    }

    // コマンド履歴に追加
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // コマンドラインを表示（現在のディレクトリ付き）
    addLine("command", `${currentNihilDir.name}$ ${trimmedInput}`);

    // コマンドを解析
    const [commandName, ...args] = trimmedInput.split(" ");
    const command = commands[commandName];

    if (command) {
      try {
        const output = command.handler(args);
        if (output.length > 0) {
          output.forEach(line => {
            addLine("output", line);
          });
        }
      } catch (error) {
        addLine("error", `Error executing command: ${error}`);
      }
    } else {
      addLine(
        "error",
        `虚無なるコマンド: ${commandName} は存在しません。"help"で無意味なコマンド一覧を確認してください。`
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
      setCurrentInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // 簡単なタブ補完
      const commandNames = Object.keys(commands);
      const matches = commandNames.filter(cmd => cmd.startsWith(currentInput));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return Colors.ide.panel.textActive;
      case "error":
        return "#f14c4c";
      case "output":
      default:
        return Colors.ide.panel.text;
    }
  };

  return (
    <div
      ref={terminalRef}
      style={{
        height: "100%",
        backgroundColor: Colors.ide.panel.background,
        fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
        fontSize: "13px",
        lineHeight: "1.4",
        padding: "12px",
        overflow: "auto",
        cursor: "text",
        boxSizing: "border-box", // paddingを含めてheight: 100%にする
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* 履歴表示 */}
      {lines.map(line => (
        <div
          key={line.id}
          style={{
            color: getLineColor(line.type),
            marginBottom: "2px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {line.content}
        </div>
      ))}

      {/* 現在の入力行 */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
        <span style={{ color: Colors.ide.panel.textActive, marginRight: "8px" }}>
          {currentNihilDir.name}$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={e => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: Colors.ide.panel.text,
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
          placeholder="Type a command..."
          autoFocus
        />
      </div>
    </div>
  );
};
