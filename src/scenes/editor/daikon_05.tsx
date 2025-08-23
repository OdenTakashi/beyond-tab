import { Tab, Token } from "../../components/ide/Token";
import type { LineType } from "../../types/LineValue";

export default [
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
        <Token value="def" />
        <Token value="initialize" />
        <Token value="(" />
        <Token value="name" />
        <Token value="," />
        <Token value="age" />
        <Token value="," />
        <Token value="gender" />
        <Token value=")" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="@name" />
        <Token value="=" />
        <Token value="name" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="@age" />
        <Token value="=" />
        <Token value="age" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="@gender" />
        <Token value="=" />
        <Token value="gender" />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="laugh" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="Emotion" />
        <Token value="." />
        <Token value="new" />
        <Token value="." />
        <Token value="laugh" />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="cry" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="Emotion" />
        <Token value="." />
        <Token value="new" />
        <Token value="." />
        <Token value="cry" />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="coding" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="Action" />
        <Token value="." />
        <Token value="new" />
        <Token value="." />
        <Token value="coding" />
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
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="class" />
        <Token value="Emotion" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="laugh" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="puts" />
        <Token value="'wwwwwww'" />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="cry" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="puts" />
        <Token value="'しくしく'" />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" isSuggestion />
        <Token value="passion" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="puts" isSuggestion />
        <Token value="'やるぞぉ!'" isSuggestion />
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
  {
    value: <></>,
  },
  {
    value: (
      <>
        <Token value="class" />
        <Token value="Action" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" />
        <Token value="coding" />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="Emotion" />
        <Token value="." />
        <Token value="new" />
        <Token value="." />
        <Token value="passion" />
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
] as LineType[];
