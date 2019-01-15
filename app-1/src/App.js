import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      display: ''
    }
  }

  handleUpdateDisplay(value) {
    console.log('handleUpdateDisplay trigger')
    this.setState({
      display : value
    })
  }

  render() {
    return (
      <div>
        <input 
        onChange={ (event) => this.handleUpdateDisplay(event.target.value)}
        />
        <span> {this.state.display} </span>
      </div>
    );
  }
}

export default App;
