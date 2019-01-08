import React from 'react';
import './Button.css';

const actionButton = (props) => (
    <button type="button" onClick={props.clicked} className={props.btnClass} >{props.children}</button>
);

export default actionButton;