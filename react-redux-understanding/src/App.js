import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./App.css";
import Counter from "./Counter";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREASE_COUNTER":
      return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Increment</button>
        <span>{this.state.counter}</span>
        <button onClick={() =>this.decrement()}>Decrement</button>
      </div>
    );
  }
}

*/
