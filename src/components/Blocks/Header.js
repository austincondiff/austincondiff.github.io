import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header id="about">
        <div className="bg-img"></div>
        <div className="wrap">
          <div className="photo"></div>
          <h1 className="name">Austin <em>Condiff</em></h1>
          <h2 className="title">UX/UI Designer &amp; Developer</h2>
          <div className="social">
            <a target="_blank" href="https://twitter.com/austincondiff" className="twitter">Twitter</a>
            <a target="_blank" href="http://www.dribbble.com/austincondiff" className="dribbble">Dribbble</a>
            <a target="_blank" href="http://www.linkedin.com/pub/austin-condiff/19/966/b6b" className="linkedin">LinkedIn</a>
            <a target="_blank" href="https://plus.google.com/113055989549833930913/" className="gplus">Google+</a>
            <a target="_blank" href="https://www.facebook.com/acondiff" className="facebook">Facebook</a>
            <a target="_blank" href="http://instagram.com/austincondiff" className="instagram">Instagram</a>
          </div>
          <i className="arrow"></i>
        </div>
      </header>
    )
  }
}
