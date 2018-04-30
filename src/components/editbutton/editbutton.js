import React from 'react';

export default function Edit(props){
    return(
        <div>
            <button type ='button' onClick={()=>props.editGoal(props.picIndex,props.goalIndex)} >Edit</button>
        </div>
    )
}