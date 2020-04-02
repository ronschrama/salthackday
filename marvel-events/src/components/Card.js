import React from 'react';
import Event from './Event';
import './Card.css';

const validation = 'ts=1585810599246&apikey=5f77dba396d8c686ea790e48a5b0ead3&hash=4ce6f06f8cbca41e42ddee6c7d42d4c3'

export class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.data.name,
      description: this.props.data.description,
      eventsAvailable: this.props.data.events.available,
      comics: this.props.data.comics.available,
      series: this.props.data.series.available,
      stories: this.props.data.stories.available,
      thumbnail: this.props.data.thumbnail,
      eventName: this.props.data.events.items[0].name,
      events: this.props.data.events.collectionURI,
    }
  }
  render() {
    return (
      <div className="container">
        <div className="column-one"><img src={`${this.state.thumbnail.path}.${this.state.thumbnail.extension}`} /></div>
        <div className="column-two">    
        <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
        <ul>
        <li>Amount of events: {this.state.eventsAvailable}</li>
        <li>Amount of comics: {this.state.comics}</li>
        <li>Amount of series: {this.state.series}</li>
        <li>Amount of stories: {this.state.stories}</li>
        </ul></div>
        {/* <ul>
          <li>{this.state.eventName}</li>
        </ul> */}
      </div>
    )
  }
}

export default Card
