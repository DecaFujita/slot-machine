import React from 'react';

import './each-slot.styles.css'

const EachSlot = props => (
    <div className='each-slot'>
        {props.num}
    </div>
);

export default EachSlot;