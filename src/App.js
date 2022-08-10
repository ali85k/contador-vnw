import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  remove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.add();
          }}
        >
          +
        </button>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.add();
          }}
        >
          -
        </button>
      </div>
    );
  }
}
