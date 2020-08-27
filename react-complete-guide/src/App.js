import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Daniel', age: '21' },
            { name: 'Neto', age: '20' },
            { name: 'Brana', age: '20' },
            { name: 'Counter', age: '20' }
        ],
        otherState: 'Some other value'
    };

    switchNameHandler = (newName) => {
        // console.log("Event clicked!");
        // DON'T DO THIS => this.state.persons[0].name = 'Daniel';
        this.setState({
            persons: [
                { name: newName, age: '21' },
                { name: 'Neto', age: '20' },
                { name: 'Brana', age: '20' },
                { name: 'Daniel', age: '20' }
            ]
        })
    };

    // this.switchNameHandler.bin(this, 'Daniel') is the preferred way.

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
                <button onClick={() => this.switchNameHandler('Danny')}>Switch name</button>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} 
                    click={this.switchNameHandler.bind(this, 'Danny')}>My hobbies: Programming and Anime</Person>
            </div>
        );
        // return React.createElement('div', null, React.createElement('h1', null, 'Hello!'));
        //}
    }
}
export default App;