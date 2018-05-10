import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import ReactGA from 'react-ga'
import SmoothScroll from 'smooth-scroll/dist/js/smooth-scroll.js'

import './index.css'

var scroll = new SmoothScroll('a[href*="#"]', { offset: 136 })

ReactGA.initialize('UA-22650073-1')
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(<App />, document.getElementById('root'))
