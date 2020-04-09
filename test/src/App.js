import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Hung"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "My Nghi" })}>
            Change Text
          </button>
          <button onClick={() => this.setState({ string: "1" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

