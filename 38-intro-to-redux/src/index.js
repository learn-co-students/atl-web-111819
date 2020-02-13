import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from 'redux';

const initialState = { count: 0 };

// store.dispatch({ type: 'SOME_ACTION' })

const reducer = (state = initialState,action) => {

  if(action.type === 'INC'){
    return { count: state.count + action.data }
  }else if(action.type === 'MUL'){
    return { count: state.count * action.data }
  }

  return state
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


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

  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const count = store.getState().count;
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  render(){
    return (
      <div className="Counter">
        <h3> {store.getState().count} </h3>
        <button onClick={() => store.dispatch({ type: 'MUL', data: 3 })}> *3 </button>
        <button onClick={() => store.dispatch({ type: 'INC', data: -1 })}> - </button>
        <button onClick={() => store.dispatch({ type: 'INC', data: 1 })}> + </button>
        <button onClick={() => store.dispatch({ type: 'MUL', data: 5 })}> *5 </button>
        <h3>{this.renderDescription()}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
