import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Cart from './components/Cart';

class App extends Component {

  constructor() {
    super();
    this.state = {
 
    }
  }



  render() {

 
    return (
    
        <div className="App">
     <Posts/>
     
 
        </div>
  
    );
  }
}

export default App;
