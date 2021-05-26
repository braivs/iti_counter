import React, {useEffect, useState} from 'react';
import s from './Universe.module.css'
import {CustomButton} from './CustomButton';

type CounterType = {
  startValue: number
  maxValue: number
  value: number
  setValue: (value: number) => void
  isMessage: boolean
  isError: boolean
}

export function Counter(props: CounterType) {

  let [disabledInc, setDisabledInc] = useState<boolean>(false)
  let [disabledReset, setDisabledReset] = useState<boolean>(false)

  // блокировка кнопок по условиям
  useEffect(() => {
      if (props.isMessage) {
        setDisabledInc(true)
        setDisabledReset(true)
      }
      else {
        setDisabledInc(false)
        setDisabledReset(false)
      }
    },
    [props.isMessage])

  function upCounter() {
    let NewValue
    NewValue = props.value;
    NewValue++;
    props.setValue(NewValue)

  }

  function resetCounter() {
    props.setValue(props.startValue);
  }

  if (props.isMessage) {}

  //красный цвет счётчика, когда максимум или ошибка
  let valueClass = (props.value === props.maxValue || props.isError) ? s.maxValueColor : ''
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
          disabled={disabledInc}
          onClick={upCounter}
        />
        <CustomButton
          title="reset"
          disabled={disabledReset}
          onClick={resetCounter}
        />
      </div>
    </div>
  )
}