import {useDispatch} from "react-redux";
import {counterReducer, incValueAC, InitialStateType} from "./counter-reducer";
import {AppStateType} from "./store";
import {saveState} from "../utils/localstorage-utils";

// let InitialStateType: InitialStateType;
// let startState: InitialStateType

beforeEach(() => {
  let state: AppStateType = {'counter': {'value': 1}}
  // startState = {value: 1}
})

test('get value from local storage', () => {

  const serializedState = JSON.stringify(state)

  if (serializedState !== null) {
    console.log(JSON.parse(serializedState))
  }

})

test('inc counter', () => {
  const startState: InitialStateType = {value: 1};
  const endState = counterReducer(startState, incValueAC())
  expect(endState.value).toEqual(2)
})