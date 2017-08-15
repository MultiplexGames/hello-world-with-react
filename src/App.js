import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Naber Dünya?</h2>
        </div>
        <p className="App-intro">
          <strong>Benim için büyük, insanlık için olmasa da olur bir adım.</strong>
        </p>
      </div>
    );
  }
}

export default App;
