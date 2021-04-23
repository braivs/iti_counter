import React from 'react';
import {isBoolean} from 'util';

type ButtonButtonUniversalType = {
  title: string
  upCounter: () => void;
  resetCounter: () => void
  currentValue: number;
}

export function ButtonUniversal (props: ButtonButtonUniversalType) {
  let onClickHanlder;
  if (props.title === 'inc') onClickHanlder = props.upCounter;
  if (props.title === 'reset') onClickHanlder = props.resetCounter;

  let disableValue;
  if (props.title === 'inc' && props.currentValue === 5) disableValue = true
  if (props.title === 'reset' && props.currentValue === 0) disableValue = true

  /*let disableValue2 = () => {
    if (props.title === 'inc' && props.currentValue === 5) return true
    if (props.title === 'reset' && props.currentValue === 0) return true
    else return false;
  }*/

  return (
    <div className='ButtonInc'>
      <button
        onClick={onClickHanlder}
        disabled={disableValue}
      >{props.title}</button>
    </div>
  )
}