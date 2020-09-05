import React from 'react';

const inputSource = (props) => {
    return (
        <div>
            <input 
            type="text"
            onChange={props.changed}
            value={props.inputText}
            text={props.inputText}>
            </input>
            <p>Message: {props.inputText}</p>
            <p>Message length: {props.inputText.length}</p>
        </div>
    );
}

export default inputSource;