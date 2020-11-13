import React from "react";

import GameCard from "./GameCard";
import GameTable from "./GameTable";

export default function GameDisplay(props) {
  const { gameData, tableView, onDelete, onIncrement, onDecrement } = props;

  return (
    <div className={tableView ? "game-table-container" : "game-card-container"}>
      {tableView ? (
        <table className="game-table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Publisher</th>
              <th>Description</th>
              <th>Times played</th>
            </tr>
          </thead>
          <tbody>
            {gameData.map((game) => (
              <GameTable
                key={game.id}
                game={game}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))}
          </tbody>
        </table>
      ) : (
        gameData.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))
      )}
    </div>
  );
}
