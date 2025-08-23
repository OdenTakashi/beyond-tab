import { Tab, Token } from "../../components/ide/Token";
import type { LineType } from "../../types/LineValue";

export default [
  {
    value: (
      <>
        <Token value="class" isSuggestion />
        <Token value="User" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" isSuggestion />
        <Token value="initialize" isSuggestion />
        <Token value="(" isSuggestion />
        <Token value="name" isSuggestion />
        <Token value="," isSuggestion />
        <Token value="age" isSuggestion />
        <Token value="," isSuggestion />
        <Token value="gender" isSuggestion />
        <Token value=")" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="@name" isSuggestion />
        <Token value="=" isSuggestion />
        <Token value="name" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="@age" isSuggestion />
        <Token value="=" isSuggestion />
        <Token value="age" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="@gender" isSuggestion />
        <Token value="=" isSuggestion />
        <Token value="gender" isSuggestion />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" isSuggestion />
        <Token value="laugh" isSuggestion />
        <Token value="(" isSuggestion />
        <Token value="reason" isSuggestion />
        <Token value=")" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="Emotion" isSuggestion />
        <Token value="." isSuggestion />
        <Token value="new" isSuggestion />
        <Token value="." isSuggestion />
        <Token value="laugh" isSuggestion />
        <Token value="(" isSuggestion />
        <Token value="reason" isSuggestion />
        <Token value=")" isSuggestion />
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
    value: <></>,
  },
  {
    value: (
      <>
        <Tab />
        <Token value="def" isSuggestion />
        <Token value="cry" isSuggestion />
        <Token value="(" isSuggestion />
        <Token value="reason" isSuggestion />
        <Token value=")" isSuggestion />
      </>
    ),
  },
  {
    value: (
      <>
        <Tab />
        <Tab />
        <Token value="Emotion" isSuggestion />
        <Token value="." isSuggestion />
        <Token value="new" isSuggestion />
        <Token value="." isSuggestion />
        <Token value="cry" isSuggestion />
        <Token value="(" isSuggestion />
        <Token value="reason" isSuggestion />
        <Token value=")" isSuggestion />
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
        <Token value="end" isSuggestion />
      </>
    ),
  },
] as LineType[];
