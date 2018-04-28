import React, {Component} from 'react';
import axios from 'axios';
import "./foodphotos.css";

export default class Foodphotos extends Component{
    constructor() {
        super()
        this.state = {
            pics: [],
            faves: []
        }
        this.addToFavorites= this.addToFavorites.bind(this)
    }

    componentDidMount() {
        axios.get('/api/photolibrary').then(results => {
            console.log(results);
            let pics = results.data;
            this.setState({ pics })
        })
    }

    addToFavorites(){
        let newFaves= this.state.faves.slice()
        let fullImage= this.state.pics.map(pic=>pic.urls.thumb)
        let id= this.state.pics.map(pic=>pic.id)
        newFaves.push(fullImage)
        this.setState({faves: newFaves})
    }
    // pics.map( pic => {
    //     let completeImage = pic.urls.thumb

    render() {
        const { pics, faves } = this.state;
        console.log(pics)
        return (
           <div>
               <div className='faves-div'>
               <div>
                    {faves.map((fave, i)=>{
                        // let faveImage= fave.urls.thumb
                        return(
                            <div>
                                <img src={fave[i]}/>
                            </div>
                        )
                    })

                    }
                </div>
               </div>
           <div className='center-div'>
                {pics.map( pic => {
                    let completeImage = pic.urls.thumb
                    return (
                        <div>
                            <img src={completeImage} />
                            <button onClick= {this.addToFavorites}>♥</button> 
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}