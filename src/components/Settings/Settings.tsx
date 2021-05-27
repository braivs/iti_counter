import React, {ChangeEvent} from 'react';
import sU from '../Universe.module.css'
import {CustomButton} from '../CustomButton';
import sS from './Settings.module.css'

type SettingsPropsType = {
  startValue: number
  startValueHandler: (startValue: number) => void
  maxValue: number
  maxValueHandler: (maxValue: number) => void
  value: number
  setValuesByButton: () => void
  isError: boolean
}

export function Settings(props: SettingsPropsType) {
  // handlers for settings
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    props.maxValueHandler(e.currentTarget.valueAsNumber)
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    props.startValueHandler(e.currentTarget.valueAsNumber)
  }

  //формирование красной подсветки input в случае ошибок
  let errorClsSV = (props.startValue < 0) ? sS.error : '';
  let errorClsBoth = (props.startValue >= props.maxValue) ? sS.error : '';

  return (
    <div className={sU.mainContainer}>
      <div className={sU.valueContainer}>
        <div className={sS.sText}>
          <span>max value:</span>
          <input className={errorClsBoth}
                 type="number"
                 value={props.maxValue}
                 onChange={onChangeMaxHandler}
          />
        </div>
        <div className={sS.sText}>
          <span>start value:</span>
          <input className={`${errorClsSV} ${errorClsBoth}`}
                 type="number"
                 value={props.startValue}
                 onChange={onChangeStartHandler}
          />
        </div>

      </div>
      <div className={sU.buttonContainer}>
        <CustomButton title='Set'
                      disabled={props.isError}
                      onClick={props.setValuesByButton} />
      </div>
    </div>
  )
}