import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './index.css'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-22650073-1')
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(<App />, document.getElementById('root'))
