import axios from 'axios'

// Enable cors on this page
// https://cors-anywhere.herokuapp.com/
const cors = 'https://cors-anywhere.herokuapp.com/'
const URLBase = cors + 'https://www.metaweather.com/api/location/'
const URLSearch = cors + 'https://www.metaweather.com/api/location/search/'

export const getWeather = async (location = 44418) => {
  const { data } = await axios.get(`${URLBase}${location}`)
  const currentDay = {
    title: data.title,
    ...data.consolidated_weather[0]
  }
  data.consolidated_weather.shift()
  const weekForecast = data.consolidated_weather
  return { currentDay, weekForecast }
}
export const getMatches = async (location) => {
  const data = await axios.get(URLSearch, { params: { query: location } })
  if (data.data.length === 0) return [{ id: '404', name: 'No matches' }]
  const cities = data.data.map(city => ({
    name: city.title,
    id: city.woeid
  }))
  return cities
}
