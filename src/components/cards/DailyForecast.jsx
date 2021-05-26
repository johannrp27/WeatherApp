import { format } from 'date-fns'
import React, { useState } from 'react'
import { getWeatherImg } from '../../helpers/imageList'

const DailyForecast = ({ day }) => {
  const [img] = useState(getWeatherImg(day.weather_state_abbr))
  return (
    <div className="card bg-dark forecast text-center m-2 mx-lg-1 p-3">
      <div className="fw-500 fs-6 text-light">
        {
          format(new Date(day.applicable_date), 'E, d MMM')
        }
      </div>
      <div className="my-3">
        <img src={img} width="45" alt={day.weather_state_name} className="img-fluid" />
      </div>
      <div className="fw-500 fs-6">
        <span className="text-light me-2">{Math.round(day.max_temp)}°C</span>
        <span className="lightgray ms-2">{Math.round(day.min_temp)}°C</span>
      </div>
    </div>
  )
}

export default DailyForecast
