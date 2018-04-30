import React from 'react';

export default function Button(props){
    return(
        <div>
            <button type ='button' onClick={() => props.deleteFavorite(props.imgid)}>Delete⛔</button>
        </div>
    )
}