import React from 'react'
import ReactDOM from 'react-dom'
import MainScreen from './components/MainScreen'
import 'bootstrap'
import './scss/custom.scss'

ReactDOM.render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>,
  document.getElementById('root')
)
