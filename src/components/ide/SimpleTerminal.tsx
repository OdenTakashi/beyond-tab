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
        "src/",
        "public/",
        "node_modules/",
        "package.json",
        "tsconfig.json",
        "vite.config.ts",
        "README.md",
        "Dockerfile",
        "docker-compose.yml",
      ],
    },
    pwd: {
      name: "pwd",
      description: "Show current directory",
      handler: () => ["/workspace/beyond-tab"],
    },
    whoami: {
      name: "whoami",
      description: "Show current user",
      handler: () => ["developer"],
    },
    date: {
      name: "date",
      description: "Show current date and time",
      handler: () => [new Date().toLocaleString()],
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
        "✅ Development server: Running on http://localhost:5173",
        "✅ Hot Module Replacement: Active",
        "✅ TypeScript: No errors",
        "📦 Bundle size: 2.3MB (dev)",
      ],
    },
    build: {
      name: "build",
      description: "Simulate build process",
      handler: () => [
        "🔨 Building project...",
        "📦 Bundling assets...",
        "🎯 Optimizing for production...",
        "✅ Build completed successfully!",
        "📊 Bundle size: 145KB (gzipped)",
      ],
    },
    test: {
      name: "test",
      description: "Run tests",
      handler: () => [
        "🧪 Running tests...",
        "✅ All tests passed (12/12)",
        "📊 Coverage: 85%",
        "⏱️  Time: 2.34s",
      ],
    },
    "git-status": {
      name: "git-status",
      description: "Show git status",
      handler: () => [
        "On branch feature/panel-resize-area",
        "Your branch is up to date with 'origin/main'.",
        "",
        "Changes not staged for commit:",
        "  modified:   src/components/ide/Panel.tsx",
        "  modified:   src/components/ide/Window.tsx",
        "",
        "Untracked files:",
        "  src/components/ide/SimpleTerminal.tsx",
      ],
    },
    "docker-ps": {
      name: "docker-ps",
      description: "Show running containers",
      handler: () => [
        "CONTAINER ID   IMAGE          STATUS         PORTS                    NAMES",
        "abc123def456   beyond-tab     Up 2 hours     0.0.0.0:5173->5173/tcp   beyond-tab-app-1",
        "def456ghi789   postgres:14    Up 2 hours     5432/tcp                 beyond-tab-db-1",
      ],
    },
    version: {
      name: "version",
      description: "Show version information",
      handler: () => [
        "Beyond Tab IDE v0.1.0",
        "React: 19.1.1",
        "TypeScript: 5.8.3",
        "Vite: 7.1.2",
        "Node.js: Unknown (Browser Environment)",
      ],
    },
    cat: {
      name: "cat",
      description: "Display file contents",
      handler: args => {
        if (args.length === 0) {
          return ["cat: missing file operand"];
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
          return [`cat: ${filename}: No such file or directory`];
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
        return [`up ${hours}h ${minutes}m ${seconds}s`];
      },
    },
  };

  // 初期メッセージ
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      {
        id: 0,
        type: "output",
        content: "🚀 Welcome to Beyond Tab Terminal!",
        timestamp: new Date(),
      },
      {
        id: 1,
        type: "output",
        content: 'Type "help" to see available commands.',
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
      addLine("command", "$ ");
      return;
    }

    // コマンド履歴に追加
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // コマンドラインを表示
    addLine("command", `$ ${trimmedInput}`);

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
      addLine("error", `Command not found: ${commandName}. Type "help" for available commands.`);
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
        <span style={{ color: Colors.ide.panel.textActive, marginRight: "8px" }}>$</span>
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
