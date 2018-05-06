import React, { Component } from 'react'
import Icon from '../Icon'
import social from '../../social'

export default class FindMe extends Component {
  constructor() {
    super()
    this.state = { currentSocial: null }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter(currentSocial) {
    this.setState({ currentSocial: currentSocial })
  }

  handleMouseLeave() {
    this.setState({ currentSocial: null })
  }

  render() {
    const { currentSocial } = this.state

    return (
      <div className="block find-me" id="find-me" style={{ backgroundColor: currentSocial && currentSocial.color }}>
    		<div className="wrap">
    			<div className="social">
            {social.map((s) =>
              <a key={s.id} target="_blank" href={s.url} onMouseEnter={() => {this.handleMouseEnter(s)}} onMouseLeave={()=>{this.handleMouseLeave()}}><Icon type={s.id} /></a>
            )}
    			</div>
    			<p className="find-txt" style={{color: currentSocial && 'white'}}>{ currentSocial ? currentSocial.message : 'Find me all over the web.'}</p>
    		</div>
    	</div>
    )
  }
}
