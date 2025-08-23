import { useState } from "react";
import { FileData } from "./FileData";

interface FileExplorerProps {
  onFileSelect?: (selectedFiles: string[]) => void;
}

export const FileExplorer = ({ onFileSelect }: FileExplorerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleFileClick = (fileName: string) => {
    console.log(`File clicked: ${fileName}`);
    
    // ファイルが既に選択されている場合は削除、そうでなければ追加
    const newSelectedFiles = selectedFiles.includes(fileName)
      ? selectedFiles.filter(file => file !== fileName)
      : [...selectedFiles, fileName];
    
    setSelectedFiles(newSelectedFiles);
    console.log("Selected files:", newSelectedFiles);
    
    // 親コンポーネントに選択されたファイルを通知
    if (onFileSelect) {
      onFileSelect(newSelectedFiles);
    }
  };

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        width: "280px",
        height: "100%",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",
        fontSize: "13px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "8px 12px",
          borderBottom: "1px solid #3c3c3c",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "35px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "14px" }}></span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              color: "#cccccc",
            }}
          >
            EXPLORER
          </span>
        </div>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#cccccc",
            cursor: "pointer",
            padding: "2px 4px",
            borderRadius: "3px",
            fontSize: "14px",
            lineHeight: "1",
          }}
        >
          ⋮
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: "4px 0" }}>
        {/* ODENNO-KAI folder */}
        <div style={{ margin: "0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              cursor: "pointer",
              minHeight: "22px",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "#808080";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            onClick={toggleFolder}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#c5c5c5",
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              &gt;
            </span>
            <span style={{ color: "#cccccc", fontWeight: "500" }}>ODENNO-KAI</span>
          </div>

          {/* Dropdown content */}
          {isOpen && (
            <div style={{ marginLeft: "12px", borderLeft: "1px solid #3c3c3c" }}>
              {/* controllers folder */}
              <FileData
                fileName="controllers"
                isFolder={true}
                iconImage="/src/assets/folder-controller.svg"
              >
                <FileData fileName="daikon.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="konbu.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="chikuwabu.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="tamago.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="tanpen.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="konnyaku.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="chikuwa.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
              </FileData>

              {/* models folder */}
              <FileData fileName="models" isFolder={true} iconImage="/src/assets/folder-model.svg">
                <FileData fileName="user.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="post.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
              </FileData>

              {/* views folder */}
              <FileData fileName="views" isFolder={true} iconImage="/src/assets/folder-view.svg">
                <FileData fileName="index.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
                <FileData fileName="show.oden" iconImage="/src/assets/ruby.svg" onFileClick={handleFileClick} />
              </FileData>

              {/* README.md */}
              <FileData fileName="README.md" iconImage="/src/assets/readme.svg" onFileClick={handleFileClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
