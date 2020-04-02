import React from 'react';
import Card from './Card';
import NewCard from './NewCard'
import './Board.css'
require('dotenv').config();

const validation = '&ts=hello&apikey=9d217b2414eef649066abed205ac3dd2&hash=13b08340e43408213ae0221f4e6308f4'

export class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: 'Loading...',
      heroName: 'iron%20man',
      data: null,
    }
  }

  componentDidMount(){
    this.fetchData(this.state.heroName);
  }

  fetchData = (heroName) => {
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${heroName}&${validation}`)
      .then(res => res.json())
      .then(marvelData => {
        const heroData = 
          {
            name: marvelData.data.results[0].name,
            desc: marvelData.data.results[0].description,
            thumbnail: marvelData.data.results[0].events.available,
            comics: marvelData.data.results[0].comics.available,
            series: marvelData.data.results[0].series.available,
            stories: marvelData.data.results[0].stories.available
          }
        return heroData
      })
      .then(fixedData => this.setState({data: fixedData}), () => console.log(this.state.data))
      .catch(err => console.log(err));
  }


  spiderman = () => {
    this.setState({
      heroName: 'spider-man',
    }, ()=> {
      console.log(this.state.heroName)
      this.fetchData(this.state.heroName)
    })};
  ironMan = () => {
    this.setState({
      heroName: 'iron%20man',
    },()=> {
      console.log(this.state.heroName)
      this.fetchData(this.state.heroName)
    })};
  cptAmerica = () => {
    this.setState({
      heroName: 'captain%20america',
    },()=> {
      console.log(this.state.heroName)
      this.fetchData(this.state.heroName)
    })};
  thor = () => {
    this.setState({
      heroName: 'thor',
    },()=> {
      console.log(this.state.heroName)
      this.fetchData(this.state.heroName)
    })};
  hulk = () => {
    this.setState({
      heroName: 'Hulk',
    },()=> {
      console.log(this.state.heroName)
      this.fetchData(this.state.heroName)
    })
  }
  guardians = () => {
    this.setState({
      heroname: 'guardians%20of%20the%20galaxy',
    },()=> {
      console.log(this.state.heroName)
      this.fetchData(this.state.heroName)
    })
  }

  render() {
    if (!this.state.data) {
      return (
        <div>
          <p> {this.state.spinner} </p>
        </div>
      )
    }
    
    return (
      <div className="board">
        <button className="Hero-button" onClick={this.ironMan}>Iron Man</button>
        <button className="Hero-button" onClick={this.spiderman}>Spiderman</button>
        <button className="Hero-button" onClick={this.cptAmerica}>Captain America</button>
        <button className="Hero-button" onClick={this.thor}>Thor</button>
        <button className="Hero-button" onClick={this.hulk}>Hulk</button>
        <button className="Hero-button" onClick={this.guardians}>Guardians of the Galaxy</button>
        <NewCard 
          name={this.state.data.name}
          desc={this.state.data.desc}
          thumbnail={this.state.data.thumbnail}
          events={this.state.data.events}
          comics={this.state.data.comics}
          series={this.state.data.series}
          stories={this.state.data.stories}/>
      </div>
    )
  }
}

export default Board