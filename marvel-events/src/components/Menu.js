import React from 'react';

export class Menu extends React.Component {
  constructor(){
    super()
    this.state = {
    
    }
  }
  render() {
    return (
      <div>
        <div className="menu">
          <button className="spiderman" onClick={heroname= spiderman}>Spiderman</button>
          <button>Iron Man</button>
          <button>Captain America</button>
          <button>Thor</button>
          <button>Black Panther</button>
          <button>Captain Marvel</button>
          <button>Star Lord</button>
        </div>
      </div>
    )
  }
}

export default Menu
