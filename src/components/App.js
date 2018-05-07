import React, { Component } from 'react'
import Nav from './Nav'
import { About, Connect, FindMe, Header, MissionStatement, Timeline, Work } from './Blocks'
import Footer from './Footer'
import NavBar, { ElementWrapper } from 'react-scrolling-nav';

export default class App extends Component {
  constructor() {
    super()
    this.sections = {}
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
        <Nav sections={ this.sections } />
        <div ref={section => { this.sections.about = section }}>
          <Header />
          <MissionStatement />
          <About />
        </div>
        <div ref={section => { this.sections.work = section }}><Work /></div>
        <div ref={section => { this.sections.timeline = section }}><Timeline /></div>
        <div ref={section => { this.sections.connect = section }}>
          <Connect />
          <FindMe />
        </div>
        <Footer />
      </div>
    )
  }
}
