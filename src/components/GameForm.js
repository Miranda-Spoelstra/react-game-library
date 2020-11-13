import React, { Component } from "react";

export default class GameForm extends Component {
  state = {
    title: "",
    publisher: "",
    imageUrl: "",
    description: "",
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
  };

  resetForm = (event) => {
    event.preventDefault();
    Object.keys(this.state).map((data) =>
      data === "amountPlayed"
        ? this.setState({ [data]: 0 })
        : this.setState({ [data]: "" })
    );
  };

  render() {
    return (
      <form className="game-form">
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
          Image:
          <input
            type="text"
            value={this.state.imageUrl}
            name="imageUrl"
            onChange={this.handleChange}
          />{" "}
        </label>
        <label>
          Description:
          <textarea
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
            rows="8"
            cols="60"
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
        <button onClick={this.handleSubmit}>Add</button>{" "}
        <button onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}
