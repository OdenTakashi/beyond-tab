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
};
