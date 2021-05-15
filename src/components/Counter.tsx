import React, {useEffect, useState} from 'react';
import s from './Universe.module.css'
import {CustomButton} from './CustomButton';

export function Counter () {
  // получаю стартовое и максимальные значения из localStorage
  // стейты возможно избыточны, надо вынести в app, но пока так
  let startValueStr = localStorage.getItem('startValue')
  let [startValue, setStartValue] = useState<number>(startValueStr ? JSON.parse(startValueStr) : 0)
  let maxValueStr = localStorage.getItem('maxValue')
  let [maxValue, setMaxValue] = useState<number>(maxValueStr ? JSON.parse(maxValueStr) : 5)

  let [value, setValue] = useState<number>(startValue)
  let [disabledInc, setDisabledInc] = useState<boolean>(false)
  let [disabledReset, setDisabledReset] = useState<boolean>(false)

  // блокировка кнопок по условиям
  useEffect(() => {
    value === maxValue ? setDisabledInc(true) : setDisabledInc(false)
    value === startValue ? setDisabledReset(true) : setDisabledReset(false)
    },
    [value, maxValue, startValue])

  //перерисовка если изменились стартовое и максимальное значение
  // ! не получается отслеживать изменения localStorage
  /*useEffect(() => {},
    window.localStorage.getItem("count"))*/

  function upCounter() {
    let NewValue = ++value;
    setValue(NewValue)
  }
  function resetCounter() {
    setValue(startValue);
  }

  //красный цвет счётчика, когда максимум
  const valueClass = (value === maxValue) ? s.maxValueColor : ''

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