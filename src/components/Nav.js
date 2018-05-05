import React, { Component } from 'react'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = { scrollTop: 0 }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll)
  }

  onScroll() {
    this.setState({ scrollTop: window.scrollY })
  }

  render() {
    return (
      <nav className={'block' + (this.state.scrollTop > 0 ? ' scrolled' : '')}>
    		<div className='wrap'>
          <img src={ require('../assets/img/logo.svg') } alt="" id="logo"/>
          {this.state.scrollTop}
    			<a className="about current" href="#about">About</a>
    			<a className="work" href="#work">Work</a>
    			<a className="timeline" href="#timeline">Timeline</a>
    			<a className="connect" href="#connect">Connect</a>
    			<a href="files/resume-2017.pdf" target="_blank" className="resume">Download Resume</a>
    		</div>
    	</nav>
    )
  }
}
