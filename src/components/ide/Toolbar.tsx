import fileSVG from "../../assets/files.svg";
import blocksSVG from "../../assets/blocks.svg";
import flaskConicalSVG from "../../assets/flask-conical.svg";
import searchSVG from "../../assets/search.svg";
import settingsSVG from "../../assets/settings.svg";

export const Toolbar = () => {
  return (
    <div
      style={{
        width: 48,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 4,
          flex: 1,
        }}
      >
        <img src={fileSVG} alt="file" style={{ width: 24, height: 24, padding: 4, opacity: 0.8 }} />
        <img
          src={blocksSVG}
          alt="blocks"
          style={{ width: 24, height: 24, padding: 4, opacity: 0.8 }}
        />
        <img
          src={flaskConicalSVG}
          alt="flask-conical"
          style={{ width: 24, height: 24, padding: 4, opacity: 0.8 }}
        />
        <img
          src={searchSVG}
          alt="search"
          style={{ width: 24, height: 24, padding: 4, opacity: 0.8 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 4,
        }}
      >
        <img
          src={settingsSVG}
          alt="settings"
          style={{ width: 24, height: 24, padding: 4, opacity: 0.8 }}
        />
      </div>
    </div>
  );
};
