import React from 'react'
import useWeather from '../hooks/useWeather'
import ActualWeather from './ActualWeather'
import WeatherForecast from './WeatherForecast'
import { SkeletonTheme } from 'react-loading-skeleton'

const MainScreen = () => {
  const { currentDay, forecast, isLoading, setLocation } = useWeather(location)

  return (
    <SkeletonTheme color="#100E1D" highlightColor="#444">
      <div className="row g-0 text-light">
        <div className="col-12 col-md-4 bg-dark bg-cloud">
          <ActualWeather isLoading={isLoading} today={currentDay} setLocation={setLocation}/>
        </div>
        <div className="col-12 col-md-8 bg-secondary p-0 p-xl-5">
          <WeatherForecast isLoading={isLoading} today={currentDay} forecast={forecast}/>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default MainScreen
