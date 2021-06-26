const initialState = {
  value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE": {
      return {
        ...state, value: state.value + 1
      }
    }
    case "INC-VALUE-FROM-LOCAL-STORAGE": {
      return {
        ...state, value: action.value
      }
    }


    default:
      return state
  }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'INC-VALUE-FROM-LOCAL-STORAGE', value} as const)

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType = IncValuesActionType | SetValueFromLocalStorageActionType