import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Daniel', age: 21 },
            { name: 'Neto', age: 20 },
            { name: 'Brana', age: 20 },
            { name: 'Counter', age: 20 }
        ],
        otherState: 'Some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log("Event clicked!");
        // DON'T DO THIS => this.state.persons[0].name = 'Daniel';
        this.setState({
            persons: [
                { name: newName, age: 21 },
                { name: 'Neto', age: 20 },
                { name: 'Brana', age: 20 },
                { name: 'Counter', age: 20 }
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 21 },
                { name: 'Neto', age: 20 },
                { name: 'Brana', age: 20 },
                { name: 'Counter', age: 20 }
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({oersons: persons});
    }

    // this.switchNameHandler.bin(this, 'Daniel') is the preferred way.
    // DON'T DO THIS () => this.switchNameHandler('Danny')
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                        click={this.deletePersonHandler.bind(this, index)}
                        name={person.name}
                        age={person.age}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
            </p>
                <button onClick={this.togglePersonsHandler}
                style={style}>Switch name</button>
                {persons}
            </div>
        );
        // return React.createElement('div', null, React.createElement('h1', null, 'Hello!'));
        //}
    };
}
export default App;