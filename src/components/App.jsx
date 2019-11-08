import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
import calculate from '../logics/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOperation: true,
      result: '0',
      total: '0',
      next: ''
    };
  }

  handleClick = buttonName => {
    const newState = calculate(this.state, buttonName);
    this.setState({...{isOperation: true}, ...newState});
  }

  render() {
    const {isOperation, total, next} = this.state;
    return (
      <div id="app">
        <Display
          value={isOperation ? total : next}
          />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}
