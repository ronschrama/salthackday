import React from 'react';
import './App.css';
import Board from './components/Board';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  };

  componentDidMount(){
    //Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetched our GET route from the Express server
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div>
        <header className="App-header">
      </header>  
      <div className="content">
          <Board />
      </div>
      </div>
    )
  }
}

export default App
