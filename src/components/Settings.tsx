import React, {useState} from 'react';
import sU from './Universe.module.css'
import {Button} from './Button';
import sS from './Settings.module.css'

export function Settings() {

  return (
    <div className={sU.mainContainer}>
      <div className={sU.valueContainer}>
        <div className={sS.sText}>
          <span>max value:</span>
          <input type="number"/>
        </div>
        <div className={sS.sText}>
          <span>start value:</span>
          <input type="number"/>
        </div>

      </div>
      {/*вариант с двумя компонентами*/}
      {/*<div className={s.buttonContainer}>
        <ButtonInc upCounter={upCounter} currentValue={value}/>
        <ButtonReset resetCounter={resetCounter} currentValue={value}/>
      </div>*/}
      {/*вариант с одним компонентом*/}
      <div className={sU.buttonContainer}>
        <Button title='Set'
                upCounter={() => {}}
                resetCounter={() => {}}
                currentValue={1} />
      </div>
    </div>
  )
}