import React from "react";

export default function GameTable(props) {
  const {
    title,
    publisher,
    imageUrl,
    description,
    amountPlayed,
    id,
  } = props.game;

  return (
    <tr>
      <td className="img-col">
        <img src={imageUrl} alt={`Box of ${title}`} />
      </td>
      <td className="title-col">{title}</td>
      <td className="pub-col">{publisher}</td>
      <td className="desc-col">{description}</td>
      <td className="played-col dec-buttons">
        {amountPlayed > 0 && (
          <button onClick={() => props.onDecrement(props.game)}>
            <i className="fas fa-angle-left"></i>
          </button>
        )}
        {amountPlayed}
        <button onClick={() => props.onIncrement(props.game)}>
          <i className="fas fa-angle-right"></i>
        </button>
      </td>
      <td className="del-col">
        <button className="del-button" onClick={() => props.onDelete(id)}>
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
}
