import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="block">
    		<div className="wrap center-text">
          <p>&copy; {new Date().getFullYear()} Austin Condiff. Like my website? Feel free to <a href="https://github.com/austincondiff/austincondiff.github.io" target="_blank" rel="noreferrer">fork it</a> on GitHub!</p>
        </div>
    	</footer>
    )
  }
}
