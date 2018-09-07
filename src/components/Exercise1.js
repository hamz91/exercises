import React from "react";

class Exercise1 extends React.Component {
  constructor() {
    super();

    this.state = {
      highestCount: 0,
      input: 0
    };

    this.solution = this.solution.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  solution(event) {
    event.preventDefault();
    const binaryNumber = Number(this.state.input).toString(2);
    let currentCount = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
      if (binaryNumber[i] > 0) {
        currentCount++;
      } else {
        if (currentCount > this.state.highestCount) {
          this.setState({
            highestCount: currentCount
          });
          currentCount = 0;
        }
      }
    }

    return this.state.highestCount;
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  resetCount() {
    this.setState({
      highestCount: 0
    });
  }

  render() {
    return (
      <div className="exercise1">
        <p>Enter a number to see it's binary plateu!</p>
        <form onSubmit={this.solution} onBlur={this.resetCount}>
          <input onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <p>Binary Plateu: {this.state.highestCount}</p>
      </div>
    );
  }
}

export default Exercise1;
