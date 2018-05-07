import React, { Component } from 'react'
import axios from 'axios'

export default class Connect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {},
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      formData: { ...this.state.formData, [name]: value }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const url = "https://formcarry.com/s/HkACBO6Tz";

    axios({
      method: "POST",
      dataType: "json",
      url: url,
      data: this.state.formData,
    }).then(data => {
      this.setState({submitted: true})
    }).catch(data => {
      console.log('There was a problem submitting the form.')
      console.log(data)
    })
  }

  render() {
    const { formData, submitted } = this.state
    return (
      <div className="block connect" id="connect">
    		<div className="wrap">
          <h3 className="title">Connect with Me</h3>
          {submitted ? (
            <p className="connect-txt">Got it! I'll get in touch as soon as I can.</p>
          ) : (
            <form className="contact page" onSubmit={this.handleSubmit}>
        			<p className="connect-txt">Like my work? Want to know more about me? Like to share new ideas? Want to meet up? Feel free to connect with me!</p>
              <ul>
                <li className="name">
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    className="field text name"
                    value={formData.name}
                    onChange={this.handleChange}
                    maxLength="255"
                    tabIndex="1"
                    required
                    placeholder="Name" />
                </li>
      					<li className="email">
    							<input
                    id="email"
                    name="Email"
                    type="email"
                    spellCheck="false"
                    className="field text email"
                    value={formData.email}
                    onChange={this.handleChange}
                    maxLength="255"
                    tabIndex="2"
                    required
                    placeholder="Email"/>
      					</li>
      					<li className="message">
    							<textarea
                    id="message"
                    name="Message"
                    className="field textarea message"
                    spellCheck="true"
                    value={formData.message}
                    onChange={this.handleChange}
                    rows="10"
                    cols="50"
                    tabIndex="3"
                    required
                    placeholder="Message"></textarea>
      					</li>
      					<li className="buttons submit">
    							<input
                    id="saveForm"
                    name="saveForm"
                    className="btTxt submit"
                    type="submit"
                    value="Submit"/>
      					</li>
      				</ul>
      			</form>
          )}
    		</div>
    	</div>
    )
  }
}
