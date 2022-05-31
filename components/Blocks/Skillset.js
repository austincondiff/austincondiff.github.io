import React from 'react'
import skills from '../../data/skills'

const Skillset = () => {
  return (
    <div id="skillset" className="block skillset">
      <div className="wrap full-width">
        <h3 className="title">Skillset</h3>
        <p className="subtitle">
          The following lists skills that I have become proficient in over the course of my career.
        </p>
        <h4>I specialize in the following.</h4>
        <ul className="specialties">
          {skills.specialties.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h4>I also have experience in the following areas.</h4>
        <ul className="other-skills">
          {skills.other.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skillset
