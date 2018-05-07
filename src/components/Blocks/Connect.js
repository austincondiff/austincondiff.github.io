import React, { Component } from 'react'
import axios from 'axios'

export default class Connect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        Field16: '',
        Field3: '',
        Field6: ''
      }
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

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://creator.zoho.com/api/acondiff/json/portfolio/form/Contact/record/add";

    axios({
      url: url,
      method: "POST",
      async: true,
      crossDomain: true,
      mimeType: "multipart/form-data",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
      data: {
        "authtoken": "f513e7ba9a5b14f3ac8d3b12382559d9",
        "scope": "creatorapi",
        "Name.first_name": this.state.formData.firstName,
        "Name.last_name": this.state.formData.lastName,
        "Email": this.state.formData.email,
        "Message": this.state.formData.message
      }
    }).then(data => {
      console.log(data)
    }).catch(data => {
      console.log('There was a problem submitting the form.')
      console.log(data)
    })
  }

  render() {
    const { formData } = this.state
    return (
      <div className="block connect" id="connect">
    		<div className="wrap">
    			<h3 className="title">Connect with Me</h3>
    			<p className="connect-txt">Like my work? Want to know more about me? Like to share new ideas? Want to meet up? Feel free to connect with me!</p>
    			<form id="form1" name="form1" className="contact wufoo topLabel page" onSubmit={this.handleSubmit}>
    				<ul>
            <li id="field-firstName" className="notranslate first-name">
              <label className="desc" id="title16" htmlFor="firstName">
                First Name
                <span id="req_16" className="req">*</span>
              </label>
              <div>
                <input id="firstName" name="firstName" type="text" className="field text medium name" value={formData.name} onChange={this.handleChange} maxLength="255" tabIndex="1" required placeholder="First Name" />
              </div>
            </li>
            <li id="field-lastName" className="notranslate last-name">
              <label className="desc" id="title16" htmlFor="lastName">
                Last Name
                <span id="req_16" className="req">*</span>
              </label>
              <div>
                <input id="lastName" name="lastName" type="text" className="field text medium name" value={formData.name} onChange={this.handleChange} maxLength="255" tabIndex="1" required placeholder="Last Name" />
              </div>
            </li>
    					<li id="foli3" className="notranslate email">
    						<label className="desc" id="title3" htmlFor="email">
    							Email
    							<span id="req_3" className="req">*</span>
    						</label>
    						<div>
    							<input id="email" name="email" type="email" spellCheck="false" className="field text large email" value={formData.email} onChange={this.handleChange} maxLength="255" tabIndex="2" required placeholder="Email"/>
    						</div>
    					</li>
    					<li id="foli6" className="notranslate message">
    						<label className="desc" id="title6" htmlFor="message">
    							Message
    							<span id="req_6" className="req">*</span>
    						</label>
    						<div>
    							<textarea id="message" name="message" className="field textarea large message" spellCheck="true" value={formData.message} onChange={this.handleChange} rows="10" cols="50" tabIndex="3" required placeholder="Message"></textarea>
    						</div>
    					</li>
    					<li className="buttons submit">
    						<div>
    							<input id="saveForm" name="saveForm" className="btTxt submit" type="submit" value="Submit"/>
    						</div>
    					</li>
    				</ul>
    			</form>
    		</div>
    	</div>
    )
  }
}
