import React, { Component } from 'react'
import Nav from './Nav'
import { About, Connect, FindMe, Header, MissionStatement, Repositories, Skillset, Timeline, Work } from './Blocks'
import Footer from './Footer'

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
    if(!this.ticking) {
      window.requestAnimationFrame(this.updateScroll)
      this.ticking = true
    }
  }

  updateScroll() {
    this.setState({ scrollTop: window.scrollY })
    this.ticking = false
  }

  render() {
    const navBarItems = [{
      label: "About",
      target: "about"
    }, {
      label: "Work",
      target: "work"
    }, {
      label: "Timeline",
      target: "timeline"
    }, {
      label: "Connect",
      target: "connect"
    } ]
    return (
      <div>
        <Nav scrollTop={this.state.scrollTop} sections={ this.sections } />
        <div ref={section => { this.sections.about = section }}>
          <Header scrollTop={this.state.scrollTop} />
          <MissionStatement />
          <About />
        </div>
        <div ref={section => { this.sections.skillset = section }}><Skillset /></div>
        <div ref={section => { this.sections.timeline = section }}><Timeline /></div>
        <div ref={section => { this.sections.work = section }}>
          <Work />
          <Repositories />
        </div>
        <div ref={section => { this.sections.connect = section }}>
          <Connect />
          <FindMe />
        </div>
        <Footer />
      </div>
    )
  }
}
