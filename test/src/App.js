import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'React',
          id: '001',
        },  
        {
          name: 'Angular',
          id: '002'
        },
        {
          name: 'Vue',
          id: '003'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
       {this.state.monsters.map(monsters => <h1 key={monsters.id}>{monsters.name}</h1>)
       }
      </div>
    );
  }
}

