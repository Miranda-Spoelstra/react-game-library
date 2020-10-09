import React, {useState} from "react";

export default function GameCard(props) {
  const { title, publisher, amountPlayed } = props.game;
  const [ count, setCount ] = useState(amountPlayed);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="game-card">
      {/* <img src={`/public/images/Sagrada.jpg`}   {`/images/${title}.jpg`} alt="" /> */}
      <img src={`${window.location.origin}/img/${title}.jpg`} alt="" />
      <h4>{title}</h4>
      <p>{publisher}</p>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
