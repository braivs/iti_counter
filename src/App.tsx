import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';

/*
мысли по доработке:
упрощать логику возможно надо. Делать без tmp значений
Сейчас проблема что стартовое значение value сразу месседж
* */

function App() {
  //вынес стейт из компонент и передаю его в пропсы
  let startValueStr = localStorage.getItem('startValue')
  let [startValue, setStartValue] = useState<number>(startValueStr ? JSON.parse(startValueStr) : 0)
  let maxValueStr = localStorage.getItem('maxValue')
  let [maxValue, setMaxValue] = useState<number>(maxValueStr ? JSON.parse(maxValueStr) : 5)

  let [value, setValue] = useState<number | string>(startValue)

  return (
    <div className="App">
      <Settings startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                value={value}
                setValue={setValue}
      />
      <Counter startValue={startValue}
               maxValue={maxValue}
               value={value}
               setValue={setValue}
      />
    </div>
  );
}

export default App;
