import React, { useState } from "react";

export default function GameCard(props) {
  const {
    title,
    publisher,
    imageUrl,
    description,
    amountPlayed,
    id,
  } = props.game;
  const [count, setCount] = useState(amountPlayed);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="game-card">
      {imageUrl && <img src={imageUrl} alt={`Box of ${title}`} />}
      <h4>{title}</h4>
      <p>Published by: {publisher}</p>
      <p>{description}</p>
      <p>
        Times played:{" "}
        <button onClick={decrement}>-</button> 
        {" "}{count}{" "}
        <button onClick={increment}>+</button>
      </p>
      <button onClick={() => props.onDelete(id)}>Remove</button>
    </div>
  );
}
