import { Component } from "react";

export default class TimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  tick = () => {
    this.setState(() => ({
      time: new Date()
    }));
  };

  stop = () => {
    clearInterval(this.timerID);
  };

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <>
        <h2>Timer</h2>
        <div>{time.toLocaleTimeString()}</div>
        <button onClick={this.stop}>Stop</button>
      </>
    );
  }
}
