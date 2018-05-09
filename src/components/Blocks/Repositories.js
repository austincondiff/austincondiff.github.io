import React, { Component } from 'react'
import axios from 'axios'

export default class Repositories extends Component {
  constructor() {
    super()
    this.state = { repositories: null }
  }

  componentDidMount() {
    axios({
      url: 'https://api.github.com/users/austincondiff/repos',
      dataType: 'json',
      type: 'GET'
    }).then(data => {
      console.log(data.data)
      if (data.data.length > 0) {
        this.setState({repositories: data.data})
      }
      else {
        this.setState({repositories: null})
      }
    })
  }

  render() {
    const { repositories } = this.state

    return (
      <div className="block repos work">
    		<div className="grid" style={{padding: '5%'}}>
          <h4>Some of my Github repositories</h4>
          <ul>
            {repositories && repositories.map(repo =>
              <li key={repo.id}>
                <div>
                  <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>
                  <p>{repo.description}</p>
                </div>
              </li>
            )}
          </ul>
    		</div>
    	</div>
    )
  }
}
