import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Settings} from './components/Settings';
import {SettingsWithCounter} from './components/SettingsWithCounter';

function App() {
  // стартовое и максимальные значения
  let [startValue, setStartValue] = useState(0)
  let [maxValue, setMaxValue] = useState(5)

  // при загрузке приложения стартовое, максимальное и текущее значения получаются из localstorage
  useEffect(() => {
    let localStorageStartValueStr = localStorage.getItem('startValue')
    let localStorageMaxValueStr = localStorage.getItem('maxValue')
    if (localStorageStartValueStr) {
      setStartValue(JSON.parse(localStorageStartValueStr))
      setValue(JSON.parse(localStorageStartValueStr))
    }
    if (localStorageMaxValueStr) {
      setMaxValue(JSON.parse(localStorageMaxValueStr))
    }
  }, [])

  let [value, setValue] = useState<number>(startValue) // выводимое значение счётчика
  let [isMessage, setIsMessage] = useState(false) // показывать или нет сообщения вместо value
  let [isError, setIsError] = useState(false) // есть ли ошибка

  // обработчик для кнопки set в settings
  const setValuesHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    setIsMessage(false)
    setValue(startValue)
  }

  // формирование ошибки
  useEffect(() => {
    let error = (maxValue <= startValue || startValue < 0)
    setIsError(error)
  }, [startValue, maxValue])

  // обработчик для изменения стартового значения в settings
  const startValueHandler = (value: number) => {
    setIsMessage(true) // показ месседжа вместо value
    setStartValue(value)
  }

  // обработчик для изменения максимального значения в settings
  const maxValueHandler = (value: number) => {
    setIsMessage(true) // показ месседжа вместо value
    setMaxValue(value)
  }

  //увеличить счётчик на один вверх
  function incButtonHandler() {
    let NewValue
    NewValue = value;
    NewValue++;
    setValue(NewValue)

  }

  //сбросить счётчик
  function resetButtonHandler() {
    setValue(startValue);
  }

  return (
    <div className="App">
      <Settings startValue={startValue}
                startValueHandler={startValueHandler}
                maxValue={maxValue}
                maxValueHandler={maxValueHandler}
                value={value}
                setValuesByButton={setValuesHandler}
                isError={isError}
      />
      <Counter startValue={startValue}
               maxValue={maxValue}
               value={value}
               setValue={setValue}
               isMessage={isMessage}
               isError={isError}
               incButtonHandler={incButtonHandler}
               resetButtonHandler={resetButtonHandler}
      />
      <SettingsWithCounter value={value}
                           incButtonHandler={incButtonHandler}
                           resetButtonHandler={resetButtonHandler}
      />
    </div>
  );
}

export default App;
