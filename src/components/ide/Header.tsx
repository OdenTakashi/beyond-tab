export const Header = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4,
        borderBottom: "1px solid #333",
      }}
    >
      <WindowActions />
      <div style={{ flex: 1 }}>
        <WindowTitle title={title} />
      </div>
    </div>
  );
};

const WindowActions = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
      <div style={{ width: 15, height: 15, backgroundColor: "red", borderRadius: 999 }} />
      <div style={{ width: 15, height: 15, backgroundColor: "yellow", borderRadius: 999 }} />
      <div style={{ width: 15, height: 15, backgroundColor: "green", borderRadius: 999 }} />
    </div>
  );
};

const WindowTitle = ({ title }: { title: string }) => {
  return (
    <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", textAlign: "center" }}>{title}</div>
  );
};
