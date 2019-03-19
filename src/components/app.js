import React, { Component } from 'react';

class App extends Component {
  state = {
    time: 0,
    step: 974
  };

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    const { time, step } = this.state;
    this.request = requestAnimationFrame(this.animate);
    this.count();

    if (time >= 100000 - step) {
      cancelAnimationFrame(this.request);
    }
  };

  count = () => {
    const { time, step } = this.state;
    this.setState({ time: time + step });
  };

  request;

  render() {
    const { time } = this.state;
    return <div className="App">{time}</div>;
  }
}

export default App;
