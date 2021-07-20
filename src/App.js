import React from 'react';

import EachMachine from './components/each-machine/each-machine.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <EachMachine key={1} title='1' />
      <EachMachine key={2} />
      <EachMachine key={3} />
    </div>
  );
}

export default App;
