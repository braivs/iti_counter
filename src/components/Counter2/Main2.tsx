import React, {useEffect, useState} from 'react';
import s from '../Universe.module.css'
import {CustomButton} from '../CustomButton';

type Main2PropsType = {
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
}

export function Main2(props: Main2PropsType) {

  // Формирование разных цветов счётчика по условиям
  let [valueClass, setValueClass] = useState('')
  useEffect(() => {
    if (props.isError || (props.maxValue === props.value && !props.isMessage)) {
      setValueClass(s.redValueColor)
    } else {
      setValueClass('')
    }
  }, [props.isMessage, props.isError, props.value, props.maxValue, setValueClass])

  // разные сообщения в зависимости от наличия ошибки
  let messageText = (props.isError) ? 'Incorrect value!' : 'enter values and press set'

  return (
    <div className={s.mainContainer}>
      <div className={s.valueContainer}>
        <span className={`${s.value} ${valueClass}`}>
          {props.isMessage ? messageText : props.value}
        </span>

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
      </div>
    </div>
  )
}