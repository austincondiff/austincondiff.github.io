import React, { Component } from 'react'
import Icon from '../Icon'
import social from '../../social'
import { TransitionGroup, Transition } from 'react-transition-group'

export default class Header extends Component {

  render() {
    return (
      <TransitionGroup>
        <Transition timeout={ 500 } appear>
          { transitionState =>
            <header id="about" style={{
              background: 'linear-gradient(135deg, #3A3C47 0%, #6B6F81 100%)'
            }}>
              <div style={{
                // background: 'linear-gradient(135deg, rgba(68,193,197,1) 0%, rgba(183,214,98,1) 100%)',
                background: '#066FFF',
                opacity: transitionState === 'entered' ? 1 : 0,
                transition: '1200ms cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                transitionDelay: '400ms'
              }}></div>
              <div style={{
                transform: transitionState === 'entered' ? 'scale(1)' : 'scale(1.5)',
                opacity: transitionState === 'entered' ? 1 : 0,
                transition: '1600ms cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                transitionDelay: '300ms'
              }}>
                <div className="bg-img" style={{transform: 'translateY(' + this.props.scrollTop/2 + 'px)'}}></div>
              </div>
              <div className="wrap center-text" style={{
                transform: transitionState === 'entered' ? 'scale(1)' : 'scale(1.5)',
                opacity: transitionState === 'entered' ? 1 : 0,
                // filter: transitionState === 'entered' ? 'blur(0)' :  'blur(8px)',
                transition: '1600ms cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                transitionDelay: '800ms'
              }}>
                <div className="photo"></div>
                <h1 className="name">Austin <em>Condiff</em></h1>
                <h2 className="title">Creative UI Developer</h2>
                <ul className="social">
                  {social.map((s) =>
                    <li key={s.id}><a target="_blank" href={s.url}><Icon type={s.id} /></a></li>
                  )}
          			</ul>
              </div>
              <i className="arrow" style={{
                opacity: transitionState === 'entered' ? 1 : 0,
                transition: '1600ms',
                transitionDelay: '1600ms'
              }}></i>
            </header>
          }
        </Transition>
      </TransitionGroup>
    )
  }
}
