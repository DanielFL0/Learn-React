import React from 'react';

const userInput = (props) => {
    // In-line style, VERY IMPORTANT
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div className="UserInput">
            <p>Enter your username:</p>
            <input 
                type="text"
                onChange={props.changed}
                value={props.value}
                style={inputStyle}></input>
        </div>
    );
}

export default userInput;