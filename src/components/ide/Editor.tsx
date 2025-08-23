import { sceneReadme } from "../../scenes/readme";
import { scene01 } from "../../scenes/01";
import { scene02 } from "../../scenes/02";
import { useState } from "react";
import type { SceneType } from "../../types/Scene";

const scenes: SceneType[] = [sceneReadme, scene01, scene02];

export const Editor = () => {
  const [sceneIndex, setSceneIndex] = useState(0);

  // Tabキーが押されたときの処理
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault(); // デフォルトのTab移動を防ぐ

      setSceneIndex(prevIndex => (prevIndex < scenes.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
      tabIndex={0} // キーボードイベントを受け取れるようにする
      onKeyDown={handleKeyDown}
    >
      {scenes[sceneIndex].lines.map((line, index) => (
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
