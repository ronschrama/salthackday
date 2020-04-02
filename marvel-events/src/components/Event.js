import React from 'react';

const validation = 'ts=1585810599246&apikey=5f77dba396d8c686ea790e48a5b0ead3&hash=4ce6f06f8cbca41e42ddee6c7d42d4c3'

export class Event extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: this.props.data.events.collectionURI
    }
  }
  render() {
    console.log(this.state.events)
    return (
      <div>
        <p>{this.state.events}</p>
      </div>
    )
  }
}

export default Event

//     this.state = {
//       data: null
//     }
//   }

//   componentDidMount() {
//     this.fetchData(`${this.state.events}&${validation}`)
//   }

//   fetchData = (url) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => this.setState({ data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     console.log(this.state.data);
//     if (!this.state.data) {
//       return (
//         <div>
//           <p> {this.state.spinner} </p>
//         </div>
//       )
//     }

//     return (
//       <div>
//         <p>{this.state.data.data.results[0].id}</p>
//       </div>
//     )
//   }
// }

