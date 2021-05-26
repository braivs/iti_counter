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

  // блокировка кнопок по условиям
  let [disabledInc, setDisabledInc] = useState(false)
  let [disabledReset, setDisabledReset] = useState(false)
  useEffect(() => {
      if (props.isMessage) {
        setDisabledInc(true)
        setDisabledReset(true)
      } else if (props.value === props.startValue) {
        setDisabledInc(false)
        setDisabledReset(true)
      } else if (props.maxValue === props.value) {
        setDisabledInc(true)
        setDisabledReset(false)
      } else {
        setDisabledInc(false)
        setDisabledReset(false)
      }
    },
    [props.isMessage, props.value, props.startValue, props.maxValue])

  function upCounter() {
    let NewValue
    NewValue = props.value;
    NewValue++;
    props.setValue(NewValue)

  }

  function resetCounter() {
    props.setValue(props.startValue);
  }

  // Формирование разных цветов счётчика по условиям
  let [valueClass, setValueClass] = useState<string>('')
  useEffect(() => {
    if (props.isError || (props.maxValue === props.value && !props.isMessage)) {
      setValueClass(s.redValueColor)
    } else {
      setValueClass('')
    }
  }, [props.isMessage, props.isError, props.value, props.maxValue, valueClass, setValueClass])


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