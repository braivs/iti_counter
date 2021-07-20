const initialState = {
  value: 0
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE": {
      return {
        ...state, value: state.value + 1
      }
    }
    case "GET-VALUE-FROM-LOCAL-STORAGE": {
      return {
        ...state, value: action.value
      }
    }
    case "RESET-VALUE": {
      return {
        ...state, value: 0
      }
    }


    default:
      return state
  }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'GET-VALUE-FROM-LOCAL-STORAGE', value} as const)

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>
export type ResetValueAT = ReturnType<typeof resetValueAC>

type ActionType = IncValuesActionType | SetValueFromLocalStorageActionType | ResetValueAT