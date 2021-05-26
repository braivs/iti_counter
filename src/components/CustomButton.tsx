import React from 'react';

type ButtonPropsType = {
  title: string
  disabled: boolean
  onClick: () => void
}

export function CustomButton(props: ButtonPropsType) {

  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
      >{props.title}</button>
    </div>
  )
}