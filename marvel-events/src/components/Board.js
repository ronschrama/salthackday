import React from 'react';
import Card from './Card';
import './Board.css'

const validation = 'ts=1585810599246&apikey=5f77dba396d8c686ea790e48a5b0ead3&hash=4ce6f06f8cbca41e42ddee6c7d42d4c3'

export class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: 'Loading...',
      heroName: 'iron%20man',
      reload: false,
      data: null,
    }
  }

  componentDidMount(){
    this.fetchData(this.state.heroName);
  }

  componentDidUpdate(prevState) {
    if(this.state.heroName !== prevState.heroName) {
      this.fetchData(this.state.heroName);
    }
  }

  fetchData = (heroName) => {
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${heroName}&${validation}`)
      .then(res => res.json())
      .then(data => this.setState({data}))
      .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   this.fetchData(`https://gateway.marvel.com/v1/public/characters?name=${this.state.heroName}&${validation}`)
  // }

  // fetchData = (url) => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ data }))
  //     .catch(err => console.log(err));
  // }


  // }

  Spiderman = () => {
    this.setState({
      heroName: "spider-man",
      reload: true
    })};

  render() {
    console.log(this.state.data);
    if (!this.state.data) {
      return (
        <div>
          <p> {this.state.spinner} </p>
        </div>
      )
    }

    return (
      <div className="board">
        <button className="Hero-button" onClick={this.Spiderman}>Spiderman</button>
        <Card data={this.state.data.data.results[0]}/>
      </div>
    )
  }
}

export default Board
