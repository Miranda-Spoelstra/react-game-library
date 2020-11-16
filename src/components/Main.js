import React, { useState } from "react";

import GameDisplay from "./GameDisplay.js";
import GameForm from "./GameForm.js";

export default function Main(props) {
  const [gameData, setGameData] = useState(props.gameData);
  const {tableView, showForm} = props;

  function onSubmit(data) {
    const newGame = {
      id: Math.random(),
      title: data.title,
      publisher: data.publisher,
      description: data.description,
      amountPlayed: parseInt(data.amountPlayed),
    };
    setGameData((prev) => [...prev, newGame]);
  }

  function handleDelete(gameId) {
    let data = [...gameData];
    data = data.filter((game) => game.id !== gameId);
    setGameData(() => data);
  }

  function handleIncrement(game) {
    updateValue(game, true);
  }

  function handleDecrement(game) {
    updateValue(game, false);
  }

  function updateValue(game, add) {
    let data = [...gameData];
    const index = data.indexOf(game);
    add ? data[index].amountPlayed++ : data[index].amountPlayed--;
    setGameData(data);
  }

  return (
    <main>
      <h2>An overview</h2>
      {showForm && <GameForm onSubmit={onSubmit} />}
      <GameDisplay
        gameData={gameData}
        tableView={tableView}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </main>
  );
}
