import React, { useState } from "react";

import GameCard from "./GameCard.js";
import GameForm from "./GameForm.js";

export default function Main(props) {
  const [gameData, setGameData] = useState(props.gameData);

  let games = gameData.map((item) => <GameCard key={item.id} game={item} />);

  function onSubmit(data) {
    const newGame = {
      id: Math.random(),
      title: data.title,
      publisher: data.publisher,
      amountPlayed: parseInt(data.amountPlayed),
    };
    setGameData((prevData) => [...prevData, newGame]);
  }

  return (
    <main>
      <h2>My owned boardgames</h2>
      <GameForm onSubmit={onSubmit} />
      <div className="game-card-container">{games}</div>
    </main>
  );
}
