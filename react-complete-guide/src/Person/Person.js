import React from 'react';
import styled from 'styled-components';
import classes from './Person.css';

/*
const StyledDiv = styled.div `width: 60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media(min-width: 500px) {
    width: 450px;
}`
*/

const person = (props) => {

    // Create error on purpose
    /*
    const rnd = Math.random();

    if (rnd > 0.8) {
        throw new Error('Something went wrong');
    }
    */

    return (
        //<StyledDiv>
        <div className={classes.Person}>
            <p onClick={props.click}>Hello! My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        //</StyledDiv>
    )
};

export default person;