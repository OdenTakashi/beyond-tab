import type { LineType } from "../../types/LineValue";

export const Editor = ({ lines, opacity }: { lines: LineType[]; opacity: number }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        color: "white",
        overflowY: "scroll",
        overflowX: "auto",
        backgroundColor: "#1e1e1e",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "100% auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundImage: "url('/kyomu.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "50% auto",
          filter: `opacity(${opacity ?? 0})`, // 💡 ここで背景画像にのみ透明度を適用
        }}
      ></div>
      <div
        style={{
          position: "absolute",
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
