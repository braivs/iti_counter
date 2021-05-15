import React, {useState} from 'react';
import s from './Universe.module.css'
import {CustomButton} from './CustomButton';

export function Counter () {
  let [value, setValue] = useState<number>(0)
  let [disabledInc, setDisabledInc] = useState<boolean>(false)
  let [disabledReset, setDisabledReset] = useState<boolean>(false)

  function upCounter() {
    let NewValue = ++value;
    setValue(NewValue)
  }
  function resetCounter() {
    setValue(0);
  }

  const valueClass = (value === 5) ? s.maxValueColor : ''

  let disableValue;
  if (value === 5) disabledInc = true
  if (value === 0) disabledReset = true


  return (
    <div className={s.mainContainer}>
      <div className={s.valueContainer}>
        <span className={`${s.value} ${valueClass}`}>{value}</span>
      </div>
      <div className={s.buttonContainer}>
        <CustomButton
          title = 'inc'
          disabled={disabledInc}
          onClick = {upCounter}
        />
        <CustomButton
          title = 'reset'
          disabled={disabledReset}
          onClick={resetCounter}
        />
      </div>
    </div>
  )
}