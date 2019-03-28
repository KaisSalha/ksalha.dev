/* eslint-disable */

import React, { PureComponent } from 'react'

export default class Contact extends PureComponent {
  constructor() {
    super()

    this.state = {
      name: '',
      message: '',
      me: 'Click to show email!',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    this.setState({ me: 'kaiss.salha@gmail.com' })

    if (e === 'kaiss.salha@gmail.com') {
      window.open('mailto:kaiss.salha@gmail.com', '_parent')
    }
  }

  onSubmit(e) {
    e.preventDefault()
    window.open(
      `mailto:kaiss.salha@gmail.com?subject=${this.state.name}&body=${
        this.state.message
      }`,
      '_parent'
    )
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { me } = this.state
    return (
      <div>
        <section>
          <h2 style={{ textDecoration: 'underline', fontStyle: 'italic' }}>
            Let's talk?
          </h2>
          <p>
            Don't be shy, say hi!
            <br />
            For a faster response, shoot me an email or a text. I'll reply as
            soon as I can.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" onSubmit={this.onSubmit}>
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <br />
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" id="mail" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <a
                    href="https://goo.gl/maps/qAqewSeEv4K2"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="home"
                  >
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    London, ON, Canada
                  </a>
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  <a style={{ pointerEvents: 'none' }}> +14163185096</a>
                </li>
                <li>
                  <a
                    href="https://wa.me/14163185096"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="icon fab fa-whatsapp">
                      <span className="label">WhatsApp</span>
                    </h3>
                    Text me on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    id="mail"
                    onClick={() => {
                      this.onClick(me)
                    }}
                  >
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    {this.state.me}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
