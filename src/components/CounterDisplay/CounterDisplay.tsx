import React, {useEffect, useState} from 'react';
import s from './CounterDisplay.module.scss'
import '../../App.scss'
import {CustomButton} from '../CustomButton/CustomButton';
import {useHistory} from 'react-router-dom';

type CounterDisplayPropsType = {
  type: 'Counter2' | 'Counter21'
  startValue: number
  maxValue: number
  value: number
  setValue: (value: number) => void
  isMessage: boolean
  isError: boolean
}

export function CounterDisplay(props: CounterDisplayPropsType) {

  let [valueClass, setValueClass] = useState('') // для разных цветов значения
  let [isIncButtonDisabled, setIsIncButtonDisabled] = useState(false) //блокировка inc кнопки
  let [isResetButtonDisabled, setIsResetButtonDisabled] = useState(false) //блокировка reset кнопки
  const history = useHistory() //для изменение адреса

  // Формирование разных цветов счётчика по условиям
  useEffect(() => {
    if (props.isError || (props.maxValue === props.value && !props.isMessage)) {
      setValueClass(s.redValueColor)
    } else {
      setValueClass('')
    }
  }, [props.isMessage, props.isError, props.value, props.maxValue, setValueClass])

  // блокировка кнопок Inc и Reset по условиям
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

  // разные сообщения в зависимости от наличия ошибки
  let messageText = (props.isError) ? 'Incorrect value!' : 'enter values and press set'

  //увеличить счётчик на один вверх
  const incButtonHandler = () => {
    props.setValue(props.value + 1)
  }

  //сбросить счётчик
  const resetButtonHandler = () => {
    props.setValue(props.startValue);
  }

  // set для Counter 2.1
  const setButtonHandler = () => {
    history.push('/counter2.1/settings')
  }

  if (props.type === 'Counter2') {
    return (
      <div className='mainContainer'>
        <div className='valueContainer'>
        <span className={`${s.value} ${valueClass}`}>
          {props.isMessage ? messageText : props.value}
        </span>
        </div>
        <div className='buttonContainer'>
          <CustomButton title="inc" disabled={isIncButtonDisabled} onClick={incButtonHandler}/>
          <CustomButton title="reset" disabled={isResetButtonDisabled} onClick={resetButtonHandler}/>
        </div>
      </div>
    )
  } else if (props.type === 'Counter21') {
    return (
      <div className='mainContainer'>
        <div className='valueContainer'>
        <span className={`${s.value} ${valueClass}`}>
          {props.isMessage ? messageText : props.value}
        </span>
        </div>
        <div className='buttonContainer'>
          <CustomButton title="inc" disabled={isIncButtonDisabled} onClick={incButtonHandler}/>
          <CustomButton title="reset" disabled={isResetButtonDisabled} onClick={resetButtonHandler}/>
          <CustomButton title="set" disabled={false} onClick={setButtonHandler}/>
        </div>
      </div>
    )
  } else {
    return <div>no type defined</div>
  }
}