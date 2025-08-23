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
        <Token value="(" />
        <Token value="reason" />
        <Token value=")" />
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
        <Token value="(" />
        <Token value="reason" />
        <Token value=")" />
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
