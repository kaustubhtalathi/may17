import React, { Component } from 'react';
import sampleSize from 'lodash.samplesize';

import Key from './Key';

const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const targetColors = {
  playing: 'blue',
  lost: 'red',
  won: 'green',
};

class Game extends Component {
  state = {
    gameStatus: 'playing', // 'won', 'lost'
    selectedKeys: [],
  };
  challengeKeys = Array.from({ length: 6 }).map(() => randomNumberBetween(2, 10));
  target = sampleSize(this.challengeKeys, 4).reduce((acc, curr) => curr + acc, 0);
  selectKey = keyId => {
    this.setState(prevState => {
      if (prevState.gameStatus !== 'playing') {
        return null;
      }
      // prevState.selectedKeys
      const newSelectedKeys = [...prevState.selectedKeys, keyId];
      return {
        selectedKeys: newSelectedKeys,
        gameStatus: this.calcGameStatus(newSelectedKeys),
      };
    });
  };
  calcGameStatus = newSelectedKeys => {
    if (newSelectedKeys.length !== 4) {
      return 'playing';
    }

    const sumSelected = newSelectedKeys.reduce((acc, curr) => acc + this.challengeKeys[curr], 0);
    return sumSelected === this.target ? 'won' : 'lost';
  };
  render() {
    return (
      <div className="game">
        <div className="help">Pick 4 numbers that sum to the target in 15 seconds</div>
        <div className="target" style={{ backgroundColor: targetColors[this.state.gameStatus] }}>
          {this.target}
        </div>
        <div className="challenge-numbers">
          {this.challengeKeys.map((value, index) => (
            <Key
              key={index}
              id={index}
              value={value}
              isClickable={this.state.selectedKeys.indexOf(index) === -1}
              onClickAction={this.selectKey}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
