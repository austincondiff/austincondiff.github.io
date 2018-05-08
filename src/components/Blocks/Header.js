import React, { Component } from 'react'
import Icon from '../Icon'
import social from '../../social'

export default class Header extends Component {

  render() {
    return (
      <header id="about" style={{background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)'}}>
        <div className="bg-img" style={{transform: 'translateY(' + this.props.scrollTop/2 + 'px)'}}></div>
        <div className="wrap">
          <div className="photo"></div>
          <h1 className="name">Austin <em>Condiff</em></h1>
          <h2 className="title">UX/UI Designer &amp; Developer</h2>
          <div className="social">
            {social.map((s) =>
              <a key={s.id} target="_blank" href={s.url}><Icon type={s.id} /></a>
            )}
    			</div>
        </div>
        <i className="arrow"></i>
      </header>
    )
  }
}
