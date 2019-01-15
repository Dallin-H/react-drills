import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        'eat',
        'code',
        'play',
        'exercise',
        'sleep'
      ]
    }
  }
  render() {
    let itemList = this.state.list.map( (e, i) => {
      return (
        <h2 key= {i} > {e}  </h2>
      )
    })

    return (
      <div className="App">
        { itemList }
      </div>
    );
  }
}

export default App;
