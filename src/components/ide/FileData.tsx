import { useState } from "react";

interface FileDataProps {
  fileName: string;
  iconImage?: string;
  isFolder?: boolean;
  children?: React.ReactNode;
}

export const FileData = ({ fileName, iconImage, isFolder = false, children }: FileDataProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFileClick = (fileName: string) => {
    if (fileName === "README.md") {
      console.log("hello1");
    } else if (fileName === "oden.html") {
      console.log("hello2");
    }
  };

  const toggleFolder = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = () => {
    if (isFolder) {
      toggleFolder();
    } else {
      handleFileClick(fileName);
    }
  };
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 12px",
          cursor: "pointer",
          minHeight: "22px",
          transition: "background-color 0.15s ease",
          marginLeft: "12px",
          borderLeft: "1px solid #3c3c3c",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "#808080";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
        onClick={handleClick}
      >
        {isFolder ? (
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
            <img
              src={iconImage || "/src/assets/files.svg"}
              alt="folder"
              style={{ width: "16px", height: "16px" }}
            />
          </div>
        ) : (
          <img
            src={iconImage || "/src/assets/ruby.svg"}
            alt="file"
            style={{ width: "16px", height: "16px" }}
          />
        )}
        <span style={{ color: "#cccccc" }}>{fileName}</span>
      </div>
      
      {/* フォルダの場合は子要素を表示 */}
      {isFolder && isOpen && children && (
        <div style={{ marginLeft: "12px", borderLeft: "1px solid #3c3c3c" }}>
          {children}
        </div>
      )}
    </div>
  );
};