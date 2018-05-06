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
    console.log(this.state.formData)
    axios({
      url: "https://austincondiff.wufoo.com/api/v3/forms/z112eu4s1ss0jag/entries.json",
      method: "POST",
      headers: {
        "authorization": "Basic UTlWSy1CM1RBLTFPRzUtT1UxUzphdWczMDE5ODg=",
      },
      mimeType: "multipart/form-data",
      data: this.state.formData
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
    					<li id="foli16" className="notranslate name">
    						<label className="desc" id="title16" htmlFor="Field16">
    							Name
    							<span id="req_16" className="req">*</span>
    						</label>
    						<div>
    							<input id="Field16" name="Field16" type="text" className="field text medium name" value={formData.name} onChange={this.handleChange} maxLength="255" tabIndex="1" required placeholder="Name" />
    						</div>
    					</li>
    					<li id="foli3" className="notranslate email">
    						<label className="desc" id="title3" htmlFor="Field3">
    							Email
    							<span id="req_3" className="req">*</span>
    						</label>
    						<div>
    							<input id="Field3" name="Field3" type="email" spellCheck="false" className="field text large email" value={formData.email} onChange={this.handleChange} maxLength="255" tabIndex="2" required placeholder="Email"/>
    						</div>
    					</li>
    					<li id="foli6" className="notranslate message">
    						<label className="desc" id="title6" htmlFor="Field6">
    							Message
    							<span id="req_6" className="req">*</span>
    						</label>
    						<div>
    							<textarea id="Field6" name="Field6" className="field textarea large message" spellCheck="true" value={formData.message} onChange={this.handleChange} rows="10" cols="50" tabIndex="3" required placeholder="Message"></textarea>
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
