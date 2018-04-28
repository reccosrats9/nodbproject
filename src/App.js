import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper/wrapper';
import Foodphotos from './components/foodphotos/foodphotos';


class App extends Component {
constructor(){
  super()
  this.state= {
    myFavorites: []
  }
}

addFavorites(){}


  render() {
    return (
      <div>
        <div className= 'App-title App App-header'> <strong>Pictogoals </strong> </div>
        <div className= 'favorites-bar'> My Goals</div>

          <Wrapper />
          <Foodphotos />
      </div>
    );
  }
}

export default App;
