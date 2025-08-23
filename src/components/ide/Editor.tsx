import type { LineType } from "../../types/LineValue";
import { scene01 } from "../../scenes/01";

export const Editor = ({ lines = scene01.lines }: { lines?: LineType[] }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {lines.map((line, index) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Number rowNumber={index + 1} />
          <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>{line.value}</div>
        </div>
      ))}
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
