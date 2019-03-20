import React, { Component } from "react";
import { connect } from "react-redux";
class Counter extends Component {
  
    render() {
    return (
      <div>
        <button onClick={() => this.props.increaseCounter()}>Increment</button>
        <span>{this.props.counter}</span>
        <button onClick={() => this.props.decreaseCounter()}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
        return {
            increaseCounter: ()=>dispatch({type: 'INCREASE_COUNTER'}),
            decreaseCounter: ()=>dispatch({type: 'DECREASE_COUNTER'})
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

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
