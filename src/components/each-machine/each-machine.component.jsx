import React from 'react';

import EachSlot from '../each-slot/each-slot.component'
import Button from '../button/button.component'

import './each-machine.styles.css';

class EachMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: '',
            num2: '',
            num3: ''
          }
    }

    runSlot = () => {
        this.setState({
            num1: Math.floor(Math.random() * 9),
            num2: Math.floor(Math.random() * 9),
            num3: Math.floor(Math.random() * 9),
        })
    }

    render() {
        const { key } = this.state;
        console.log ({key})
        return(
            <div className='each-machine'>
                <div className='header'>
                    <h1 className='title'>{this.props.title}</h1>
                    <Button
                        onClick={this.runSlot}
                        btnText='Go!'
                    />
                </div>
                
                <div className='slots'>
                    <EachSlot key={1} num={this.state.num1}/>
                    <EachSlot key={2} num={this.state.num2}/>
                    <EachSlot key={3} num={this.state.num3}/>
                </div>
                <p>message</p>
            </div>
        )
    }
}

export default EachMachine;