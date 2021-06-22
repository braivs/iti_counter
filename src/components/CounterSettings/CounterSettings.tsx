import React, {ChangeEvent} from 'react';
import {CustomButton} from '../CustomButton/CustomButton';
import './../../App.scss'
import s from './CounterSettings.module.css'

type CounterSettingsPropsType = {
  startValue: number
  startValueHandler: (startValue: number) => void
  maxValue: number
  maxValueHandler: (maxValue: number) => void
  value: number
  setValuesByButton: () => void
  isError: boolean
}

export function CounterSettings(props: CounterSettingsPropsType) {
  // handlers for settings
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    props.maxValueHandler(e.currentTarget.valueAsNumber)
  }
  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    props.startValueHandler(e.currentTarget.valueAsNumber)
  }

  //формирование красной подсветки input в случае ошибок
  let errorClsSV = (props.startValue < 0) ? s.error : '';
  let errorClsBoth = (props.startValue >= props.maxValue) ? s.error : '';

  return (
    <div className='mainContainer'>
      <div className='valueContainer'>
        <div className={s.sText}>
          <span>max value:</span>
          <input className={errorClsBoth}
                 type="number"
                 value={props.maxValue}
                 onChange={onChangeMaxHandler}
          />
        </div>
        <div className={s.sText}>
          <span>start value:</span>
          <input className={`${errorClsSV} ${errorClsBoth}`}
                 type="number"
                 value={props.startValue}
                 onChange={onChangeStartHandler}
          />
        </div>

      </div>
      <div className='buttonContainer'>
        <CustomButton title='Set'
                      disabled={props.isError}
                      onClick={props.setValuesByButton} />
      </div>
    </div>
  )
}