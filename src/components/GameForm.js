import React, { Component } from "react";

export default class GameForm extends Component {
  state = {
    title: "Railroad Ink",
    publisher: "Something",
    amountPlayed: 0,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form className="game-form" onSubmit={this.handleSubmit}>
        <label>
          Board game:
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Publisher:
          <input
            type="text"
            value={this.state.publisher}
            name="publisher"
            onChange={this.handleChange}
          />{" "}
        </label>
        <label>
          Number of plays:
          <input
            type="text"
            value={this.state.amountPlayed}
            name="amountPlayed"
            onChange={this.handleChange}
          />{" "}
        </label>
        <button>Add</button>
      </form>
    );
  }
}
