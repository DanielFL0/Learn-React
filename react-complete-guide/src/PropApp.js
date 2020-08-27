import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = () => {

//class App extends Component {
/*  
state = {
    persons: [
      { name: 'Daniel', age: '21' },
      { name: 'Neto', age: '20' },
      { name: 'Brana', age: '20' },
      { name: 'Counter', age: '20'}
    ],
    otherState: 'Some other value'
  }
  */
  
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Daniel', age: '21' }
    ]
  });

  /*
  switchNameHandler = () => {
    // console.log("Event clicked!");
    // DON'T DO THIS => this.state.persons[0].name = 'Daniel';
    this.setState({
      persons: [
        { name: 'Danny', age: '21' },
        { name: 'Neto', age: '20' },
        { name: 'Brana', age: '20' },
        { name: 'Daniel', age: '20'}
      ]
    })
  };
  */
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Daniel', age: '22' }
      ]
    })
  };

  const [otherState, setOtherState] = useState('I like pizza');

  console.log(personState, otherState);

  //render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobbies: Programming and Anime</Person>
      </div>
    );
   // return React.createElement('div', null, React.createElement('h1', null, 'Hello!'));
  //}
};

export default app;
