import React, { useState } from "react";

import GameDisplay from "./GameDisplay.js";
import GameForm from "./GameForm.js";

export default function Main(props) {
  const [gameData, setGameData] = useState(props.gameData);
  const [showForm, setShowForm] = useState(false);
  const [tableView, settableView] = useState(true);

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

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  function toggleView() {
    settableView((prev) => !prev);
  }

  return (
    <main>
      <h2>My owned boardgames</h2>
      <button onClick={toggleForm}>Add more games</button>
      <br />
      {showForm && <GameForm onSubmit={onSubmit} />}
      <button onClick={toggleView}>
        View as {tableView ? "cards" : "table"}
      </button>
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
