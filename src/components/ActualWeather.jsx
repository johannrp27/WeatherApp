import React, { useEffect, useState } from 'react'
import SearchPanel from './SearchPanel'
import { getWeatherImg } from '../helpers/imageList'
import gps from './../assets/gps.svg'
import position from './../assets/position.svg'
import Skeleton from 'react-loading-skeleton'

// eslint-disable-next-line camelcase
const ActualWeather = ({ today, isLoading, setLocation }) => {
  const [img, setImage] = useState('')
  useEffect(() => {
    if (!isLoading) {
      const pos = today.weather_state_abbr
      const imgTest = getWeatherImg(pos)
      setImage(imgTest)
    }
  }, [isLoading])

  return (
    <>
      <div className="row py-4 g-0 text-center">
        <div className="col">
          <div
            className="btn btn-primary shadow-lg text-light border-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#locationSearchPanel"
            aria-controls="offcanvasExample"
            type="button">
            Search for places
          </div>
        </div>
        <div className="col">
          <div type="button" className="shadow-lg btn btn-primary btn-gps rounded-circle">
            <img className="gps-icon" src={gps} alt="Location" />
          </div>
        </div>
      </div>
      <div className="d-flex min-vh-100 justify-content-evenly flex-column text-center">
        <div className="icon img-fluid">
          {
            isLoading
              ? <Skeleton width={150} height={150}/>
              : <img className="img-fluid" width="150" src={img} alt="Actual Weather" />
          }
        </div>
        <div className="forecast lh-1">
          {
            isLoading
              ? <Skeleton height={130} width={220}/>
              : <>
                <span className="today">
                  { today.the_temp.toFixed(1) }
                </span>
                <span className="h3 text-light">°C</span>
              </>
          }
        </div>
        <div className="h2">
          { isLoading ? <Skeleton width={150}/> : today.weather_state_name}
        </div>
        {
          isLoading
            ? <Skeleton width={100}/>
            : <div className="">
              Today <span>•</span> {today.applicable_date}
            </div>
        }
        <div className="location">
          <img className="me-2" src={position} width="20" alt="Icon Location" />
          { today.title || <Skeleton width={25}/> }
        </div>
      </div>
      <SearchPanel setLocation={setLocation}/>
    </>
  )
}

export default ActualWeather
