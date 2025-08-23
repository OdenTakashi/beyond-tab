import sceneReadme01 from "../../scenes/readme_01";
import sceneReadme02 from "../../scenes/readme_02";
import sceneReadme03 from "../../scenes/readme_03";
import sceneReadme04 from "../../scenes/readme_07";
import sceneReadme05 from "../../scenes/readme_07";
import { scene01 } from "../../scenes/daikon_01";
import { scene02 } from "../../scenes/daikon_02";
import { useState } from "react";
import type { SceneType } from "../../types/Scene";
import type { LineType } from "../../types/LineValue";

export const Editor = ({ lines }: { lines: LineType[] }) => {
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
        <div key={index} style={{ display: "flex", flexDirection: "row", gap: 4 }}>
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
