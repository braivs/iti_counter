import React, {ChangeEvent, useEffect, useState} from 'react';
import sU from './Universe.module.css'
import {CustomButton} from './CustomButton';
import sS from './Settings.module.css'

export function Settings() {
  let [maxValue, setMaxValue] = useState<number>(0)
  let [startValue, setStartValue] = useState<number>(0)

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

  // write to localstorage on change
  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])
  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
  }, [startValue])


  // handlers for settings
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setMaxValue(JSON.parse(e.currentTarget.value))
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setStartValue(JSON.parse(e.currentTarget.value))
  }

  return (
    <div className={sU.mainContainer}>
      <div className={sU.valueContainer}>
        <div className={sS.sText}>
          <span>max value:</span>
          <input type="number"
                 value={maxValue}
                 onChange={onChangeMaxHandler}
          />
        </div>
        <div className={sS.sText}>
          <span>start value:</span>
          <input type="number"
                 value={startValue}
                 onChange={onChangeStartHandler}
          />
        </div>

      </div>
      {/*вариант с двумя компонентами*/}
      {/*<div className={s.buttonContainer}>
        <ButtonInc upCounter={upCounter} currentValue={value}/>
        <ButtonReset resetCounter={resetCounter} currentValue={value}/>
      </div>*/}
      {/*вариант с одним компонентом*/}
      <div className={sU.buttonContainer}>
        <CustomButton title='Set'
                      upCounter={() => {}}
                      resetCounter={() => {}}
                      currentValue={1} />
      </div>
    </div>
  )
}