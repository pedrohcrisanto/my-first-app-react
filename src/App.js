import React, { Component } from 'react';
import './App.css';
import Planets from './components/planets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React</h1>
        </div>
        <Planets/>
      </div>
    );
  }
}

export default App;
