import React from 'react';
import logo from './logo.svg';
import './App.css';

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{this.state.data}</p>
      </header>  
      </div>
    )
  }
}

export default App
