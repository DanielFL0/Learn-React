import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid green;
padding: 8px;
cursor: pointer;
&:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
}
`;

class App extends Component {
    state = {
        persons: [
            { id: 0, name: 'Daniel', age: 21 },
            { id: 1, name: 'Neto', age: 20 },
            { id: 2, name: 'Brana', age: 20 },
            { id: 3, name: 'Counter', age: 20 }
        ],
        otherState: 'Some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log("Event clicked!");
        // DON'T DO THIS => this.state.persons[0].name = 'Daniel';
        this.setState({
            persons: [
                { id: 0, name: newName, age: 21 },
                { id: 1, name: 'Neto', age: 20 },
                { id: 2, name: 'Brana', age: 20 },
                { id: 3, name: 'Counter', age: 20 }
            ]
        })
    };

    /*
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { id: 0, name: event.target.value, age: 21 },
                { id: 1, name: 'Neto', age: 20 },
                { id: 2, name: 'Brana', age: 20 },
                { id: 3, name: 'Counter', age: 20 }
            ]
        })
    }
    */

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    // this.switchNameHandler.bin(this, 'Daniel') is the preferred way.
    // DON'T DO THIS () => this.switchNameHandler('Danny')
    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid green',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                        click={this.deletePersonHandler.bind(this, index)}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                        name={person.name}
                        age={person.age}
                        key={person.id}/>
                    })}
                </div>
            );
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
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
                <p className={classes.join(' ')}>It works!</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch name</StyledButton>
                {persons}
            </div>
        );
        // return React.createElement('div', null, React.createElement('h1', null, 'Hello!'));
        //}
    };
}
export default App;