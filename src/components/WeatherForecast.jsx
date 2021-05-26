import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import DailyForecast from './cards/DailyForecast'
import ForecastDetails from './cards/ForecastDetails'
const WeatherForecast = ({ isLoading, today, forecast }) => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    if (!isLoading) {
      setStats([
        { type: 'Wind', number: today.wind_speed.toFixed(0), unit: 'mph' },
        { type: 'Humidity', number: today.humidity, unit: '%' },
        { type: 'Visibility', number: today.visibility.toFixed(1), unit: 'miles' },
        { type: 'Air Pressure', number: today.air_pressure, unit: 'mb' }
      ])
    }
  }, [isLoading])

  return (
    <div className="container p-2 pt-5 p-md-5">
      <div className="d-flex flex-wrap justify-content-evenly justify-content-xxl-between align-items-center">
        { isLoading
          ? [1, 2, 3, 4, 5].map(i => (
            <Skeleton className="m-2 mx-lg-1 p-3" width={120} height={160} key={i}/>
          ))
          : forecast.map(day => (
            <DailyForecast day={day} key={day.id}/>
          ))
        }
      </div>
      <div className="my-3 mx-4 my-md-4 mx-md-0 fs-4 fw-bold text-light">
        Today’s Highlights
      </div>
      <div className="row text-center">
        { isLoading
          ? [1, 2, 3, 4].map(i => (
            <div key={i} className="col-12 col-md-6">
              <Skeleton className="my-3 mx-4 my-md-4 mx-md-0 p-3" width={370} height={200} key={i}/>
            </div>
          ))
          : stats.map((stat, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div className="card bg-dark my-3 mx-4 my-md-4 mx-md-0 p-3"
                style={
                  stat.type === 'Humidity' || stat.type === 'Wind'
                    ? { height: 204 + 'px' }
                    : { height: 160 + 'px' }
                }>
                <ForecastDetails {...stat}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WeatherForecast
