import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const Repositories = () => {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    axios({
      url: 'https://api.github.com/users/austincondiff/repos',
      dataType: 'json',
      type: 'GET',
    }).then((data) => {
      if (data.data.length > 0) {
        setRepos(data.data)
      } else {
        setRepos(null)
      }
    })
  }, [])

  return repos ? (
    <div className="block repos work">
      <div className="wrap full-width">
        <h3 className="title">GitHub Repositories</h3>
        <p className="subtitle">Check out the repositories I have created or contribute to on GitHub.</p>
        <ul>
          {repos?.map((repo) => (
            <li key={repo.id}>
              <div>
                <h4>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
                <div className="repo-meta">
                  {repo.language && <div className="repo-lang">{repo.language}</div>}
                  {repo.updated_at && (
                    <div className="repo-updated-at">Updated {moment(repo.updated_at).format('LL')}</div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null
}

export default Repositories
