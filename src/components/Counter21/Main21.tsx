import React from 'react';
import sU from '../Universe.module.css'
import s from '../Universe.module.css';
import {CustomButton} from '../CustomButton';
import {NavLink} from 'react-router-dom';

type Main21PropsType = {
  value: number
  incButtonHandler: () => void
  resetButtonHandler: () => void
  isIncButtonDisabled: boolean
  isResetButtonDisabled: boolean
}

export function Main21(props: Main21PropsType) {

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
      <NavLink to="/counter2.1/settings">
        <CustomButton
          title="set"
          disabled={false}
          onClick={() => {}}/>
      </NavLink>

    </div>
  </div>
}