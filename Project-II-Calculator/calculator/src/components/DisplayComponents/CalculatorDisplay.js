import React from 'react';
import './Display.css';


const calculatorDisplay = (props) => (
    <div className="Display">
        <h2>{props.children}</h2>
    </div>
);

export default calculatorDisplay;