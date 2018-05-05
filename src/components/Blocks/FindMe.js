import React, { Component } from 'react'

export default class FindMe extends Component {
  render() {
    return (
      <div className="block find-me" id="find-me">
    		<div className="wrap">
    			<div className="social">
    				<a target="_blank" href="https://twitter.com/austincondiff" className="twitter" data-txt="Follow me on Twitter.">Twitter</a>
    				<a target="_blank" href="http://www.dribbble.com/austincondiff" className="dribbble" data-txt="Check out my work on Dribbble.">Dribbble</a>
    				<a target="_blank" href="http://www.linkedin.com/pub/austin-condiff/19/966/b6b" className="linkedin" data-txt="Connect with me on LinkedIn.">LinkedIn</a>
    				<a target="_blank" href="https://plus.google.com/113055989549833930913/" className="gplus" data-txt="Follow me on Google+">Google+</a>
    				<a target="_blank" href="https://www.facebook.com/acondiff" className="facebook" data-txt="See what I'm up to on Facebook.">Facebook</a>
    				<a target="_blank" href="http://instagram.com/austincondiff" className="instagram" data-txt="Check out my recent photos on Instagram.">Instagram</a>
    			</div>
    			<p className="find-txt">Find me all over the web.</p>
    		</div>
    	</div>
    )
  }
}
