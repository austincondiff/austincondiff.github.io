import React, { Component } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'

export default class Nav extends Component {

  isScrollTopWithinSection(section) {
    const offset = 144
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
        transition: '1200ms',
        transitionDelay: '200ms'
      }
    }
    return (
      <TransitionGroup>
        <Transition timeout={ 500 } appear>
          { transitionState =>
            <nav className={'block' + (this.props.scrollTop > 0 ? ' scrolled' : '')}>
              <div className="page-border" style={{opacity: (this.props.scrollTop > 0 ? 1 : 1), transition: '.5s'}}>
                <div className="top" style={{
                  ...styles.borderSide,
                  top: 0, right: 0, left: 0,
                  height: transitionState === 'entered' ? (this.props.scrollTop > 0 ? 96 : 20) : 0,
                  transition: transitionState === 'entered' ? '400ms' : '1000ms'
                }}></div>
                <div className="right" style={{
                  ...styles.borderSide,
                  top: 0, right: 0, bottom: 0,
                  width: transitionState === 'entered' ? 20 : 0
                }}></div>
                <div className="bottom" style={{
                  ...styles.borderSide,
                  right: 0, bottom: 0, left: 0,
                  height: transitionState === 'entered' ? 20 : 0,
                }}></div>
                <div className="left" style={{
                  ...styles.borderSide,
                  top: 0, bottom: 0, left: 0,
                  width: transitionState === 'entered' ? 20 : 0
                }}></div>
              </div>
              <div className='wrap' style={{
                transition: '800ms',
                transitionDelay: '0ms',
                // transitionDelay: '100ms',
                transform: transitionState === 'entered' ? 'translateY(0)' :  'translateY(-100%)',
                opacity: transitionState === 'entered' ? 1 : 0,
                width: '100%'
              }}>
                <img src={ require('../assets/img/logo.svg') } alt="" id="logo"/>
                <a data-scroll className={'about' + (this.isScrollTopWithinSection('about') ? ' current' : '')} href="#about">About</a>
                <a data-scroll className={'skillset' + (this.isScrollTopWithinSection('skillset') ? ' current' : '')} href="#skillset">Skillset</a>
                <a data-scroll className={'timeline' + (this.isScrollTopWithinSection('timeline') ? ' current' : '')} href="#timeline">Timeline</a>
                <a data-scroll className={'work' + (this.isScrollTopWithinSection('work') ? ' current' : '')} href="#work">Work</a>
                <a data-scroll className={'connect' + (this.isScrollTopWithinSection('connect') ? ' current' : '')} href="#connect">Connect</a>
                <a href="/assets/resume-2018.pdf" target="_blank" className="resume"><span>Download</span> Resume</a>
              </div>
            </nav>
          }
        </Transition>
      </TransitionGroup>
    )
  }
}
