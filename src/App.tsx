import { IDEWindow } from "./components/ide/Window";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Analytics />
      <IDEWindow />
    </>
  );
}
