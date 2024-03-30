import React, { Component } from "react";
import TimeLine from "./TimeLine";
import someContext from "../CreateContext";

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
  static contextType = someContext;
  startInterval = () => {
    if (this.state.isStart === false) {
      interv = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
          isStart: true,
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
  handleSave = () => {
    const h = this.state.hours;
    const m = this.state.minutes;
    const s = this.state.second;
    const newArray = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
      s > 9 ? s : "0" + s
    }`;
    this.context.setArray([...this.context.array, newArray]);
  };
  render() {
    const h = this.state.hours;
    const m = this.state.minutes;
    const s = this.state.second;
    return (
      <>
        <div onClick={this.handleSave} className="clock-time">{`${
          h > 9 ? h : "0" + h
        } : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</div>
        <div className="buttons">
          <button onClick={this.startInterval}>Start</button>
          <button onClick={this.stopInterval}>Stop</button>
          <button onClick={this.resetBtn}>Reset</button>
        </div>
        <TimeLine array={this.context.array} />
      </>
    );
  }
}
