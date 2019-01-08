import { SET_VALUE } from "../actions/inputgrid"

export const DEFAULT_VALUE = [{
  value : 0
}, {
  value : 0
}, {
  value : 0
}]

export default (state = DEFAULT_VALUE, action) => {
  switch(action.type) {
    case SET_VALUE:
      return [
        ...state.slice(0, action.index),
        { value : action.value },
        ...state.slice(action.index + 1)
      ]
  }
  return state
}
