import React, { Component } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'

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
    const styles = {
      borderSide: {
        position: 'fixed',
        background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)',
        backgroundAttachment: 'fixed',
        transition: '1000ms'
      }
    }
    return (
      <TransitionGroup>
        <Transition timeout={ 500 } appear>
          { transitionState =>
            <nav className={'block' + (this.props.scrollTop > 0 ? ' scrolled' : '')}>
              <div style={{opacity: (this.props.scrollTop > 0 ? 1 : 1), transition: '.5s'}}>
                <div style={{
                  ...styles.borderSide,
                  top: 0, right: 0, left: 0,
                  height: transitionState === 'entered' ? (this.props.scrollTop > 0 ? 104 : 20) : 0,
                  transition: transitionState === 'entered' ? '400ms' : '1000ms'
                }}></div>
                <div style={{
                  ...styles.borderSide,
                  top: 0, right: 0, bottom: 0,
                  width: transitionState === 'entered' ? 20 : 0
                }}></div>
                <div style={{
                  ...styles.borderSide,
                  right: 0, bottom: 0, left: 0,
                  height: transitionState === 'entered' ? 20 : 0,
                }}></div>
                <div style={{
                  ...styles.borderSide,
                  top: 0, bottom: 0, left: 0,
                  width: transitionState === 'entered' ? 20 : 0
                }}></div>
              </div>
              <div className='wrap' style={{
                transition: '1000ms',
                // transitionDelay: '100ms',
                transform: transitionState === 'entered' ? 'translateY(0)' :  'translateY(-100%)',
                opacity: transitionState === 'entered' ? 1 : 0,
                width: '100%'
              }}>
                <img src={ require('../assets/img/logo.svg') } alt="" id="logo"/>
                <a className={'about' + (this.isScrollTopWithinSection('about') ? ' current' : '')} href="#about">About</a>
                <a className={'work' + (this.isScrollTopWithinSection('work') ? ' current' : '')} href="#work">Work</a>
                <a className={'timeline' + (this.isScrollTopWithinSection('timeline') ? ' current' : '')} href="#timeline">Timeline</a>
                <a className={'connect' + (this.isScrollTopWithinSection('connect') ? ' current' : '')} href="#connect">Connect</a>
                <a href="/assets/resume-2018.pdf" target="_blank" className="resume">Download Resume</a>
              </div>
            </nav>
          }
        </Transition>
      </TransitionGroup>
    )
  }
}
