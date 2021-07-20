import React from 'react';

import EachSlot from './components/each-slot/each-slot.component'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      num3: ''
    }
  }
  runSlot = () => (
    this.setState({
      num1:(Math.floor(Math.random() * 9)),
      num2:(Math.floor(Math.random() * 9)),
      num3:(Math.floor(Math.random() * 9)),
    })
  )

  render() {
    return (
      <div className="App">
        <div className='each-machine'>
        <h1>title</h1>
        <button onClick={this.runSlot}>Go!</button>
        <div className='slots'>
          <EachSlot key={1} num={this.state.num1}/>
          <EachSlot key={2} num={this.state.num2}/>
          <EachSlot key={3} num={this.state.num3}/>
        </div>
        <p>message</p>
        </div>
      </div>
    );
  }
}

export default App;
