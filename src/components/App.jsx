import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
import calculate from '../logics/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: calculate(12, 4, 'x').total
    };
  }

  render() {
    return (
      <div id="app">
        <Display value={this.state.result} />
        <ButtonPanel />
      </div>
    );
  }
}
