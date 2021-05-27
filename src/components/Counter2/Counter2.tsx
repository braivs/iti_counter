import React from 'react';
import {Main} from '../Main/Main';
import {Settings} from '../Settings/Settings';
import s from './Counter2.module.scss'

type Counter2PropsType = {
  startValue: number
  maxValue: number
  value: number
  setValue: (value: number) => void
  isMessage: boolean
  isError: boolean
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
      <Main startValue={props.startValue}
            maxValue={props.maxValue}
            value={props.value}
            setValue={props.setValue}
            isMessage={props.isMessage}
            isError={props.isError}
      />
    </div>
  )
}