import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foodphotos from './components/foodphotos/foodphotos';
import Goals from './components/goals/goals'
import axios from 'axios';
import Header from './components/Header/Header'
import Miniheader from './components/miniheader/miniheader'


class App extends Component {
  constructor() {
    super()
    this.state = {
      myFavorites: [],
      // myGoals: []
    }
    this.updateFaves= this.updateFaves.bind(this);
    this.updateGoals= this.updateGoals.bind(this);
    this.deleteFavorite=this.deleteFavorite.bind(this);
  }

  // createGoal() {
  //   axios.post('api/mygoals').then(res => {
  //     this.setState({ myGoals: res })
  //   })
  // }

  updateFaves(faves){
    this.setState({myFavorites:faves})
  }

  updateGoals(img, goal) {

    // img.goals = img.goals ? [...img.goals, goal] : [goal];
    axios.post('/api/mygoals', { id: img.id , goal }).then(
        results => {
          this.setState({myFavorites:results.data})
        }
    )
  }

  deleteFavorite(imgid){
    axios.delete(`api/mygoals/${imgid}`).then(
    res=> {
      console.log(res.data);
      this.setState({myFavorites: res.data})
    }
)
}

  render() {
    return (
      <div>
        <Header/>
        <div className='favorites-bar'>
          <Miniheader/>
          <Goals faves={this.state.myFavorites} updateGoals={this.updateGoals} deleteFavorite={this.deleteFavorite}/>
        </div>

        <Foodphotos updateFaves={this.updateFaves}/>
      </div>
    );
  }
}

export default App;
