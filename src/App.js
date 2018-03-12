import React, { Component } from 'react';
import {csv} from 'd3-request';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    csv('./src/data/birthdeathrates.csv', (error, data) => {
      if (error) {
        this.setState({loadError: true});
      }
      this.setState({
        data: data.map(d => ({...d, x: Number(d.birth), y: Number(d.death)}))
      });
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
