import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import {Settings} from '../Settings/Settings';
import {Main} from '../Main/Main';

type Counter21PropsType = {
  startValue: number
  maxValue: number
  value: number
  setValue: (value: number) => void
  isMessage: boolean
  isError: boolean
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
        <Main type={'Counter21'}
              startValue={props.startValue}
              maxValue={props.maxValue}
              value={props.value}
              setValue={props.setValue}
              isMessage={props.isMessage}
              isError={props.isError}
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