import React from 'react';
import Card from './Card'
import './Board.css'

export class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: 'Loading...',
      heroID: null,
      data: null,
    }
  }

  componentDidMount(){
    this.fetchData(this.state.heroID);
  }

  fetchData = (heroID) => {
    fetch(`http://localhost:5000/${heroID}`)
      .then(res => res.json())
      .then(marvelData => {
        const heroData = marvelData;
        return heroData
      })
      .then(marvelData => this.setState({data: marvelData}), () => console.log(this.state.data))
      .catch(err => console.log(err));
  }

  spiderman = () => {
    this.setState({
      heroID: '1009610',
    }, ()=> {
      console.log(this.state.heroID)
      this.fetchData(this.state.heroID)
    })};
  ironMan = () => {
    this.setState({
      heroID: '1009368',
    },()=> {
      console.log(this.state.heroID)
      this.fetchData(this.state.heroID)
    })};
  cptAmerica = () => {
    this.setState({
      heroID: '1009220',
    },()=> {
      console.log(this.state.heroID)
      this.fetchData(this.state.heroID)
    })};
  thor = () => {
    this.setState({
      heroID: '1009664',
    },()=> {
      console.log(this.state.heroID)
      this.fetchData(this.state.heroID)
    })};
  hulk = () => {
    this.setState({
      heroID: '1009351',
    },()=> {
      console.log(this.state.heroID)
      this.fetchData(this.state.heroID)
    })
  }
  guardians = () => {
    this.setState({
      heroID: '1011299',
    },()=> {
      console.log(this.state.heroID)
      this.fetchData(this.state.heroID)
    })
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="board">
          <button className="Hero-button" onClick={this.ironMan}>Iron Man</button>
        <button className="Hero-button" onClick={this.spiderman}>Spiderman</button>
        <button className="Hero-button" onClick={this.cptAmerica}>Captain America</button>
        <button className="Hero-button" onClick={this.thor}>Thor</button>
        <button className="Hero-button" onClick={this.hulk}>Hulk</button>
        <button className="Hero-button" onClick={this.guardians}>Guardians of the Galaxy</button>
        </div>
      )
    }
    return (
      <div className="board">
        <div className="button-box">
        <button className="Hero-button" onClick={this.ironMan}>Iron Man</button>
        <button className="Hero-button" onClick={this.spiderman}>Spiderman</button>
        <button className="Hero-button" onClick={this.cptAmerica}>Captain America</button>
        <button className="Hero-button" onClick={this.thor}>Thor</button>
        <button className="Hero-button" onClick={this.hulk}>Hulk</button>
        <button className="Hero-button" onClick={this.guardians}>Guardians of the Galaxy</button>
        </div>
        < Card 
          name={this.state.data.name}
          desc={this.state.data.desc}
          wiki={this.state.data.wiki}
          thpath={this.state.data.thumbnailpath}
          thext={this.state.data.thumbnailext}
          events={this.state.data.events}
          comics={this.state.data.comics}
          series={this.state.data.series}
          stories={this.state.data.stories}/>
      </div>
    )
  }
}

export default Board