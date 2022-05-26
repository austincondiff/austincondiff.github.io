import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="block about">
    		<div className="wrap center-text">
    			<ul className="theory">
    				<li>
              <div className="img-circle"><img src={ require('../../assets/img/pixel-perfect.svg') } /></div>
              <div>I strive for <em>perfection</em> at the pixel level.</div>
            </li>
    				<li>
              <div className="img-circle"><img src={ require('../../assets/img/design.svg') } /></div>
              <div>I believe <em>simplicity</em> is key to great design.</div>
            </li>
    				<li>
              <div className="img-circle"><img src={ require('../../assets/img/lightbulb.svg') } /></div>
              <div>I have an eagerness to constantly learn <em>new</em> things.</div>
            </li>
    				<li>
              <div className="img-circle"><img src={ require('../../assets/img/cog.svg') } /></div>
              <div>My goal is to always deliver <em>cutting-edge</em> work.</div>
            </li>
    			</ul>
    		</div>
    	</div>
    )
  }
}
