import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    const jobs = [
      {
        id: 'ut',
        company: 'University of Texas',
        title: 'Website/Graphic Designer',
        date: '2006',
        description:
          'First being hired on as an intern, working at the University of Texas Health/Science Center at Houston has helped me not only to be a better designer, but also to be able to work well with others.',
      },
      {
        id: 'mf',
        company: 'MediaFire',
        title: 'Website UI Designer',
        date: '2011',
        description:
          'MediaFire is a cloud storage service that helps people store, organize, and share data via the Internet. At MediaFire, I worked primarily with HTML5, CSS, and Photoshop to design and improve the overall look and feel of the website. This position has not only helped me to understand how better communicate and work together with a team, but it has also helped me to sharpen my skills as a designer.',
      },
      {
        id: 'ogf',
        company: 'OneGreatFamily',
        title: 'UX/UI Designer and Javascript Front-end Engineer',
        date: '2012',
        description:
          "At OneGreat Family, I worked on a project called KiN2.me. KiN2 is the groundbreaking new application that shows you how you're related to famous celebrities, historical figures, and your facebook friends. Working at KiN2.me, I learned how to better program in Javascript and I have also become very proficient in jQuery. I also designed the website's UX/UI using HTML5 and CSS3 after designing Photoshop mockups. Here I was able to improve the overall site look and feel.",
      },
      {
        id: 'ancestry',
        company: 'Ancestry.com',
        title: 'UI/UX Design Director',
        date: '2013',
        description:
          'At Ancestry, I designed their new interface to be released to libraries all across the world. This new interface would help users better visualize the records they are searching for requarding their ancestors and help them minimize the time taken to accomplish tasks due to the limited amount of time given in libraries.',
      },
      {
        id: 'usana',
        company: 'USANA Health Sciences',
        title: 'UI/UX Design Specialist',
        date: '2014',
        description:
          'At USANA I lead the design of their flagship web application, USANA Hub, which served as a sales portal that servs thousands of associates in many different markets around the world. I also ensured that all of the designs being used throught the company, were consistent in both function and asthetic. I also helped USANA to move from older technologies in favor of new ones such as AngularJS.',
      },
      {
        id: 'solutionstream',
        company: 'SolutionStream',
        title: 'UI/UX Design Specialist',
        date: '2014',
        description:
          'During my time at SolutionStream, I worked on many different projects for their clients. I got the opportunity to use a wide array of technologies and design styles. Depending on the project was used as a UX/UI design and a front-end dev resource.',
      },
      {
        id: 'rss',
        company: 'RSS.com',
        title: 'Co-founder - UI/UX Designer & Developer',
        date: '2015',
        description:
          'At RSS.com, I developed ideas for RSS.com in an effort to revive an aging technology, create a reimagined reader experience, help publishers to obtain a styled, user-friendly RSS feed page, and educate the public about the benefits of the technology. I designed wireframes and mockups then later implemented those mockups in an Angular front end.',
      },
      {
        id: 'intuit',
        company: 'Intuit',
        title: 'UI Engineer/Designer',
        date: '2016',
        description:
          'At Intuit, I worked on a product that helps accountants better communicate and get documents from their clients. I helped in the transition from AngularJS to ReactJS and refreshed the design of both their accountant and client-facing apps.',
      },
      {
        id: 'verizon',
        company: 'Verizon',
        title: 'Creative UI Engineer',
        date: '2017',
        description:
          'At Verizon, I created a design system, developed a story map (or user flow) based on user input, and architected a frontend project from the ground up based on ReactJS for hardware operations.',
      },
      {
        id: 'churchofjesuschrist',
        company: 'The Church Of Jesus Christ of Latter-day Saints',
        title: 'Senior Front-end Developer',
        date: '2018 - Present',
        description:
          'At the Church of Jesus Christ of Latter-day Saints, my team and I built a large-scale financial application with React and Next.js that is used by an internal accounting team to manage donations using the latest technologies and development practices.',
      },
    ]
    return (
      <div className="block timeline">
        <div className="wrap">
          <h3 className="title">Timeline</h3>
          <ul className="timeline">
            {jobs.map((job) => (
              <li key={job.id} className={job.id}>
                <div className="header">
                  <div className="header-title">
                    <h4 className="company">{job.company}</h4>
                    <h5 className="job-title">{job.title}</h5>
                  </div>
                  <div className="date">{job.date}</div>
                </div>
                <div className="desc">
                  <p>{job.description}</p>
                </div>
              </li>
            ))}
            <li className="now">
              <h4 className="company">You are here.</h4>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
