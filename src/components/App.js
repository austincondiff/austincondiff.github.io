import React, { Component } from 'react'
import Nav from './Nav'
import { About, Connect, FindMe, Header, MissionStatement, Timeline, Work } from './Blocks'
import Footer from './Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <MissionStatement />
        <About />
        <Work />
        <Timeline />
        <Connect />
        <FindMe />
        <Footer />
      </div>
    )
  }
}
