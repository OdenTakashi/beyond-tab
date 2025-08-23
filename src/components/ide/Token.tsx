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

export const Token = ({
  value,
  isSuggestion = false,
}: {
  value: string;
  isSuggestion?: boolean;
}) => {
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

export const Tab = () => {
  return <span style={{ width: 16, height: 16 }}></span>;
};
