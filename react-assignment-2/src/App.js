import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSource from './InputSource/InputSource';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
      userInput: ""
  };

  
  textChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });
    
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
          changed={this.textChangedHandler}
          inputText={this.state.userInput}/>
        <ValidationComponent
          inputTextLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
