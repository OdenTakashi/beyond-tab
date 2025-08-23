import type { ReactNode } from "react";

type LineType = {
  value: ReactNode;
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

const Token = ({ value, isSuggestion = false }: { value: string; isSuggestion?: boolean }) => {
  return (
    <span
      style={{
        color: reservedWords[value] ? reservedWords[value] : "#CBD4E2",
        opacity: isSuggestion ? 0.5 : 1,
      }}
    >
      {value}
    </span>
  );
};

const Tab = () => {
  return <span style={{ width: 16 }} />;
};

const sample: LineType[] = [
  {
    value: (
      <>
        <Token value="class" />
        <Token value="User" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="name" />
        <Token value=":" />
        <Token value="string" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="age" isSuggestion />
        <Token value=":" isSuggestion />
        <Token value="number" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="address" isSuggestion />
        <Token value=":" isSuggestion />
        <Token value="string" isSuggestion />
      </>
    ),
  },
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="greet" />
        <Token value="(" />
        <Token value="name" isSuggestion />
        <Token value=")" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="puts" isSuggestion />
        <Token value='"Hello, #{name}!' isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="end" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Token value="end" />
      </>
    ),
  },
];

export const Editor = ({ lines = sample }: { lines?: LineType[] }) => {
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
