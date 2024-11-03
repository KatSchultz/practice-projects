// import { useState } from "react";
import "./App.css";
import AdDesigner from "../AdDesigner/AdDesigner";
import Header from "../Header/Header";
import Votes from "../Votes/Votes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AdDesigner />
      <Votes />
    </>
  );
}

export default App;
