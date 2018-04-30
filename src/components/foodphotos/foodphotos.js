import React, { Component } from 'react';
import axios from 'axios';
import "./foodphotos.css";

export default class Foodphotos extends Component {
    constructor() {
        super()
        this.state = {
            pics: [],
            faves: []
        }
    }

    componentDidMount() {
        axios.get('/api/photolibrary').then(results => {
            console.log(results);
            let pics = results.data;
            this.setState({ pics })
        })
    }

    addToFavorites(pic) {
        if (this.state.faves.find(img => img == pic)) {
            return;
        }
        
        axios.post('/api/mygoals',
        {
            img: pic
        }
    ).then(
        res => { this.setState({ faves: res.data }) 
        this.props.updateFaves(res.data)}
        )
    }

    render() {
        const { pics, faves } = this.state;
        // console.log(pics)
        let myNewFavorite = pics.filter((pic, ind, arr, ) => {
            (pic === pic.id)
        })
        return (
            <div>
                <div className='faves-div'> </div>
                <h1 className="image-display" >Click an image to add it to your goals list</h1>
                <div className='center-div'>
                    {pics.map((pic, index) => {
                        let shownImage = pic.urls.thumb
                        let imageID = pic.id

                        return (
                            <div>
                                <img src={shownImage} onClick={() => this.addToFavorites(pic)} />
                                {/* <Button id={pic.id} picURL={shownImage} updateFavesFn={this.addToFavorites} /> */}
                                {/* <button onClick= {this.addToFavorites}>♥</button> */}
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}