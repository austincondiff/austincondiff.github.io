import React, { Component } from 'react'
import Nav from './Nav'
import { About, Connect, FindMe, Hero, MissionStatement, Repositories, Skillset, Timeline, Work } from './Blocks'
import Footer from './Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

export default class App extends Component {
  constructor() {
    super()
    this.state = { scrollTop: 0 }
    this.sections = {}
    this.onScroll = this.onScroll.bind(this)
    this.updateScroll = this.updateScroll.bind(this)
    this.ticking = false
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll)
  }

  onScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(this.updateScroll)
      this.ticking = true
    }
  }

  updateScroll() {
    this.setState({ scrollTop: window.scrollY })
    this.ticking = false
  }

  render() {
    return (
      <ParallaxProvider>
        <div className="page-wrap">
          <Nav scrollTop={this.state.scrollTop} sections={this.sections} />
          <main>
            <section
              id="about"
              ref={(section) => {
                this.sections.about = section
              }}
            >
              <Hero scrollTop={this.state.scrollTop} />
              <MissionStatement />
              <About />
            </section>
            <section
              id="skillset"
              ref={(section) => {
                this.sections.skillset = section
              }}
            >
              <Skillset />
            </section>
            <section
              id="timeline"
              ref={(section) => {
                this.sections.timeline = section
              }}
            >
              <Timeline />
            </section>
            <section
              id="work"
              ref={(section) => {
                this.sections.work = section
              }}
            >
              <Work />
              <Repositories />
            </section>
            <section
              id="connect"
              ref={(section) => {
                this.sections.connect = section
              }}
            >
              <Connect />
              <FindMe />
            </section>
          </main>
          <Footer />
        </div>
      </ParallaxProvider>
    )
  }
}
