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
}

export function Main(props: Main2PropsType) {

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

  //увеличить счётчик на один вверх
  function incButtonHandler() {
    let NewValue
    NewValue = props.value;
    NewValue++;
    props.setValue(NewValue)
  }

  //сбросить счётчик
  function resetButtonHandler() {
    props.setValue(props.startValue);
  }

  // блокировка кнопок Inc и Reset по условиям
  let [isIncButtonDisabled, setIsIncButtonDisabled] = useState(false)
  let [isResetButtonDisabled, setIsResetButtonDisabled] = useState(false)
  useEffect(() => {
      if (props.isMessage) {
        setIsIncButtonDisabled(true)
        setIsResetButtonDisabled(true)
      } else if (props.value === props.startValue) {
        setIsIncButtonDisabled(false)
        setIsResetButtonDisabled(true)
      } else if (props.maxValue === props.value) {
        setIsIncButtonDisabled(true)
        setIsResetButtonDisabled(false)
      } else {
        setIsIncButtonDisabled(false)
        setIsResetButtonDisabled(false)
      }
    },
    [props.isMessage, props.value, props.startValue, props.maxValue])

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
          disabled={isIncButtonDisabled}
          onClick={incButtonHandler}
        />
        <CustomButton
          title="reset"
          disabled={isResetButtonDisabled}
          onClick={resetButtonHandler}
        />
      </div>
    </div>
  )
}