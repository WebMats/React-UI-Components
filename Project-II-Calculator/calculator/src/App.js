import React, { Component } from 'react';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberBtn from './components/ButtonComponents/NumberButton';
import ActionBtn from './components/ButtonComponents/ActionButton';

import './App.css';


class App extends Component {
  state = {
    number: 0,
    operator: null,
    secondNumber: null
  }

  numberClickedHandler = (num) => {
    this.setState(prevState => {
      if (prevState.number === 0) {
      return {number: `${num}`}
      }
      if (prevState.number !== 0 && prevState.operator === null) {
        return {number: `${prevState.number}${num}`}
      }
      if (prevState.operator !== null && prevState.secondNumber === null) {
        return {secondNumber: `${num}`}
      }
      if (prevState.operator !== null && prevState.secondNumber !== null) {
        return {secondNumber: `${prevState.secondNumber}${num}`}
      }
    })
  }

  evaluateHandler = () => {
    const rest = {operator: null, secondNumber: null}
    this.setState(({number, secondNumber, operator }) => {
      if (secondNumber && operator === 'plus') {
        return {number: `${+number + +secondNumber}`, ...rest}
      }
      if (secondNumber && operator === 'minus') {
        return {number: `${+number - +secondNumber}`, ...rest}
      }
      if (secondNumber && operator === 'divide') {
        return {number: `${+number / +secondNumber}`, ...rest}
      }
      if (secondNumber && operator === 'multiply') {
        return {number: `${+number * +secondNumber}`, ...rest}
      }
      return {number: 0}
    })
  }


  render() {
    return (
      <div className="App">
        <Display>{this.state.number}</Display>
        <div>
          <ActionBtn clicked={() => this.setState({number: 0, operator: null, secondNumber: null})} btnClass="ActionBtn">clear</ActionBtn>
          <NumberBtn clicked={() => this.setState({operator: 'divide'})} btnClass="OperatorBtn">&divide;</NumberBtn>
        </div>
        <div>
          <NumberBtn clicked={() => this.numberClickedHandler(7)} btnClass="NumberBtn">7</NumberBtn>
          <NumberBtn clicked={() => this.numberClickedHandler(8)} btnClass="NumberBtn">8</NumberBtn>
          <NumberBtn clicked={() => this.numberClickedHandler(9)} btnClass="NumberBtn">9</NumberBtn>
          <NumberBtn clicked={() => this.setState({operator: 'multiply'})} btnClass="OperatorBtn">&times;</NumberBtn>
        </div>
        <div>
          <NumberBtn clicked={() => this.numberClickedHandler(4)} btnClass="NumberBtn">4</NumberBtn>
          <NumberBtn clicked={() => this.numberClickedHandler(5)} btnClass="NumberBtn">5</NumberBtn>
          <NumberBtn clicked={() => this.numberClickedHandler(6)} btnClass="NumberBtn">6</NumberBtn>
          <NumberBtn clicked={() => this.setState({operator: 'minus'})} btnClass="OperatorBtn">&minus;</NumberBtn>
        </div>
        <div>
          <NumberBtn clicked={() => this.numberClickedHandler(1)} btnClass="NumberBtn">1</NumberBtn>
          <NumberBtn clicked={() => this.numberClickedHandler(2)} btnClass="NumberBtn">2</NumberBtn>
          <NumberBtn clicked={() => this.numberClickedHandler(3)} btnClass="NumberBtn">3</NumberBtn>
          <NumberBtn clicked={() => this.setState({operator: 'plus'})} btnClass="OperatorBtn">+</NumberBtn>
        </div>
        <div>
          <ActionBtn clicked={() => this.numberClickedHandler(0)} btnClass="ActionBtn">0</ActionBtn>
          <NumberBtn clicked={this.evaluateHandler} btnClass="OperatorBtn">=</NumberBtn>
        </div>
      </div>
    );
  }
};

export default App;
