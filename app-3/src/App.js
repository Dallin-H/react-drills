import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      filterString: '',
      list: [
        'apples',
        'bananas',
        'carrots',
        'diced ham',
        'eggs',
        'fish',
        'grated cheese',
        'half-gallon milk'
      ]
    }
  
  }
  handleChange( filter ) {
    this.setState({ filterString: filter})
  }

  
  render() {
    //new var = list filtered. filter if 'e' has filterString value in it. Pull value for filterstring from handlechange method.
    //input changes filterString to value of the input. now it is filtered. now we map it to push the matches from the filter to the new var.
    //we display the new var in the div tag in return.
    let displayOut = this.state.list.filter( (e, i) => {
      return e.includes( this.state.filterString );
    }).map( (element, index)=> {
      return <h2 key={ index } > { element }</h2>
    })
    return (
      <div className='App'>
        <input onChange={ (e) => this.handleChange(e.target.value) } type='text' />
        { displayOut }
      </div>
    );
  }
}

export default App;
