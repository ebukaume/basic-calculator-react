import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel.jsx';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0'
    };
  }

  render() {
    return (
      <div id="container">
        <Display value={this.state.result} />
        <ButtonPanel />
      </div>
    );
  }
}
