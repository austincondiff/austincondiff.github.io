import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Work = () => {
  const [shots, setShots] = useState(null)

  useEffect(() => {
    const accessToken = '2be1a15ac090f92db56b9a01afd8a0b704628a20398072179636680b24e4215a'
    axios({
      url: 'https://api.dribbble.com/v2/user/shots?per_page=48',
      dataType: 'json',
      type: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((data) => {
      if (data.data.length > 0) {
        setShots(data.data)
      } else {
        setShots(null)
      }
    })
  }, [])

  return (
    <div className="block work">
      <div className="grid">
        <h3 className="title">Recent Work</h3>
        <p className="subtitle">
          Here are a few things I have been up to lately. Please note that I am only able to show work I have either
          personally created or that I have been given permision to show.
        </p>
        {shots ? (
          <ul className="recent-work">
            {shots &&
              shots.map((shot) => (
                <li key={shot.html_url}>
                  <a
                    href={shot.html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundImage: `url(${shot.images.hidpi !== null ? shot.images.hidpi : shot.images.normal})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></a>
                </li>
              ))}
          </ul>
        ) : (
          <div>We hit a tiny snag. No work to display at the moment.</div>
        )}
      </div>
    </div>
  )
}

export default Work
