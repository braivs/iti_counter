import React from 'react';
import s from './CustomButton.module.scss'

type ButtonPropsType = {
  title: string
  disabled: boolean
  onClick: () => void
}

export function CustomButton(props: ButtonPropsType) {

  return (
    <div>
      <button
        className={s.button}
        onClick={props.onClick}
        disabled={props.disabled}
      >{props.title}</button>
    </div>
  )
}