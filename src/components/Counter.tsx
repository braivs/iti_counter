import React, {useState} from 'react';
import {ButtonInc} from './ButtonInc';
import {ButtonReset} from './ButtonReset';
import s from './Counter.module.css'

export function Counter () {
  let [value, setValue] = useState<number>(0)

  function upCounter() {
    let NewValue = ++value;
    setValue(NewValue)
  }

  function resetCounter() {
    setValue(0);
  }


  return (
    <div className={s.mainContainer}>
      <span className={s.valueColor}>{value}</span>
      <div className={s.buttonContainer}>
        <ButtonInc upCounter={upCounter} currentValue={value}/>
        <ButtonReset resetCounter={resetCounter} currentValue={value}/>
      </div>
    </div>
  )
}