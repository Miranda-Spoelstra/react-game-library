import React, { useState } from "react";

import GameDisplay from "./GameDisplay.js";
import GameForm from "./GameForm.js";

export default function Main(props) {
  const [gameData, setGameData] = useState(props.gameData);
  const [showForm, setShowForm] = useState(false);
  const [tableView, settableView] = useState(false);

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

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  function handleChangeView() {
    settableView((prev) => !prev);
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
      <h1>Board Games</h1>
      <div className="display-options-container">
        <button onClick={() => toggleForm()}>
          <i className="fas fa-plus"></i>
        </button>
        <button onClick={() => handleChangeView()}>
          {tableView ? (
            <i className="fas fa-th"></i>
          ) : (
            <i className="fas fa-list-ul"></i> // evt fa-table, depending on styling
          )}
        </button>
      </div>
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
