import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <button>Decrease</button>
        <div>{count}</div>
        <button>Increase</button>
      </>
    );
  }
}

export default CounterClass;
