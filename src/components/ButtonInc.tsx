import React from 'react';

type ButtonIncType = {
  upCounter: () => void;
  currentValue: number;
}

export function ButtonInc (props: ButtonIncType) {
  return (
    <div className='ButtonInc'>
      <button
        onClick={props.upCounter}
        disabled={props.currentValue === 5}
      >inc</button>
    </div>
  )
}