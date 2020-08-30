import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSource from './InputSource/InputSource';

class App extends Component {
  state = {
    text: [
      { output: "Daniel" }
    ]
  };

  
  textChangedHandler = (event) => {
    this.setState({output: event.target.value});
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
        <InputSource
          inputText={this.state.text[0].output}
          changed={(event) => this.textChangedHandler(event)}/>
      </div>
    );
  }
}

export default App;
