import { useState } from "react";
import { FileData } from "./FileData";

export const FileExplorer = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <FileData fileName="daikon.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="konbu.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="chikuwabu.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="tamago.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="tanpen.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="konnyaku.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="chikuwa.oden" iconImage="/src/assets/ruby.svg" />
              <FileData fileName="README.md" iconImage="/src/assets/readme.svg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
