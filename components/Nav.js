import React, { useState, useEffect } from 'react'
import { Info, Briefcase, Clock, Archive, Mail } from 'react-feather'
import Image from 'next/image'
import isBrowser from 'is-in-browser'

const Nav = ({ scrollTop, sections }) => {
  const [mounted, setMounted] = useState(false)
  const isScrollTopWithinSection = (section) => {
    const navbarHeight = isBrowser && window.innerWidth > 1000 ? 96 : 49
    const safeAreaTop = isBrowser && window.innerWidth > 1000 ? 96 : 0
    const viewportHeight = (isBrowser ? window.innerHeight : 0) - navbarHeight
    const adjustedScrollTop = scrollTop + navbarHeight
    const sectionTop = (sections[section]?.offsetTop ?? 0) + safeAreaTop
    const sectionHeight = (sections[section]?.offsetHeight ?? 0) - safeAreaTop

    // if out of view return false early
    if (sectionTop > scrollTop + viewportHeight || sectionTop + sectionHeight < scrollTop) return false

    const sectionViewportTop = sectionTop - adjustedScrollTop
    const sectionViewportHeight = Math.min(
      sectionHeight + Math.min(sectionViewportTop, 0),
      viewportHeight - sectionViewportTop,
      viewportHeight
    )

    return !!(sectionViewportHeight > viewportHeight / 2)

    // if (
    //   sections[section] &&
    //   Math.ceil(scrollTop) >= Math.floor(sections[section].offsetTop) &&
    //   Math.ceil(scrollTop) <
    //     Math.floor(sections[section].offsetTop) + Math.floor(sections[section].offsetHeight) - offset
    // ) {
    //   return true
    // }
    // return false
  }

  useEffect(() => {
    setMounted(true)
  }, [setMounted])

  return (
    <>
      <div id="logo" className={scrollTop > 0 ? ' scrolled' : ''}>
        <Image src="/assets/img/logo.svg" width={48} height={40} alt="Logo" className="logo-img" />
      </div>
      <nav className={'block' + (scrollTop > 0 ? ' scrolled' : '')}>
        <div className="page-border" style={{ opacity: scrollTop > 0 ? 1 : 1, transition: '.5s' }}>
          <div className="side top"></div>
          <div className="side right"></div>
          <div className="side bottom"></div>
          <div className="side left"></div>
        </div>

        <div className="wrap">
          <a data-scroll className={'about' + (isScrollTopWithinSection('about') ? ' current' : '')} href="#about">
            <Info className="icon" />
            <span className="label">About</span>
          </a>
          <a
            data-scroll
            className={'skillset' + (isScrollTopWithinSection('skillset') ? ' current' : '')}
            href="#skillset"
          >
            <Briefcase className="icon" />
            <span className="label">Skillset</span>
          </a>
          <a
            data-scroll
            className={'timeline' + (isScrollTopWithinSection('timeline') ? ' current' : '')}
            href="#timeline"
          >
            <Clock className="icon" />
            <span className="label">Timeline</span>
          </a>
          <a data-scroll className={'work' + (isScrollTopWithinSection('work') ? ' current' : '')} href="#work">
            <Archive className="icon" />
            <span className="label">Work</span>
          </a>
          <a
            data-scroll
            className={'connect' + (isScrollTopWithinSection('connect') ? ' current' : '')}
            href="#connect"
          >
            <Mail className="icon" />
            <span className="label">Connect</span>
          </a>
          <svg className="current-indicator" width="144" height="27" viewBox="0 0 48 9">
            <path
              className="bubble"
              fill="#066fff"
              d="M8.52651283e-15,9 C12.2610096,9 13.9407216,3.36572875e-14 24,3.36572875e-14 C34.0592784,3.36572875e-14 37.0918536,9 48,9 L8.52651283e-15,9 Z"
            ></path>
          </svg>
        </div>
      </nav>
      <a
        href="/assets/files/resume-2022.pdf"
        target="_blank"
        id="resume-button"
        className={scrollTop > 0 ? ' scrolled' : ''}
      >
        <span>Download</span> Resume
      </a>
    </>
  )
}

export default Nav
