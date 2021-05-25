import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';
import {SettingsWithCounter} from './components/SettingsWithCounter';

function App() {
  //вынес стейт из компонент и передаю его в пропсы
  let startValueStr = localStorage.getItem('startValue')
  let maxValueStr = localStorage.getItem('maxValue')

  let [startValue, setStartValue] = useState<number>(startValueStr ? JSON.parse(startValueStr) : 0)
  let [maxValue, setMaxValue] = useState<number>(maxValueStr ? JSON.parse(maxValueStr) : 5)
  let [value, setValue] = useState<number | string>(startValue)
  let [isMessage, setIsMessage] = useState(false)



  const setValues = () => {
    localStorage.setItem('startValue', startValue.toString())
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    setValue(startValue)
  }

  const startValuesHandler = (value: number) => {
    setIsMessage(true)
    if (value < 0) {
      alert('error')
    } else {
      setStartValue(value)
    }

  }

  return (
    <div className="App">
      <Settings startValue={startValue}
                startValuesHandler={startValuesHandler}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                value={value}
                setValue={setValue}
                setValues={setValues}
      />
      <Counter startValue={startValue}
               maxValue={maxValue}
               value={value}
               setValue={setValue}
               isMessage={isMessage}
      />
      {/*<SettingsWithCounter />*/}
    </div>
  );
}

export default App;
