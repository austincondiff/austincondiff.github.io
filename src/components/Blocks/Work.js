import React, { Component } from 'react'
import axios from 'axios'

export default class Work extends Component {
  constructor() {
    super()
    this.state = { shots: null }
  }

  componentDidMount() {
    const accessToken = '2be1a15ac090f92db56b9a01afd8a0b704628a20398072179636680b24e4215a'
    axios({
      url: 'https://api.dribbble.com/v2/user/shots?per_page=48',
      dataType: 'json',
      type: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(data => {
      console.log(data.data)
      if (data.data.length > 0) {
        this.setState({shots: data.data})
      }
      else {
        this.setState({shots: null})
      }
    })
  }

  render() {
    const { shots } = this.state

    return (
      <div className="block work" id="work">
    		<div className="work-grid">
    			<h3 className="title">Recent Work</h3>
          { shots ?
            <ul className="recent-work">
              {shots && shots.map(shot =>
                <li key={shot.html_url}>
                  <a href={ shot.html_url } target="_blank" style={{
                    backgroundImage: `url(${(shot.images.hidpi !== null) ? shot.images.hidpi : shot.images.normal})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                  </a>
                </li>
              )}
            </ul>
          : <div>We hit a tiny snag. No work to display at the moment.</div> }
    		</div>
    	</div>
    )
  }
}
