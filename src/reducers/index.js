import { combineReducers } from 'redux'
import { handleAddressChange } from './AddressReducer'
import { handleWeatherData } from './WeatherReducer'

export default combineReducers({
  address: handleAddressChange,
  weatherData: handleWeatherData
})
