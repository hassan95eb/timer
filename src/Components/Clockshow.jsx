import React, { Component } from "react";

var interv = null;
export default class Clockshow extends Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minutes: 0,
      hours: 0,
      isStart: false,
    };
  }
  startInterval = () => {
    if (this.state.isStart === false) {
      interv = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second === 60) {
          this.setState({
            second: 0,
            minutes: this.state.minutes + 1,
          });
        }
        if (this.state.minutes === 60) {
          this.setState({
            minutes: 0,
            hours: this.state.hours + 1,
          });
        }
      }, 10);
    }
  };

  stopInterval = () => {
    clearInterval(interv);
    this.setState({
      isStart: false,
    });
  };
  resetBtn = () => {
    clearInterval(interv);
    this.setState({
      second: 0,
      minutes: 0,
      hours: 0,
      isStart: false,
    });
  };
  render() {
    const h = this.state.hours;
    const m = this.state.minutes;
    const s = this.state.second;
    return (
      <>
        <div>{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
          s > 9 ? s : "0" + s
        }`}</div>
        <button onClick={this.startInterval}>Start</button>
        <button onClick={this.stopInterval}>Stop</button>
        <button onClick={this.resetBtn}>Reset</button>
      </>
    );
  }
}
