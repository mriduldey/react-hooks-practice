import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleDecrease = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  handleIncrease = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h2>Counter made with class</h2>
        <button onClick={this.handleDecrease}>Decrease</button>
        <div>{count}</div>
        <button onClick={this.handleIncrease}>Increase</button>
      </>
    );
  }
}

export default CounterClass;
