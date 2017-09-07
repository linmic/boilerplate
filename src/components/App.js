// @flow
import React, { PureComponent } from 'react';
import styles from './App.css';

type State = {
  count: number,
};

class A extends PureComponent<void, State> {
  state = {
    count: 0,
  };

  plus = () => {
    this.setState(
      state => {
        const newState = { ...state };
        newState.count = state.count + 1;

        return newState;
      },
      () => {
        // eslint-disable-next-line
        console.log(this.state.count);
      }
    );
  };

  render() {
    return (
      <div className={styles.container}>
        <button className={styles.btn} onClick={this.plus}>
          ボタン ({this.state.count})
        </button>
      </div>
    );
  }
}

export default A;
