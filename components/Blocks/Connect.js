import React, { useState } from 'react'
import axios from 'axios'
import Icon from '../Icon'

const Connect = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [hasError, setHasError] = useState(false)
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

  const handleInvalid = () => {
    if (!invalid) {
      setInvalid(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'https://formcarry.com/s/HkACBO6Tz'
    setLoading(true)
    setInvalid(false)

    axios({
      method: 'POST',
      dataType: 'json',
      url: url,
      data: formData,
    })
    .then((data) => {
      setLoading(false)
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
          <div className="banner success">
            <Icon type="check" />
            <p><strong>Got it!</strong> I&apos;ll get in touch as soon as I can.</p>
          </div>
        ) : (
          <form className={`contact page${invalid ? ` invalid` : ``}`} onSubmit={handleSubmit}>
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
                  onInvalid={handleInvalid}
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
                  onInvalid={handleInvalid}
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
                  onInvalid={handleInvalid}
                ></textarea>
              </li>
              <li className="buttons submit">
                <input id="saveForm" name="saveForm" className="submit button primary" type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />
              </li>
            </ul>
          </form>
        )}
      </div>
    </div>
  )
}

export default Connect
