import React, { useState } from "react";

import GameCard from "./GameCard.js";
import GameForm from "./GameForm.js";

export default function Main(props) {
  const [gameData, setGameData] = useState(props.gameData);
  const [showForm, setShowForm] = useState(false);

  function onSubmit(data) {
    const newGame = {
      id: Math.random(),
      title: data.title,
      publisher: data.publisher,
      description: data.description,
      amountPlayed: parseInt(data.amountPlayed),
    };
    setGameData((prevData) => [...prevData, newGame]);
  }

  function handleDelete(gameId) {
    const data = gameData.filter((game) => game.id !== gameId);
    setGameData(() => data);
  }

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  return (
    <main>
      <h2>My owned boardgames</h2>
      <button onClick={toggleForm}>Add more games</button>
      {showForm && <GameForm onSubmit={onSubmit} />}
      <div className="game-card-container">
        {gameData.map((game) => (
          <GameCard 
            key={game.id} 
            game={game} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </main>
  );
}
