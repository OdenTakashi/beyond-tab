type Message = {
  values: string[];
};

// 予約語（ruby）
const reservedWords: { [key: string]: string } = {
  class: "#B47DD7",
  def: "#B47DD7",
  if: "#B47DD7",
  else: "#B47DD7",
  elsif: "#B47DD7",
  end: "#B47DD7",
  for: "#B47DD7",
  while: "#B47DD7",
  until: "#B47DD7",
  break: "#B47DD7",
  next: "#B47DD7",
  return: "#B47DD7",
  yield: "#B47DD7",
  super: "#B47DD7",
  self: "#B47DD7",
  nil: "#B47DD7",
  true: "#FF4E69",
  false: "#FF4E69",
  and: "#B47DD7",
  or: "#B47DD7",
  not: "#B47DD7",
  in: "#B47DD7",
  is: "#B47DD7",
  as: "#B47DD7",
  when: "#B47DD7",
  case: "#B47DD7",
  "=>": "#B47DD7",
  "'": "#BCE273",
  '"': "#BCE273",
};

export const Editor = ({
  message = {
    values: [
      "class User",
      "\tname: string;",
      "\tage: number;",
      "end",
      "",
      "def hello",
      "\tputs 'Hello, World!'",
      "end",
    ],
  },
}: {
  message: Message;
}) => {
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
      {message.values.map((value, index) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Number rowNumber={index + 1} />
          <Line value={value} />
        </div>
      ))}
    </div>
  );
};

const Line = ({ value }: { value: string }) => {
  const words = value.replace(/^\t+/, "").split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft: (value.match(/^\t+/)?.[0]?.length || 0) * 16,
        gap: 4,
      }}
    >
      {words.map(word => {
        if (reservedWords[word]) {
          return <span style={{ color: reservedWords[word] }}>{word}</span>;
        }
        return <span style={{ color: "#CBD4E2" }}>{word}</span>;
      })}
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
