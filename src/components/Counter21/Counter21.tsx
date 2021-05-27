import React from 'react';
import {Main21} from './Main21';
import {Redirect, Route} from 'react-router-dom';
import {Settings} from '../Settings/Settings';
import {useHistory} from 'react-router-dom';

type Counter21PropsType = {
  startValue: number
  maxValue: number
  value: number
  isError: boolean
  incButtonHandler: () => void
  resetButtonHandler: () => void
  isIncButtonDisabled: boolean
  isResetButtonDisabled: boolean
  startValueHandler: (startValue: number) => void
  maxValueHandler: (maxValue: number) => void
  setValuesByButton: () => void
}

export function Counter21(props: Counter21PropsType) {

  const history = useHistory()
  const setValuesByButtonHandler = () => {
    props.setValuesByButton()
    history.push('/counter2.1')
  }

  return (
    <div>
      <Route exact path="/counter2.1" render={() =>
        <Main21 value={props.value}
                incButtonHandler={props.incButtonHandler}
                resetButtonHandler={props.resetButtonHandler}
                isIncButtonDisabled={props.isIncButtonDisabled}
                isResetButtonDisabled={props.isResetButtonDisabled}
        />}/>
      <Route exact path="/counter2.1/settings" render={() =>
        <Settings startValue={props.startValue}
                  startValueHandler={props.startValueHandler}
                  maxValue={props.maxValue}
                  maxValueHandler={props.maxValueHandler}
                  value={props.value}
                  setValuesByButton={setValuesByButtonHandler}
                  isError={props.isError}
        />}/>

    </div>
  )
}