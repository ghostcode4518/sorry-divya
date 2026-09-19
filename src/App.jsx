import { useEffect, useState } from "react";
import { FloatLayer } from "./components/Ambient.jsx";
import Envelope from "./components/Envelope.jsx";
import Letter from "./components/Letter.jsx";
import Ask from "./components/Ask.jsx";
import Forgiven from "./components/Forgiven.jsx";

export default function App() {
  const [stage, setStage] = useState("envelope"); // envelope | letter | ask | yes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  return (
    <>
      <FloatLayer />
      {stage === "envelope" && <Envelope onOpen={() => setStage("letter")} />}
      {stage === "letter" && <Letter onNext={() => setStage("ask")} />}
      {stage === "ask" && <Ask onYes={() => setStage("yes")} />}
      {stage === "yes" && <Forgiven onReplay={() => setStage("envelope")} />}
    </>
  );
}
