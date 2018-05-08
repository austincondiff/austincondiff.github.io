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
        <div style={{opacity: (this.props.scrollTop > 0 ? 1 : 1), transition: '.5s'}}>
          <div style={{
            position: 'fixed',
            top: 0, right: 0, left: 0, height: (this.props.scrollTop > 0 ? 104 : 20),
            background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)',
            backgroundAttachment: 'fixed',
            transition: '.5s'
          }}></div>
          <div style={{
            position: 'fixed',
            top: 0, right: 0, bottom: 0, width: 20,
            background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)',
            backgroundAttachment: 'fixed',
            transition: '.5s'
          }}></div>
          <div style={{
            position: 'fixed',
            right: 0, bottom: 0, left: 0, height: 20,
            background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)',
            backgroundAttachment: 'fixed',
            transition: '.5s'
          }}></div>
          <div style={{
            position: 'fixed',
            top: 0, bottom: 0, left: 0, width: 20,
            background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)',
            backgroundAttachment: 'fixed',
            transition: '.5s'
          }}></div>
        </div>
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
