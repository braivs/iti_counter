import React from 'react';

type ButtonResetType = {
  resetCounter: () => void;
  currentValue: number
}

export function ButtonReset (props: ButtonResetType) {
  return (
    <div className='ButtonReset'>
      <button
        onClick={props.resetCounter}
        disabled={props.currentValue === 0}
      >reset</button>
    </div>
  )
}