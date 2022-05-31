import React, { useEffect } from 'react'
import { initGA, logPageView } from '../utils/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp