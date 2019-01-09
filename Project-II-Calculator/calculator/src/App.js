import React, { Component } from 'react';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberBtn from './components/ButtonComponents/NumberButton';
import ActionBtn from './components/ButtonComponents/ActionButton';

import './App.css';



class App extends Component {
  state = {
    number: 0,
    operator: null,
    secondNumber: null,
    btns: [
      {btnClass: "NumberBtn", text:7}, {btnClass: "NumberBtn", text:8}, {btnClass: "NumberBtn", text:9}, {btnClass: "OperatorBtn", text: 'x', operator: 'multiply'} ,
      {btnClass: "NumberBtn", text:4}, {btnClass: "NumberBtn", text:5}, {btnClass: "NumberBtn", text:6}, {btnClass: "OperatorBtn", text: '-', operator: 'minus'},
      {btnClass: "NumberBtn", text:1}, {btnClass: "NumberBtn", text:2}, {btnClass: "NumberBtn", text:3}, {btnClass: "OperatorBtn", text: '+', operator: 'plus'}
    ]
  }

  numberClickedHandler = (num) => {
    this.setState(prevState => {
      if (prevState.number === 0) return {number: `${num}`};
      if (prevState.number !== 0 && prevState.operator === null) return {number: `${prevState.number}${num}`};
      if (prevState.operator !== null && prevState.secondNumber === null) return {secondNumber: `${num}`};
      if (prevState.operator !== null && prevState.secondNumber !== null) return {secondNumber: `${prevState.secondNumber}${num}`};
    })
  }

  evaluateHandler = () => {
    const rest = {operator: null, secondNumber: null}
    this.setState(({number, secondNumber, operator }) => {
      if (secondNumber && operator === 'plus') return {number: `${+number + +secondNumber}`, ...rest};
      if (secondNumber && operator === 'minus') return {number: `${+number - +secondNumber}`, ...rest};
      if (secondNumber && operator === 'divide') return {number: `${+number / +secondNumber}`, ...rest};
      if (secondNumber && operator === 'multiply') return {number: `${+number * +secondNumber}`, ...rest};
      return {number: 0}
    })
  }

  render() {
    const buttonArray = this.state.btns.map(btn => {
      let clicked = btn.operator !== undefined ? () => this.setState({operator: btn.operator}) : () => this.numberClickedHandler(btn.text);
      return (<NumberBtn key={btn.operator !== undefined ? `btn-${btn.operator}`: `btn-${btn.text}`} clicked={clicked} btnClass={btn.btnClass}>{btn.text}</NumberBtn>)
    })

    return (
      <div className="App">
        <Display>{this.state.number}</Display>
        <ActionBtn clicked={() => this.setState({number: 0, operator: null, secondNumber: null})} btnClass="ActionBtn">clear</ActionBtn>
        <NumberBtn clicked={() => this.setState({operator: 'divide'})} btnClass="OperatorBtn">&divide;</NumberBtn>
        {buttonArray}
        <ActionBtn clicked={() => this.numberClickedHandler(0)} btnClass="ActionBtn">0</ActionBtn>
        <NumberBtn clicked={this.evaluateHandler} btnClass="OperatorBtn">=</NumberBtn>
      </div>
    );
  }
};

export default App;
