import React from 'react';

import './button.styles.css';

const Button = ( {btnText, action} ) => (
    <button className='btn' onClick={action}>{btnText}</button>
)

export default Button;