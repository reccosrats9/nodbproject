import React, { Component } from 'react';
import axios from 'axios';
import './goals.css'
import Deletebutton from '../deletebutton/deletebutton'

export default class Goals extends Component {

    createGoal(e, img) {
        e.preventDefault();
        const refKey = `faveImg${img.id}`
        const goal = this.refs[refKey].value;
        this.refs[refKey].value = '';
        this.props.updateGoals(img, goal)
    }

    render() {

        return (
            <div className="pic-goal-form-parent" >

                {this.props.faves.map((img) => {
                    return <form className= "pic-goal-form" onSubmit={e => this.createGoal(e, img)}>
                        <Deletebutton deleteFavorite={this.props.deleteFavorite} imgid={img.id} />
                        <img src={img.url} />
                        <input ref={`faveImg${img.id}`} placeholder='Write a SMART goal here...' />
                        <ul>
                            {img.goals && img.goals.map(goal => <li>{goal}</li>)}
                        </ul>
                    </form>

                })}
            </div>
        )
    }
}