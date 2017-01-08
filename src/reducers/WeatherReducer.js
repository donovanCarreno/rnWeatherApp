import * as types from '../actions/types'

const INITIAL_STATE = {
  daily: {},
  landing: true,
  summary: '',
  temp: null,
  error: '',
  loading: false
}

export const handleWeatherData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER:
      return {...INITIAL_STATE, loading: true}

    case types.FETCH_WEATHER_FAIL:
      return {...state, error: action.err, loading: false}

    case types.FETCH_WEATHER_SUCCESS:
      let daily = action.data.daily
      let summary = action.data.hourly.summary
      let temp = Math.round(action.data.currently.temperature).toFixed(0)

      return {daily, landing: false, summary, temp, loading: false}

    default:
      return state
  }
}
