import React from 'react';
import './Card.css';

function Card(props) {
    const url = props.wiki
    return (
        <div className="container">
            <div className="column-one">
                <img src={`${props.thpath}.${props.thext}`} alt="Marvel hero"/>
            </div>
            <div className="column-two">    
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>More information: <a className="wiki-link" href={`${props.wiki}`} target="_blank">wiki</a></p>
                <p>{props.name} appears in:</p>
                <ul className="horizontal-list">
                    <li>{props.events} events</li>
                    <li>{props.comics} comics</li>
                    <li>{props.series} series</li>
                    <li>{props.stories} stories</li> 
                </ul>
            </div>
        </div>
    )
}

export default Card


