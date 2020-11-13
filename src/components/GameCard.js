import React from "react";

export default function GameCard(props) {
  const {
    title,
    publisher,
    imageUrl,
    description,
    amountPlayed,
    id,
  } = props.game;

  return (
    <div className="game-card">
      {imageUrl && <img src={imageUrl} alt={`Box of ${title}`} />}
      <h4>{title}</h4>
      <p>Published by: {publisher}</p>
      <p>{description}</p>
      <p>
        Times played: <button onClick={() => props.onDecrement(props.game)}>-</button>{" "}
        {amountPlayed} <button onClick={() => props.onIncrement(props.game)}>+</button>
      </p>
      <button onClick={() => props.onDelete(id)}>Remove</button>
    </div>
  );
}
