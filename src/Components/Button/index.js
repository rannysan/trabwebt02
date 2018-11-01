import React from 'react';
import './button.css';

const Button = (props) =>{
    return <button type="button" class="btn btn-outline-secondary">{props.children}</button>
};

export default Button;