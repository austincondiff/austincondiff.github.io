import React, { useState } from 'react'
import Icon from '../Icon'
import social from '../../data/social'

const FindMe = () => {
  const [currentSocial, setCurrentSocial] = useState(null)

  return (
    <div className="block find-me" id="find-me" style={{ backgroundColor: currentSocial && currentSocial.color }}>
      <div className="wrap center-text">
        <div className="social">
          {social.map((s) => (
            <a
              key={s.id}
              target="_blank"
              rel="noreferrer"
              href={s.url}
              onMouseEnter={() => setCurrentSocial(s)}
              onMouseLeave={() => setCurrentSocial(null)}
            >
              <Icon type={s.id} />
            </a>
          ))}
        </div>
        <p className="find-txt" style={{ color: currentSocial && 'white' }}>
          {currentSocial ? currentSocial.message : 'Find me all over the web.'}
        </p>
      </div>
    </div>
  )
}

export default FindMe
