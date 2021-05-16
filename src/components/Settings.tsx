import React, {ChangeEvent, useEffect, useState} from 'react';
import sU from './Universe.module.css'
import {CustomButton} from './CustomButton';
import sS from './Settings.module.css'

type SettingsType = {
  startValue: number
  setStartValue: (startValue: number) => void
  maxValue: number;
  setMaxValue: (maxValue: number) => void
}

export function Settings(props: SettingsType) {
  let startValue = props.startValue
  const setStartValue = props.setStartValue
  let maxValue = props.maxValue
  const setMaxValue = props.setMaxValue

  //counter settings on start
  useEffect(() => {
    let maxValueAsString = localStorage.getItem('maxValue')
    if (maxValueAsString) {
      let newMaxValue = JSON.parse(maxValueAsString)
      setMaxValue(newMaxValue)
    }
  }, [])
  useEffect(() => {
    let startValueAsString = localStorage.getItem('startValue')
    if (startValueAsString) {
      let newStartValue = JSON.parse(startValueAsString)
      setStartValue(newStartValue)
    }
  }, [])

  // handlers for settings
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setMaxValue(JSON.parse(e.currentTarget.value))
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setStartValue(JSON.parse(e.currentTarget.value))
  }

  // write to localStorage on set click
  const setHandler = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
  }

  let maxError;
  let startError;
  maxError = maxValue < 1 ? sS.error : ''
  startError = startValue < 0 ? sS.error : ''
  if (maxValue < startValue) {
    maxError = sS.error
    startError = sS.error;
  }

  return (
    <div className={sU.mainContainer}>
      <div className={sU.valueContainer}>
        <div className={sS.sText}>
          <span>max value:</span>
          <input className={maxError}
                 type="number"
                 value={maxValue}
                 onChange={onChangeMaxHandler}
          />
        </div>
        <div className={sS.sText}>
          <span>start value:</span>
          <input className={startError}
                 type="number"
                 value={startValue}
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