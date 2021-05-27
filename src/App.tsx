import React, {useEffect, useState} from 'react';
import './App.scss';
import {Main2} from './components/Counter2/Main2';
import {Settings} from './components/Settings/Settings';
import {Navbar} from './components/Navbar/Navbar';
import {Redirect, Route} from 'react-router-dom';
import {Counter2} from './components/Counter2/Counter2';
import {Counter21} from './components/Counter21/Counter21';

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

  // изменение стартового значения в settings
  const startValueHandler = (value: number) => {
    setIsMessage(true) // показ месседжа вместо value
    setStartValue(value)
  }

  // изменение максимального значения в settings
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

  // блокировка кнопок Inc и Reset по условиям
  let [isIncButtonDisabled, setIsIncButtonDisabled] = useState(false)
  let [isResetButtonDisabled, setIsResetButtonDisabled] = useState(false)
  useEffect(() => {
      if (isMessage) {
        setIsIncButtonDisabled(true)
        setIsResetButtonDisabled(true)
      } else if (value === startValue) {
        setIsIncButtonDisabled(false)
        setIsResetButtonDisabled(true)
      } else if (maxValue === value) {
        setIsIncButtonDisabled(true)
        setIsResetButtonDisabled(false)
      } else {
        setIsIncButtonDisabled(false)
        setIsResetButtonDisabled(false)
      }
    },
    [isMessage, value, startValue, maxValue])

  return (
    <div className="App">
      <Navbar/>
      <Route path={'/'} exact render={() => <Redirect to="/counter2"/>}/>
      <Route path="/counter2" render={() => <Counter2
        startValue={startValue}
        maxValue={maxValue}
        value={value}
        setValue={setValue}
        isMessage={isMessage}
        isError={isError}
        incButtonHandler={incButtonHandler}
        resetButtonHandler={resetButtonHandler}
        isIncButtonDisabled={isIncButtonDisabled}
        isResetButtonDisabled={isResetButtonDisabled}
        startValueHandler={startValueHandler}
        maxValueHandler={maxValueHandler}
        setValuesByButton={setValuesHandler}
      />}
      />
      <Route path="/counter2.1" render={() => <Counter21
        startValue={startValue}
        maxValue={maxValue}
        value={value}
        isError={isError}
        incButtonHandler={incButtonHandler}
        resetButtonHandler={resetButtonHandler}
        isIncButtonDisabled={isIncButtonDisabled}
        isResetButtonDisabled={isResetButtonDisabled}
        startValueHandler={startValueHandler}
        maxValueHandler={maxValueHandler}
        setValuesByButton={setValuesHandler}
      />}
      />
    </div>
  );
}

export default App;
