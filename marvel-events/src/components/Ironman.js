// import React from 'react';

// const validation = 'ts=1585810599246&apikey=5f77dba396d8c686ea790e48a5b0ead3&hash=4ce6f06f8cbca41e42ddee6c7d42d4c3'

// export class Ironman extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       spinner: 'Loading...',
//       data: null,
//     }
//   }

//   componentDidMount() {
//     this.fetchData(`https://gateway.marvel.com/v1/public/characters?name=iron%20man&${validation}`)
//   }

//   fetchData = (url) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => this.setState({ data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     // console.log(this.state.data);
//     if (!this.state.data) {
//       return (
//         <div>
//           <p> {this.state.spinner} </p>
//         </div>
//       )
//     }
//     // const { path } = this.state.data.data.results[0]
//     return (
//       <div>
//         <h2>{this.state.data.data.results[0].name}</h2>
//         <p>{this.state.data.data.results[0].description}</p>
//         <p>Amount of events: {this.state.data.data.results[0].events.available}</p>
//         <p>Amount of comics: {this.state.data.data.results[0].comics.available}</p>
//         <p>Amount of series: {this.state.data.data.results[0].series.available}</p>
//         <p>Amount of stories: {this.state.data.data.results[0].stories.available}</p>
//         {/* <img src={`${this.state.data.data.results[0].thumbnail.path}.${this.state.data.data.results[0].thumbnail.extension}`} /> */}
//       </div>
//     )
//   }
// }

// export default Ironman
