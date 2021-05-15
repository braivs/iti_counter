import React from 'react';

type ButtonType = {
  title: string
  disabled: boolean
  onClick: () => void
}

export function CustomButton(props: ButtonType) {

  return (
    <div>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
      >{props.title}</button>
    </div>
  )
}