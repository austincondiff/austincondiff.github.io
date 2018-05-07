import React, { Component } from 'react'

export default class Nav extends Component {

  isScrollTopWithinSection(section) {
    const offset = 5
    if(this.props.sections[section]
    && this.props.scrollTop > this.props.sections[section].offsetTop - offset
    && this.props.scrollTop < (this.props.sections[section].offsetTop + this.props.sections[section].offsetHeight) - offset) {
      return true
    }
    return false
  }

  render() {
    return (
      <nav className={'block' + (this.props.scrollTop > 0 ? ' scrolled' : '')}>
    		<div className='wrap'>
          <img src={ require('../assets/img/logo.svg') } alt="" id="logo"/>
    			<a className={'about' + (this.isScrollTopWithinSection('about') ? ' current' : '')} href="#about">About</a>
    			<a className={'work' + (this.isScrollTopWithinSection('work') ? ' current' : '')} href="#work">Work</a>
    			<a className={'timeline' + (this.isScrollTopWithinSection('timeline') ? ' current' : '')} href="#timeline">Timeline</a>
    			<a className={'connect' + (this.isScrollTopWithinSection('connect') ? ' current' : '')} href="#connect">Connect</a>
    			<a href="/assets/resume-2018.pdf" target="_blank" className="resume">Download Resume</a>
    		</div>
    	</nav>
    )
  }
}
