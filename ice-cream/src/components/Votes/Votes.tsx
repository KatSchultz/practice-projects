import { useState } from "react";
import "./Votes.css";

export default function Votes() {
  const [vanilla, setVanilla] = useState<number>(0);
  const [chocolate, setChocolate] = useState<number>(0);
  const [strawberry, setStrawberry] = useState<number>(0);

  const vanillaStyle = {
    width: (vanilla / (vanilla + chocolate + strawberry)) * 100 + "%",
    backgroundColor: "blanchedalmond",
  };
  const chocolateStyle = {
    width: (chocolate / (vanilla + chocolate + strawberry)) * 100 + "%",
    backgroundColor: "brown",
  };
  const strawberryStyle = {
    width: (strawberry / (vanilla + chocolate + strawberry)) * 100 + "%",
    backgroundColor: "pink",
  };

  return (
    <div>
      <h2>Vote For Your Favorite</h2>
      <button onClick={() => setChocolate((prev) => prev + 1)}>
        Chocolate
      </button>
      <button onClick={() => setVanilla((prev) => prev + 1)}>Vanilla</button>
      <button onClick={() => setStrawberry((prev) => prev + 1)}>
        Strawberry
      </button>
      <div>
        <h3>Flavor Rankings</h3>
        {vanilla == 0 && chocolate == 0 && strawberry == 0 && (
          <p>No Votes Yet</p>
        )}
        {vanilla > 0 && (
          <div>
            <p className="flavor-label">Vanilla {vanilla}</p>
            <div className="flavor-bar vanilla-bar" style={vanillaStyle}></div>
          </div>
        )}
        {chocolate > 0 && (
          <div>
            <p className="flavor-label">Chocolate {chocolate}</p>
            <div
              className="flavor-bar chocolate-bar"
              style={chocolateStyle}
            ></div>
          </div>
        )}
        {strawberry > 0 && (
          <div>
            <p className="flavor-label">Strawberry {strawberry}</p>
            <div
              className="flavor-bar strawberry-bar"
              style={strawberryStyle}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
