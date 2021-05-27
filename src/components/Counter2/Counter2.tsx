import React from 'react';
import {Main2} from './Main2';
import {Settings} from '../Settings/Settings';
import s from './Counter2.module.scss'

type Counter2PropsType = {
  startValue: number
  maxValue: number
  value: number
  setValue: (value: number) => void
  isMessage: boolean
  isError: boolean
  incButtonHandler: () => void
  resetButtonHandler: () => void
  isIncButtonDisabled: boolean
  isResetButtonDisabled: boolean
  startValueHandler: (startValue: number) => void
  maxValueHandler: (maxValue: number) => void
  setValuesByButton: () => void
}

export function Counter2(props: Counter2PropsType) {
  return (
    <div className={s.container}>
      <Settings startValue={props.startValue}
                startValueHandler={props.startValueHandler}
                maxValue={props.maxValue}
                maxValueHandler={props.maxValueHandler}
                value={props.value}
                setValuesByButton={props.setValuesByButton}
                isError={props.isError}
      />
      <Main2 startValue={props.startValue}
             maxValue={props.maxValue}
             value={props.value}
             setValue={props.setValue}
             isMessage={props.isMessage}
             isError={props.isError}
             incButtonHandler={props.incButtonHandler}
             resetButtonHandler={props.resetButtonHandler}
             isIncButtonDisabled={props.isIncButtonDisabled}
             isResetButtonDisabled={props.isResetButtonDisabled}
      />
    </div>
  )
}