import React from 'react';

const Button = (props) =>{
    return <button type="button" class="btn btn-outline-secondary">{props.children}</button>
};

export default Button;