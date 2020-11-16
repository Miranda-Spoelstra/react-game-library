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
        Times played:{" "}
        {amountPlayed > 0 && (
          <button onClick={() => props.onDecrement(props.game)}>
            <i class="fas fa-angle-left"></i>
          </button>
        )}{" "}
        {amountPlayed}{" "}
        <button onClick={() => props.onIncrement(props.game)}>
          <i class="fas fa-angle-right"></i>
        </button>
      </p>
      <button onClick={() => props.onDelete(id)}>
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
