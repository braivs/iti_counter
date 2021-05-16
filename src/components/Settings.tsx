import React, {ChangeEvent, useEffect, useState} from 'react';
import sU from './Universe.module.css'
import {CustomButton} from './CustomButton';
import sS from './Settings.module.css'

type SettingsType = {
  startValue: number
  setStartValue: (startValue: number) => void
  maxValue: number;
  setMaxValue: (maxValue: number) => void
  setValue: (value: number | string) => void
}

export function Settings(props: SettingsType) {
  let startValue = props.startValue
  const setStartValue = props.setStartValue
  let maxValue = props.maxValue
  const setMaxValue = props.setMaxValue

  //временные стартовые и максимальные значение, которые потом при нажатии set перейдут в общие (хранящиеся в app)
  let startValueStr = localStorage.getItem('startValue')
  let [startValueTmp, setStartValueTmp] = useState<number>(startValueStr ? JSON.parse(startValueStr) : 0)
  let maxValueStr = localStorage.getItem('maxValue')
  let [maxValueTmp, setMaxValueTmp] = useState<number>(maxValueStr ? JSON.parse(maxValueStr) : 5)

  // Анализ максимального и стартового значения на ошибки
  // 0 - no errors
  // 1 - error in start value
  // 2 - error in max value
  // 3 - error in both value
  // ! все запаздывают. Получается надо сам анализ делать тоже в useEffect
  /*function goodAndBadValues(maxValueIn: number, startValueIn: number): number {
    console.log('maxValueTmp='+maxValueIn)
    console.log('startValueTmp='+startValueIn)
    // debugger
    if (startValueIn < 0) {
      // console.log(1)
      setStatusMessage('Incorrect Value!')
      console.log(statusMessage)
      console.log(1)
      return 1
    }
    else if (maxValueIn === 0) {
      // console.log(2)
      setStatusMessage('Incorrect Value!')
      console.log(statusMessage)
      console.log(2)
      return 2

    }
    else if (maxValueIn < startValueIn) {
      // console.log(3)
      setStatusMessage('Incorrect Value!')
      console.log(statusMessage)
      console.log(3)
      return 3
    }
    else if (maxValueIn === startValueIn) {
      // console.log(3)
      setStatusMessage('Incorrect Value!')
      console.log(statusMessage)
      console.log('3_2')
      return 3
    }
    else {
      setStatusMessage('enter values and press set')
      console.log(statusMessage)
      console.log(0)
      return 0
    }
  }*/

  let [messageErrorStatus, setMessageErrorStatus] = useState<number>(0)
  let [statusMessage, setStatusMessage] = useState<string>('')

  useEffect(() => {
    console.log('maxValueTmp='+maxValueTmp)
    console.log('startValueTmp='+startValueTmp)
    if (startValueTmp < 0 || maxValueTmp === 0 || startValueTmp >= maxValueTmp ) {
      setStatusMessage('Incorrect Value!')
      console.log(statusMessage)
    } else {
      setStatusMessage('enter values and press set')
      console.log(statusMessage)
    }
  },[startValueTmp, maxValueTmp, statusMessage])

  function goodAndBadValueMessage() {
    if (messageErrorStatus === 0) return 'enter values and press set'
    else return 'Incorrect Value!'
  }

  // handlers for settings + установка временно сообщения вместо value
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    // props.setValue('enter values and press set')
    // goodAndBadValues(maxValueTmp, startValueTmp)
    setMaxValueTmp(JSON.parse(e.currentTarget.value))
    props.setValue(statusMessage)
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setStartValueTmp(JSON.parse(e.currentTarget.value))
    props.setValue(statusMessage)
  }

  // write to localStorage on set click & app states
  const setHandler = () => {
    props.setStartValue(startValueTmp)
    props.setValue(startValueTmp)
    localStorage.setItem('startValue', JSON.stringify(startValueTmp))
    props.setMaxValue(maxValueTmp)
    localStorage.setItem('maxValue', JSON.stringify(maxValueTmp))
  }

  return (
    <div className={sU.mainContainer}>
      <div className={sU.valueContainer}>
        <div className={sS.sText}>
          <span>max value:</span>
          <input type="number"
                 value={maxValueTmp}
                 onChange={onChangeMaxHandler}
          />
        </div>
        <div className={sS.sText}>
          <span>start value:</span>
          <input type="number"
                 value={startValueTmp}
                 onChange={onChangeStartHandler}
          />
        </div>

      </div>
      <div className={sU.buttonContainer}>
        <CustomButton title='Set'
                      disabled={false}
                      onClick={setHandler} />
      </div>
    </div>
  )
}