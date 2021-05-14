import React, {useState} from 'react';
import s from './Universe.module.css'
import {Button} from './Button';

export function Counter () {
  let [value, setValue] = useState<number>(0)

  function upCounter() {
    let NewValue = ++value;
    setValue(NewValue)
  }

  function resetCounter() {
    setValue(0);
  }

  const valueClass = (value === 5) ? s.maxValueColor : ''

  return (
    <div className={s.mainContainer}>
      <div className={s.valueContainer}>
        <span className={`${s.value} ${valueClass}`}>{value}</span>
      </div>
      <div className={s.buttonContainer}>
        <Button
          title = 'inc'
          upCounter={upCounter}
          resetCounter={resetCounter}
          currentValue={value}
        />
        <Button
          title = 'reset'
          upCounter={upCounter}
          resetCounter={resetCounter}
          currentValue={value}
        />
      </div>
    </div>
  )
}