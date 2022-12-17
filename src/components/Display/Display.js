import React from 'react';

const Display = (props) => {
    return (
        <div style={{border: "2px solid red",margin: "10px"}}>
            <h2>{props.name}</h2>
            <h2>{props.steps}</h2>

        </div>
    );
};

export default Display;