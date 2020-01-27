import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Hello';
import Lorem from './components/Lorem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <HelloWorld/>
        </div>
        <Lorem/>
      </div>
    );
  }
}

export default App;
