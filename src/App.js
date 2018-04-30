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
      editedGoalString:''
    }
    this.updateFaves= this.updateFaves.bind(this);
    this.updateGoals= this.updateGoals.bind(this);
    this.deleteFavorite=this.deleteFavorite.bind(this);
    this.editGoal= this.editGoal.bind(this);
    this.editGoalString= this.editGoalString.bind(this);

  }

  // createGoal() {
  //   axios.post('api/mygoals').then(res => {
  //     this.setState({ myGoals: res })
  //   })
  // }

  componentDidMount(){
    axios.get('/api/mygoals').then((res)=>{
      console.log(res.data)
      this.setState({myFavorites:res.data
      })}
    )
  }

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
      // console.log(res.data);
      this.setState({myFavorites: res.data})
    }
)
}

editGoal(picIndex, goalIndex){
  // let goalVal= this.state.myFavorites[picIndex].goals[goalIndex]
  let {editedGoalString}= this.state
  axios.put(`api/mygoals/${picIndex}`, {editedGoalString, goalIndex}).then(res=>{
    console.log(res.data)
    this.setState({myFavorites:res.data , editedGoalString:''})
  }).catch(()=>console.log('failed, app js edit goal'))
}

editGoalString(e){
  this.setState({editedGoalString:e.target.value})
}

  render() {
    return (
      <div>
        <Header/>
        <div className='favorites-bar'>
          <Miniheader/>
          <input className='edit-goal-bar' onChange={this.editGoalString}    value={this.state.editedGoalString} placeholder='Edit goals here'/>
          <Goals faves={this.state.myFavorites} updateGoals={this.updateGoals} deleteFavorite={this.deleteFavorite} editGoal={this.editGoal} editedString={this.state.editedGoalString}/>
        </div>

        <Foodphotos updateFaves={this.updateFaves}/>
      </div>
    );
  }
}

export default App;
