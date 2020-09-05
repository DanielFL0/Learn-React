import React from 'react';

const validationComponent = (props) => {
    let message = "Text is long enough";

    if (props.inputTextLength <= 5) {
        message = "Text is too short";
    }
    return(
        <div>
            <p>{message}</p>
        </div>
    );
}

export default validationComponent;