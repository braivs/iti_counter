import React, {ChangeEvent, useEffect, useState} from 'react';
import sU from './Universe.module.css'
import {CustomButton} from './CustomButton';
import sS from './Settings.module.css'

type SettingsType = {
  startValue: number
  setStartValue: (startValue: number) => void
  maxValue: number
  setMaxValue: (maxValue: number) => void
  value: number | string
  setValue: (value: number | string) => void
}

export function Settings(props: SettingsType) {
  let startValue = props.startValue
  const setStartValue = props.setStartValue
  let maxValue = props.maxValue
  const setMaxValue = props.setMaxValue
  const value = props.value
  const setValue = props.setValue

  //временные стартовые и максимальные значение, которые потом при нажатии set перейдут в общие (хранящиеся в app)
  let startValueStr = localStorage.getItem('startValue')
  let [startValueTmp, setStartValueTmp] = useState<number>(startValueStr ? JSON.parse(startValueStr) : 0)
  let maxValueStr = localStorage.getItem('maxValue')
  let [maxValueTmp, setMaxValueTmp] = useState<number>(maxValueStr ? JSON.parse(maxValueStr) : 5)

  let [messageErrorStatus, setMessageErrorStatus] = useState<number>(0)
  let statusMessage = ''
  let [buttonSetStatus,setButtonSetStatus ] = useState<boolean>(false)

  // анализ на ошибки + установка сообщения вместо value
  useEffect(() => {
    if (startValueTmp < 0 || maxValueTmp === 0 || startValueTmp >= maxValueTmp ) {
      statusMessage = 'Incorrect Value!'
      setButtonSetStatus(true)
    } else {
      statusMessage = 'enter values and press set'
      setButtonSetStatus(false)
    }
    setValue(statusMessage)
  },[startValueTmp, maxValueTmp, statusMessage])

  // таким образом исправляю ошибку затирания стартового значения от наблюдения за startValueTmp и maxValueTmp
  useEffect(() => {
    props.setStartValue(startValueTmp)
    props.setValue(startValueTmp)
    props.setMaxValue(maxValueTmp)
  }, [])

  function goodAndBadValueMessage() {
    if (messageErrorStatus === 0) return 'enter values and press set'
    else return 'Incorrect Value!'
  }

  // handlers for settings
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setMaxValueTmp(JSON.parse(e.currentTarget.value))
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setStartValueTmp(JSON.parse(e.currentTarget.value))
  }

  // write to localStorage on set click & app states
  const setHandler = () => {
    props.setStartValue(startValueTmp)
    props.setValue(startValueTmp)
    localStorage.setItem('startValue', JSON.stringify(startValueTmp))
    props.setMaxValue(maxValueTmp)
    localStorage.setItem('maxValue', JSON.stringify(maxValueTmp))
    setButtonSetStatus(true)
  }

  //логика для формирования красной подсветки input: in progress...
  let errorClsSV = '';
  let errorClsBoth = '';
  // мне пришлось писать это не в useEffect. Не знаю почему в нём не работало, но без почему то работает.
  if (startValueTmp < 0) errorClsSV = sS.error; else errorClsSV = ''
  if (startValueTmp >= maxValueTmp) errorClsBoth = sS.error


  return (
    <div className={sU.mainContainer}>
      <div className={sU.valueContainer}>
        <div className={sS.sText}>
          <span>max value:</span>
          <input className={errorClsBoth}
                 type="number"
                 value={maxValueTmp}
                 onChange={onChangeMaxHandler}
          />
        </div>
        <div className={sS.sText}>
          <span>start value:</span>
          <input className={`${errorClsSV} ${errorClsBoth}`}
                 type="number"
                 value={startValueTmp}
                 onChange={onChangeStartHandler}
          />
        </div>

      </div>
      <div className={sU.buttonContainer}>
        <CustomButton title='Set'
                      disabled={buttonSetStatus}
                      onClick={setHandler} />
      </div>
    </div>
  )
}