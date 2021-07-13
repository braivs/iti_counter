import React from 'react';
import {CounterDisplay} from '../CounterDisplay/CounterDisplay';
import {CounterSettings} from '../CounterSettings/CounterSettings';
import s from './Counter2.module.scss'

type Counter2PropsType = {
  startValue: number
  maxValue: number
  value: number
  isMessage: boolean
  isError: boolean
  startValueHandler: (startValue: number) => void
  maxValueHandler: (maxValue: number) => void
  setValuesByButton: () => void
}

export function Counter2(props: Counter2PropsType) {
  return (
    <div className={s.container}>
      <CounterSettings startValue={props.startValue}
                       startValueHandler={props.startValueHandler}
                       maxValue={props.maxValue}
                       maxValueHandler={props.maxValueHandler}
                       value={props.value}
                       setValuesByButton={props.setValuesByButton}
                       isError={props.isError}
      />
      <CounterDisplay type={'Counter2'}
                      startValue={props.startValue}
                      maxValue={props.maxValue}
                      value={props.value}
                      isMessage={props.isMessage}
                      isError={props.isError}
      />
    </div>
  )
}