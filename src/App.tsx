import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

function App() {
  //вынес стейт из компонент и передаю его в пропсы
  let [startValue, setStartValue] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(0)

  return (
    <div className="App">
      <Settings
        startValue={startValue}
        setStartValue={setStartValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
      <Counter />
    </div>
  );
}

export default App;
