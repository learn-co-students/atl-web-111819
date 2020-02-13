import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import logo from "./logo.svg";
import "./App.css";

const initialState = { count: 0 };

const App = () => {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
}

class Counter extends Component {

  state = initialState

  renderDescription = () => {
    const count = this.state.count;
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1})
  }

  render(){
    return (
      <div className="Counter">
        <h3> {this.state.count} </h3>
        <button onClick={this.handleDecrement}> - </button>
        <button onClick={this.handleIncrement}> + </button>
        <h3>{this.renderDescription()}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
