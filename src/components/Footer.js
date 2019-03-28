/* eslint-disable */

import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
      email: 'kaiss.salha@gmail.com',
    }

    this.onClick.bind(this)
  }

  onClick() {
    window.open('mailto:kaiss.salha@gmail.com', '_parent')
  }

  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://github.com/KaisSalha"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
                id="github"
                aria-label="Github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kaissalha/"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
                id="instag"
                aria-label="Instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/14163185096"
                className="icon fab fa-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span className="label">WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaissalha/"
                className="icon fab fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin"
                aria-label="Linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  this.onClick()
                }}
                className="icon fa-envelope-o"
                id="mail"
                aria-label="E-mail"
                style={{ marginTop: '10%' }}
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
