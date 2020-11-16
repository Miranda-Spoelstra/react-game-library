import React from "react";

export default function Header(props) {
  const { tableView } = props;

  return (
    <header>
      <div className="nav-left">
        <h3>My Board Game Library</h3>
      </div>
      <div className="nav-right">
        <a href="#" role="button" onClick={() => props.onToggleForm()}>
          Add more games
        </a>
        <a href="#" role="button" onClick={() => props.onChangeView()}>
          View as {tableView ? "cards" : "table"}
        </a>
      </div>
    </header>
  );
}
