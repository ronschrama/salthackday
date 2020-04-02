import React from 'react';
import './Card.css';

const validation = '&ts=hello&apikey=9d217b2414eef649066abed205ac3dd2&hash=13b08340e43408213ae0221f4e6308f4'

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
