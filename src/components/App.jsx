import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logics/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0'
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
