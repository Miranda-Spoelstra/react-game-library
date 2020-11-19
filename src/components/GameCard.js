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
      <h4>{title}</h4>
      <p className="card-pub">Published by: {publisher}</p>

      {imageUrl && <img src={imageUrl} alt={`Box of ${title}`} />}
      <p className="card-desc">{description}</p>
      <p className="dec-buttons">
        Times played:{" "}
        {amountPlayed > 0 && (
          <button onClick={() => props.onDecrement(props.game)}>
            <i className="fas fa-angle-left"></i>
          </button>
        )}
        {amountPlayed}
        <button onClick={() => props.onIncrement(props.game)}>
          <i className="fas fa-angle-right"></i>
        </button>
      </p>
      <button className="del-button" onClick={() => props.onDelete(id)}>
        <i className="far fa-trash-alt"></i> Remove
      </button>
    </div>
  );
}
