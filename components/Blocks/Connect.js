import React, { useState } from 'react'
import axios from 'axios'

const Connect = () => {
  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'https://formcarry.com/s/HkACBO6Tz'

    axios({
      method: 'POST',
      dataType: 'json',
      url: url,
      data: formData,
    })
      .then((data) => {
        setSubmitted(true)
      })
      .catch((data) => {
        console.log('There was a problem submitting the form.')
        console.log(data)
      })
  }

  return (
    <div className="block connect">
      <div className="wrap">
        <h3 className="title">Connect with Me</h3>
        <p className="subtitle">
          Like my work? Want to know more about me? Like to share new ideas? Want to meet up? Feel free to connect with
          me!
        </p>
        {submitted ? (
          <p>Got it! I&apos;ll get in touch as soon as I can.</p>
        ) : (
          <form className="contact page" onSubmit={handleSubmit}>
            <ul>
              <li className="name">
                <input
                  id="name"
                  name="Name"
                  type="text"
                  className="field text name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength="255"
                  tabIndex="1"
                  required
                  placeholder="Name"
                />
              </li>
              <li className="email">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  spellCheck="false"
                  className="field text email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength="255"
                  tabIndex="2"
                  required
                  placeholder="Email"
                />
              </li>
              <li className="message">
                <textarea
                  id="message"
                  name="Message"
                  className="field textarea message"
                  spellCheck="true"
                  value={formData.message}
                  onChange={handleChange}
                  rows="10"
                  cols="50"
                  tabIndex="3"
                  required
                  placeholder="Message"
                ></textarea>
              </li>
              <li className="buttons submit">
                <input id="saveForm" name="saveForm" className="submit button primary" type="submit" value="Send" />
              </li>
            </ul>
          </form>
        )}
      </div>
    </div>
  )
}

export default Connect
