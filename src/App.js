import React from 'react';

import EachMachine from './components/each-machine/each-machine.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <EachMachine key={1} title='1st Try' />
      <EachMachine key={2} title='2nd Try' />
      <EachMachine key={3} title='Last Try' />
    </div>
  );
}

export default App;
