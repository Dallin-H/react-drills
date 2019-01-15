import React, { Component } from 'react';
import './App.css';
import Image from './Image.js'

class App extends Component{
  render(){
    return (
      <div>
        <Image myImage={'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1523901147/1804w-Eggs.jpg?itok=ML4rMi5g'}/>
      </div>
      
    )
  }
}

export default App;