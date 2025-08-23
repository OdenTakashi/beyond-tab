import { Tab } from "../components/ide/Tab";
import { Token } from "../components/ide/Token";
import type { SceneType } from "../types/Scene";

export const scene01: SceneType = {
  editor: [
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
  ],
  ai: [
    {
      id: "1",
      content:
        "こんにちは！AIアシスタントです。コードの作成や修正、質問など、どんなことでもお手伝いさせていただきます。",
      isUser: false,
      timestamp: new Date("2024-03-20T10:00:00"),
    },
    {
      id: "2",
      content: "React + TypeScriptのプロジェクトを作りたいです。",
      isUser: true,
      timestamp: new Date("2024-03-20T10:01:00"),
    },
    {
      id: "3",
      content:
        "はい、承知しました。新しいプロジェクトを作成するために、以下のような手順をお勧めします：\n\n1. Viteを使用してプロジェクトを作成\n2. 必要なパッケージのインストール\n3. 基本的なコンポーネント構造の設定\n\nまずは、どのような機能を実装したいかお聞かせいただけますか？",
      isUser: false,
      timestamp: new Date("2024-03-20T10:01:30"),
    },
    {
      id: "4",
      content: "IDEライクなUIを作りたいです。VS Codeのような見た目にしたいです。",
      isUser: true,
      timestamp: new Date("2024-03-20T10:02:00"),
    },
    {
      id: "5",
      content:
        "素晴らしいアイデアですね。VS Codeライクなインターフェースを実装するために、以下のコンポーネントが必要になるでしょう：\n\n1. サイドバー（ファイルエクスプローラー）\n2. タブバー\n3. エディターパネル\n4. ステータスバー\n\nまた、VS Codeのダークテーマに合わせたカラースキームも用意しましょう。\n\n最初にどの部分から実装を始めたいですか？",
      isUser: false,
      timestamp: new Date("2024-03-20T10:02:30"),
    },
  ],
};
