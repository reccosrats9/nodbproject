import React, { Component } from 'react';
import axios from 'axios';
import './goals.css'
import Deletebutton from '../deletebutton/deletebutton'
import Edit from '../editbutton/editbutton'

export default class Goals extends Component {
  
    createGoal(e, img) {
        e.preventDefault();
        const refKey = `faveImg${img.id}`
        const goal = this.refs[refKey].value;
        this.refs[refKey].value = '';
        this.props.updateGoals(img, goal)
    }


    render() {
        console.log(this.props);
        return (
            <div className="pic-goal-form-parent" >

                {this.props.faves.map((img, picIndex) => {
                    return <form className="pic-goal-form" onSubmit={e => this.createGoal(e, img)}>
                        <Deletebutton deleteFavorite={this.props.deleteFavorite} imgid={img.id} />
                        <img src={img.url} />
                        <input ref={`faveImg${img.id}`} placeholder='Write a SMART goal here...' />
                        <ul className="goals-list">
                            {img.goals && img.goals.map((goal, goalIndex) => {
                                return(
                                <li> 
                                    {goal}
                                    <Edit editGoal={this.props.editGoal} picIndex={picIndex} goalIndex={goalIndex} />
                                </li>
                                )}
                            )}
                        </ul>
                    </form>

                })}
            </div>
        )
    }
}