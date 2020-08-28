import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer' 
  }

  const [personState, setPersonState] = useState({
    persons: [
      {name: "Daniel", age: 21},
      {name: "Neto", age: 20}
    ]
  });

  const changeNameHandler = (event) => {
    setPersonState({
      persons: [
        {name: event.target.value, age: 21},
        {name: "Neto", age: 20}
      ]
    })
  }

  const togglePersonHandler = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
      style={style}
      onClick={togglePersonHandler}>Change name</button>
      <UserInput
        changed={changeNameHandler}
        value={personState.persons[0].name} 
      />
      <UserOutput 
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <UserOutput 
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
    </div>
  );
}

export default App;
