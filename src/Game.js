import React, { Component } from 'react';

import Key from './Key';

const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends Component {
  challengeKeys = Array.from({ length: 6 }).map(() => randomNumberBetween(2, 10));
  render() {
    return (
      <div className="game">
        <div className="help">Pick 4 numbers that sum to the target in 15 seconds</div>
        <div className="target">{randomNumberBetween(20, 40)}</div>
        <div className="challenge-numbers">
          {this.challengeKeys.map(value => <Key value={value} />)}
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
