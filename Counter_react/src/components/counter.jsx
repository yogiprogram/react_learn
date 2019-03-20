import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}> {this.formatCouint()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" 
         onClick={() => this.props.onDelete(this.props.counter.id)}> 
         Delete </button>
      </div>
    );
  }
  

  getBadgeClass = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatCouint = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
