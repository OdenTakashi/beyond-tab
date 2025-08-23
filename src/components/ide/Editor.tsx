import type { LineType } from "../../types/LineValue";

export const Editor = ({ lines }: { lines: LineType[] }) => {
  return (
<div 
  style={{ 
    height: "100%", 
    width: "100%", 
    color: "white", 
    overflowY: "scroll", 
    overflowX: "auto", 
    backgroundColor: "rgba(30, 30, 30, 0.9)", // 元の背景色を半透明に
    backgroundImage: "url('/src/assets/kyomu.png')", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "100% auto", 
    backgroundBlendMode: "multiply", // 背景画像と背景色をブレンド

  }} 
>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {lines.map((line, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <Number rowNumber={index + 1} />
            <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>{line.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Number = ({ rowNumber }: { rowNumber: number }) => {
  return (
    <div
      style={{
        color: "rgba(255, 255, 255, 0.4)",
        textAlign: "right",
        fontWeight: "bold",
        paddingRight: 8,
        paddingLeft: 8,
        userSelect: "none",
      }}
    >
      {rowNumber}
    </div>
  );
};
