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
              <th className="img-col-head"></th>
              <th className="title-col-head">Title</th>
              <th className="pub-col-head">Publisher</th>
              <th className="desc-col-head">Description</th>
              <th className="played-col-head">Times played</th>
              <th className="del-col-head"></th>
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
