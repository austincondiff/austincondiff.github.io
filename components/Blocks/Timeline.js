import React from 'react'
import jobs from '../../data/jobs'

const Timeline = () => {
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

export default Timeline
