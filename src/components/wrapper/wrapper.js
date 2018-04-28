import React, {Component} from 'react';
import Goals from '../goals/goals';
import Favephotos from '../favephotos/favephotos';
import goals from '../goals/goals';

export default class Wrapper extends Component {

    constructor(){
        super()
        this.state= {
            goalsPicAndText: [/*obj1{
                id: #,
                picURL: '',
                goalText: ''
            },obj2,obj3,obj4... */]
        }
    }

    render(){
        let {goalsPicAndText} = this.state;
 return(
        <div>
            <Favephotos />
           {goalsPicAndText.map( (val/*obj*/, i) => ( <div>
               <Favephotos key= {goalsPicAndText[i].id} pic={goalsPicAndText[i].picURL}/>
               <Goals key={goalsPicAndText[i].id} goal= {goalsPicAndText[i].goalText}/>
           </div> )  )}
           
            <Goals />
        </div>
    )
}
}