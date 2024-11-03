import React, { useState } from "react";
import "./AdDesigner.css";

export default function AdDesigner() {
  const [flavor, setFlavor] = useState<string>("Vanilla");
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16);

  const styles = {
    fontSize: fontSize + "px",
    display: "block",
  };

  return (
    <div>
      <h2>Ad Designer</h2>
      <div>
        Vote For <span style={styles}>{flavor}</span>
      </div>
      <div>
        <h3>What to Support</h3>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor == "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor == "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor == "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <div>
        <h3>Color Theme</h3>
        <button onClick={() => setDarkTheme(false)} disabled={!darkTheme}>
          Light
        </button>
        <button onClick={() => setDarkTheme(true)} disabled={darkTheme}>
          Dark
        </button>
      </div>
      <div>
        <h3>Font Size</h3>
        <div className="font-buttons">
          <button onClick={() => setFontSize((prev) => prev - 1)}>Down</button>
          <p>{fontSize}</p>
          <button onClick={() => setFontSize((prev) => prev + 1)}>Up</button>
        </div>
      </div>
    </div>
  );
}
