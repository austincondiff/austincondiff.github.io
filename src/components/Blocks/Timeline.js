import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div className="block timeline" id="timeline">
    		<div className="wrap">
    			<h3 className="title">Timeline</h3>
    			<ul className="timeline">
    				<li className="ut">
    					<h4 className="company">University of Texas</h4>
    					<h5 className="job-title">Website/Graphic Designer</h5>
    					<div className="date">2006</div>
    					<div className="description">
    						<p>First being hired on as an intern, working at the University of Texas Health/Science Center at Houston has helped me not only to be a better designer, but also to be able to work well with others.</p>
    					</div>
    				</li>
    				<li className="mf">
    					<h4 className="company">MediaFire</h4>
    					<h5 className="job-title">Website UI Designer</h5>
    					<div className="date">2011</div>
    					<div className="description">
    						<p>MediaFire is a cloud storage service that helps people store, organize, and share data via the Internet. At MediaFire, I worked primarily with HTML5, CSS, and Photoshop to design and improve the overall look and feel of the website. This position has not only helped me to understand how better communicate and work together with a team, but it has also helped me to sharpen my skills as a designer.</p>
    					</div>
    				</li>
    				<li className="ogf">
    					<h4 className="company">OneGreatFamily</h4>
    					<h5 className="job-title">UX/UI Designer and Javascript Front-end Engineer</h5>
    					<div className="date">2012</div>
    					<div className="description">
    						<p>At OneGreat Family I worked on a project called KiN2.me. KiN2 is the groundbreaking new application that shows you how you're related to famous celebrities, historical figures, and your facebook friends. Working at KiN2.me, I learned how to better program in Javascript and I have also become very proficient in jQuery. I also designed the website's UX/UI using HTML5 and CSS3 after designing Photoshop mockups. Here I was able to improve the overall site look and feel. </p>
    					</div>
    				</li>
    				<li className="ancestry">
    					<h4 className="company">Ancestry.com</h4>
    					<h5 className="job-title">UI/UX Design Director</h5>
    					<div className="date">2013</div>
    					<div className="description">
    						<p>At Ancestry, I designed their new interface to be released to libraries all across the world. This new interface would help users better visualize the records they are searching for requarding their ancestors and help them minimize the time taken to accomplish tasks due to the limited amount of time given in libraries.</p>
    					</div>
    				</li>
    				<li className="usana">
    					<h4 className="company">USANA Health Sciences</h4>
    					<h5 className="job-title">UI/UX Design Specialist</h5>
    					<div className="date">2014</div>
    					<div className="description">
    						<p>At USANA I lead the design of their flagship web application, USANA Hub, which served as a sales portal that servs thousands of associates in many different markets around the world. I also ensured that all of the designs being used throught the company, were consistent in both function and asthetic. I also helped USANA to move from older technologies in favor of new ones such as AngularJS.</p>
    					</div>
    				</li>
    				<li className="solutionstream">
    					<h4 className="company">SolutionStream</h4>
    					<h5 className="job-title">UI/UX Design Specialist</h5>
    					<div className="date">2014</div>
    					<div className="description">
    						<p>During my time at SolutionStream I worked on many different projects for their clients. I got the opportunity to use a wide array of technologies and design styles. Depending on the project was used as a UX/UI design and a front-end dev resource. </p>
    					</div>
    				</li>
    				<li className="rss">
    					<h4 className="company">RSS.com</h4>
    					<h5 className="job-title">Lead UI/UX Designer &amp; Developer</h5>
    					<div className="date">2015</div>
    					<div className="description">
    						<p>At RSS.com I  developed ideas for RSS.com in an effort to revive an aging technology, create a reimagined reader experience, help publishers to obtain a styled, user-friendly RSS feed page, and educate the public about the benefits of the technology. I designed wireframes and mockups then later implemented those mockups in an Angular front end.</p>
    					</div>
    				</li>
            <li className="intuit">
    					<h4 className="company">Intuit</h4>
    					<h5 className="job-title">UI Engineer/Designer</h5>
    					<div className="date">2016</div>
    					<div className="description">
    						<p>At Intuit, I worked on a product that helps accountants better communicate and get documents from their clients. I helped in the transition from AngularJS to ReactJS and refreshed the design of both their accountant and client-facing apps. </p>
    					</div>
    				</li>
            <li className="verizon">
              <h4 className="company">Verizon</h4>
              <h5 className="job-title">Creative UI Engineer</h5>
              <div className="date">2017 - Present</div>
              <div className="description">
                <p>At Verizon, I created a design system, developed a story map (or user flow) based on user input, and arechetected a frontend project from the ground up based on ReactJS for hardware operations. </p>
              </div>
            </li>
    				<li className="now">
    					<h4 className="company">You are here.</h4>
    				</li>
    			</ul>
    		</div>
    	</div>
    )
  }
}
