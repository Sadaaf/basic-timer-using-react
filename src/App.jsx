import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    time: 0,
  };

  increaseTime = () => {
    this.setState({
      time: this.state.time + 1,
    });
  };

  decreaseTime = () => {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1,
      });
    }
  };
  
  intervalID = null;

  resetTime = () => {
    this.setState({
      time: (this.state.time = 0),
    });
    clearInterval(this.intervalID)
    this.intervalID = null;
  };

  startTimer = () => {
    if (this.state.time > 0 && !this.intervalID) {
      this.intervalID = setInterval(() => {
        this.setState({ time: this.state.time - 1 }, () => {
          if (this.state.time === 0) {
            alert("Time's UP!!");
            clearInterval(this.intervalID);
            this.intervalID = null;
          }
        });
      }, 1000);
    }
  };

  pauseTimer = () => {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  };

  render() {
    return (
      <div className="App">
        <h1 style={{color: 'red'}}>Timer</h1>
        <h3 style={{fontSize: "150px"}}>{this.state.time}</h3>
        <button onClick={this.decreaseTime} className="btn">Decrease Time</button>
        <button onClick={this.resetTime}  className="btn">Reset</button>
        <button onClick={this.increaseTime} className="btn">Increase Time</button>
        <br></br>
        <button onClick={this.startTimer} className="btn">Start</button>
        <button onClick={this.pauseTimer}  className="btn">Pause</button>
      </div>
    );
  }
}

export default App;
