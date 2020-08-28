import React from 'react';
import './UserOutput.css';

const userOuput = (props) => {
    return (
        <div className="UserOutput">
            <p>Output:</p>
            <p>My name is: {props.name}</p>
            <p>My age is: {props.age}</p>
        </div>
    );
}

export default userOuput;