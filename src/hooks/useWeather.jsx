import { useEffect, useState } from 'react'
import { getWeather } from '../helpers/weatherAPI'

const useWeather = () => {
  const [location, setLocation] = useState()
  const [currentDay, setCurrentDay] = useState({})
  const [forecast, setForecast] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchWeather = async () => {
    setIsLoading(true)
    try {
      const { currentDay, weekForecast } = await getWeather(location)
      setCurrentDay(currentDay)
      setForecast(weekForecast)
    } catch (e) {
      console.log('Hey Error', e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log('Location change to ', location)
    fetchWeather()
  }, [location])

  return { currentDay, forecast, setLocation, isLoading }
}

export default useWeather
