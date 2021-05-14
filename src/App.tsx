import React from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

function App() {
  return (
    <div className="App">
      <Settings />
      <Counter />
    </div>
  );
}

export default App;
