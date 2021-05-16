import React, {useEffect, useState} from 'react';
import s from './Universe.module.css'
import {CustomButton} from './CustomButton';

type CounterType = {
  startValue: number
  maxValue: number
  value: number | string
  setValue: (value: number | string) => void
}

export function Counter(props: CounterType) {
  let startValue = props.startValue
  let maxValue = props.maxValue

  let value = props.value
  const setValue = props.setValue

  let [disabledInc, setDisabledInc] = useState<boolean>(false)
  let [disabledReset, setDisabledReset] = useState<boolean>(false)

  // блокировка кнопок по условиям
  useEffect(() => {
      value === maxValue ? setDisabledInc(true) : setDisabledInc(false)
      value === startValue ? setDisabledReset(true) : setDisabledReset(false)
      if (typeof value == 'string') {
        setDisabledInc(true)
        setDisabledReset(true)
      }
    },
    [value, maxValue, startValue])

  function upCounter() {
    let NewValue
    if (typeof value == 'number') {
      NewValue = ++value;
      setValue(NewValue)
    } else {
      console.log('disable inc')
      console.log('disable reset')
    }
  }

  function resetCounter() {
    setValue(startValue);
  }

  //красный цвет счётчика, когда максимум
  const valueClass = (value === maxValue || value === 'Incorrect Value!') ? s.maxValueColor : ''

  return (
    <div className={s.mainContainer}>
      <div className={s.valueContainer}>
        <span className={`${s.value} ${valueClass}`}>{value}</span>
      </div>
      <div className={s.buttonContainer}>
        <CustomButton
          title="inc"
          disabled={disabledInc}
          onClick={upCounter}
        />
        <CustomButton
          title="reset"
          disabled={disabledReset}
          onClick={resetCounter}
        />
      </div>
    </div>
  )
}