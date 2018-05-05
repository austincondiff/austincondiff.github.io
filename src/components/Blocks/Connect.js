import React, { Component } from 'react'

export default class Connect extends Component {
  render() {
    return (
      <div className="block connect" id="connect">
    		<div className="wrap">
    			<h3 className="title">Connect with Me</h3>
    			<p className="connect-txt">Like my work? Want to know more about me? Like to share new ideas? Want to meet up? Feel free to connect with me!</p>
    			<form id="form1" name="form1" className="contact wufoo topLabel page" encType="multipart/form-data" method="post" noValidate action="https://austincondiff.wufoo.com/forms/z7x3k7/#public">
    				<ul>
    					<li id="foli16" className="notranslate name">
    						<label className="desc" id="title16" htmlFor="Field16">
    							Name
    							<span id="req_16" className="req">*</span>
    						</label>
    						<div>
    							<input id="Field16" name="Field16" type="text" className="field text medium name" value="" maxLength="255" tabIndex="1" onKeyUp="" required placeholder="Name"/>
    						</div>
    					</li>
    					<li id="foli3" className="notranslate email">
    						<label className="desc" id="title3" htmlFor="Field3">
    							Email
    							<span id="req_3" className="req">*</span>
    						</label>
    						<div>
    							<input id="Field3" name="Field3" type="email" spellCheck="false" className="field text large email" value="" maxLength="255" tabIndex="2" required placeholder="Email"/>
    						</div>
    					</li>
    					<li id="foli6" className="notranslate message">
    						<label className="desc" id="title6" htmlFor="Field6">
    							Message
    							<span id="req_6" className="req">*</span>
    						</label>
    						<div>
    							<textarea id="Field6" name="Field6" className="field textarea large message" spellCheck="true" rows="10" cols="50" tabIndex="3" onKeyUp="" required placeholder="Message"></textarea>
    						</div>
    					</li>
    					<li className="buttons submit">
    						<div>
    							<input id="saveForm" name="saveForm" className="btTxt submit" type="submit" value="Submit"/>
    						</div>
    					</li>
    					<li className="hide">
    						<label htmlFor="comment">Do Not Fill This Out</label>
    						<textarea name="comment" id="comment" rows="1" cols="1"></textarea>
    						<input type="hidden" id="idstamp" name="idstamp" value="b0fv9pGSj4993mZz2+I0lUbyYzhYMHtyMnHeFtAf9mI="/>
    					</li>
    				</ul>
    			</form>
    		</div>
    	</div>
    )
  }
}
