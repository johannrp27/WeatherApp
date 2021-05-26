import React from 'react'

const ForecastDetails = ({ type, number, unit }) => {
  return (
    <>
      <div className="">
        {type}
      </div>
      <div className="measure">
        <span className="number">{number}</span>
        <span className="type">{unit}</span>
      </div>
      {
        type === 'Wind' &&
        <div>
          <img src="" alt="Compass" />
          WSW
        </div>
      }
      {
        type === 'Humidity' &&
        <div className="px-4">
          <div className="indicators d-flex justify-content-between">
            <div className="lightgray bottom-20">0</div>
            <div className="lightgray bottom-20 middle">50</div>
            <div className="lightgray bottom-20 end">100</div>
          </div>
          <div className="progress rounded-pill overflow-visible">
            <div
              className="progress-bar rounded-pill progress-bar-striped bg-warning"
              role="progressbar"
              style={{ width: number + '%' }}
              aria-valuemin="0"
              aria-valuemax="100">
            </div>
          </div>
          <div className="indicators text-end">
            <div className="lightgray bottom-20">%</div>
          </div>
        </div>
      }
    </>
  )
}

export default ForecastDetails
