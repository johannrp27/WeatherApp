import React, { useRef, useState } from 'react'
import { getMatches } from '../helpers/weatherAPI'
import closeIcon from './../assets/closeX.svg'
import searchIcon from './../assets/lupa.svg'
import chevronR from './../assets/chevronR.svg'

const SearchPanel = ({ setLocation }) => {
  const inputText = useRef(null)
  const [matches, setMatches] = useState([])
  const [isLoading, setLoading] = useState(false)
  const canvas = useRef(null)

  const searchLocation = async () => {
    setMatches([])
    setLoading(true)
    const strToSearch = inputText.current.value
    try {
      const cities = await getMatches(strToSearch)
      setMatches(cities)
    } catch (e) {
      console.log('HEY ', e)
    } finally {
      setLoading(false)
    }
  }
  const handleSearch = (id) => {
    setLocation(id)
    // Close on click search
  }
  return (
    <div
      ref={canvas}
      className="offcanvas offcanvas-start bg-dark p-3"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="locationSearchPanel">
      <div className="offcanvas-header text-end flex-row-reverse">
        <div
          type="button"
          className=""
          data-bs-dismiss="offcanvas"
          aria-label="Close">
          <img src={closeIcon} alt="Close" height="25" />
        </div>
      </div>
      <div className="offcanvas-body">
        <div className="input-group position-relative align-items-center pb-5">
          <img src={searchIcon} className="position-absolute search ms-2" width="25" alt="Search icon"></img>
          <input
            ref={inputText}
            type="text"
            className="form-control bg-dark text-light ps-5"
            aria-label="Text input with segmented dropdown button"
            placeholder="Location"/>
          <button type="button" onClick={searchLocation} className="btn text-light" style={{ background: '#3C47E9' }}>Search</button>
        </div>
        {
          isLoading &&
          <div className="text-center">
            <div className="spinner-border text-light fs-4" role="status"
              style={{ height: 2.5 + 'rem', width: 2.5 + 'rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        <div className="">
          {
            matches.map(match => (
              <div className="p-3 d-flex match" key={match.id} onClick={() => handleSearch(match.id)}>
                <div className="flex-grow-1">{match.name}</div>
                <img src={chevronR} width="15" alt="Go" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPanel
