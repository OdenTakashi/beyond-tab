import { Tab } from "../components/ide/Tab";
import { Token } from "../components/ide/Token";
import type { SceneType } from "../types/Scene";

export const scene02: SceneType = {
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
          <Token value="age" />
          <Token value=":" />
          <Token value="number" />
        </>
      ),
    },
    {
      value: (
        <>
          <Tab />
          <Token value="address" />
          <Token value=":" />
          <Token value="string" />
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
          <Token value="name" />
          <Token value=")" />
        </>
      ),
    },
    {
      value: (
        <>
          <Tab />
          <Tab />
          <Token value="puts" />
          <Token value='"Hello, #{name}!' />
        </>
      ),
    },
    {
      value: (
        <>
          <Tab />
          <Token value="end" />
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
