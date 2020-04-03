import React from 'react';
import './Menu.css';

export class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: 'Loading...',
      heroID: null,
      data: null,
    }
  }
  render() {
    return (
        <div className="card-container">
          <h3>Welcome to the marvellous world of the Marvel universe!</h3>
          <div className="button-box">
            <button className="Hero-button" onClick={this.ironMan}>Iron Man</button>
            <button className="Hero-button" onClick={this.spiderman}>Spiderman</button>
            <button className="Hero-button" onClick={this.cptAmerica}>Captain America</button>
            <button className="Hero-button" onClick={this.thor}>Thor</button>
            <button className="Hero-button" onClick={this.hulk}>Hulk</button>
            <button className="Hero-button" onClick={this.guardians}>Guardians of the Galaxy</button>
          </div>
        </div>
    )
  }
}

export default Menu