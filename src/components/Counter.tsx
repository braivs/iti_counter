import React, {useState} from 'react';
import s from './Counter.module.css'
import {ButtonUniversal} from './ButtonUniversal';

export function Counter () {
  let [value, setValue] = useState<number>(0)

  function upCounter() {
    let NewValue = ++value;
    setValue(NewValue)
  }

  function resetCounter() {
    setValue(0);
  }

  const valueClass = (value === 5) ? s.valueColor : ''

  return (
    <div className={s.mainContainer}>
      <div className={s.valueContainer}>
        <span className={valueClass}>{value}</span>
      </div>
      {/*вариант с двумя компонентами*/}
      {/*<div className={s.buttonContainer}>
        <ButtonInc upCounter={upCounter} currentValue={value}/>
        <ButtonReset resetCounter={resetCounter} currentValue={value}/>
      </div>*/}
      {/*вариант с одним компонентом*/}
      <div className={s.buttonContainer}>
        <ButtonUniversal
          title = 'inc'
          upCounter={upCounter}
          resetCounter={resetCounter}
          currentValue={value}
        />
        <ButtonUniversal
          title = 'reset'
          upCounter={upCounter}
          resetCounter={resetCounter}
          currentValue={value}
        />
      </div>
    </div>
  )
}