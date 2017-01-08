import * as types from './types'

export const addressChange = text => {
  return {
    type: types.ADDRESS_CHANGE,
    text
  }
}

export const fetchWeather = address => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_WEATHER})

    fetch(`https://donovan-weather-app.herokuapp.com/forecast/${address}`)
    .then(res => {
      res.json()
      .then(data => fetchWeatherSuccess(dispatch, data))
    })
    .catch(err => fetchWeatherFail(dispatch, err))
  }
}

const fetchWeatherFail = (dispatch, err) => {
  console.log('error', err)
  dispatch({
    type: types.FETCH_WEATHER_FAIL,
    err
  })
}

const fetchWeatherSuccess = (dispatch, data) => {
  dispatch({
    type: types.FETCH_WEATHER_SUCCESS,
    data
  })
}
