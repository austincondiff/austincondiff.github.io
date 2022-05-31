import React from 'react'
const files = require.context('!svg-sprite-loader!/public/assets/icons', false, /.*\.svg$/)
files.keys().forEach(files)

const Icon = ({ type, className }) => (
  <svg height="1em" width="1em">
    <use xlinkHref={`#${type}`}></use>
  </svg>
)

export default Icon
