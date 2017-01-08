import * as types from '../actions/types'

const INITIAL_STATE = {
  address: '',
}

export const handleAddressChange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADDRESS_CHANGE:
      return {...state, address: action.text}
    default:
      return state
  }
}
