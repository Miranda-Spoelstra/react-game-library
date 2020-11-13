import React from "react";

export default function GameTable(props) {
  const {
    title,
    publisher,
    imageUrl,
    description,
    amountPlayed,
  } = props.game;

  return (
    <tr>
      <td><img src={imageUrl} alt={`Box of ${title}`} /></td>
      <td>{title}</td>
      <td>{publisher}</td>
      <td>{description}</td>
      <td>{amountPlayed}</td>
    </tr>
  );
}
