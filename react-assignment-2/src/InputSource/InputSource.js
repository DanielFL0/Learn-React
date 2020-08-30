import React from 'react';

const inputSource = (props) => {
    return (
        <div>
            <input 
            type="text"
            onChange={props.changed}></input>
            <p>Hello {props.inputText}</p>
        </div>
    );
}

export default inputSource;