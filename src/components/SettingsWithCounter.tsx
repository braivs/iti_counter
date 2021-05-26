import React from 'react';
import sU from './Universe.module.css'
import s from './Universe.module.css';
import {CustomButton} from './CustomButton';

type SettingsWithCounterPropsType = {
  value: number
  incButtonHandler: () => void
  resetButtonHandler: () => void
  isIncButtonDisabled: boolean
  isResetButtonDisabled: boolean
}

export function SettingsWithCounter(props: SettingsWithCounterPropsType) {

  return <div className={sU.mainContainer}>
    <div className={s.valueContainer}>
        <span>{props.value}</span>

    </div>
    <div className={s.buttonContainer}>
      <CustomButton
        title="inc"
        disabled={props.isIncButtonDisabled}
        onClick={props.incButtonHandler}
      />
      <CustomButton
        title="reset"
        disabled={props.isResetButtonDisabled}
        onClick={props.resetButtonHandler}
      />
      <CustomButton
        title="set"
        disabled={false}
        onClick={()=>{alert(3)}}
      />
    </div>
  </div>
}