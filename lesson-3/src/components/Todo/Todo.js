import React, { Component } from "react";

export class Todo extends Component {
  state = { ...this.props.options };

  deleteTechnology = (uniqueId) => {
    const { technology } = this.state.learn;

    this.setState({
      learn: {
        technology: technology.filter((elem) => elem !== uniqueId),
      },
    });
  };

  render() {
    const { learn } = this.state;

    return (
      learn?.technology.map((technology) => (
        <div key={technology}>
          <h2>{technology}</h2>
          <button onClick={() => this.deleteTechnology(technology)}>
            delete: {technology}
          </button>
        </div>
      )) ?? "ничего нет"
    );
  }
}
