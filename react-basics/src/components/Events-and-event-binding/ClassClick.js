import React, { Component } from "react";

class ClassClick extends Component {
  handleClick = () => {
    console.log("button clicked form the class componenr");
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
