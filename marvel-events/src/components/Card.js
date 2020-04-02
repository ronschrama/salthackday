import React from 'react';
import './Card.css';

function NewCard(props) {
    return (
        <div>
             <div className="container">
         {/* <div className="column-one"><img src={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}`} /></div> */}
         <div className="column-two">    
         <h2>{props.name}</h2>
         <p>{props.desc}</p>
        <ul>
        <li>Amount of events: {props.events}</li>
         <li>Amount of comics: {props.comics}</li>
         <li>Amount of series: {props.series}</li>
         <li>Amount of stories: {props.stories}</li> 
        </ul>
        </div>
       </div>
        </div>
    )
}

export default NewCard


