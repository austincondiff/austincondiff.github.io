import React, { Component } from 'react'
import Icon from '../Icon'
import social from '../data/social'
import { TransitionGroup, Transition } from 'react-transition-group'
import { ParallaxBanner } from 'react-scroll-parallax'

const Header = () => (
  <TransitionGroup>
    <Transition timeout={500} appear>
      {(transitionState) => (
        <ParallaxBanner
          style={{ height: '100vh', background: '#066FFF' }}
          layers={[
            {
              id: 'hero-bg-img',
              image: '/assets/img/bg-hero.jpg',
              speed: -100,
              translateY: [0, 50],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            },
            {
              children: (
                <header>
                  <div
                    className="wrap center-text"
                    style={{
                      transform: transitionState === 'entered' ? 'scale(1)' : 'scale(1.5)',
                      opacity: transitionState === 'entered' ? 1 : 0,
                      // filter: transitionState === 'entered' ? 'blur(0)' :  'blur(8px)',
                      transition: '1600ms cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                      transitionDelay: '800ms',
                    }}
                  >
                    <div className="photo"></div>
                    <h1 className="name">
                      Austin <em>Condiff</em>
                    </h1>
                    <h2 className="title">Creative UI Developer</h2>
                  </div>
                  <ul className="social">
                    {social.map((s) => (
                      <li key={s.id}>
                        <a target="_blank" rel="noreferrer" href={s.url}>
                          <Icon type={s.id} />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <i
                    className="arrow"
                    style={{
                      opacity: transitionState === 'entered' ? 1 : 0,
                      transition: '1600ms',
                      transitionDelay: '1600ms',
                    }}
                  ></i>
                </header>
              ),
            },
          ]}
        />
      )}
    </Transition>
  </TransitionGroup>
)

export default Header
