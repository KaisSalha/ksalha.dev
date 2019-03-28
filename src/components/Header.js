/* eslint-disable */

import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatars.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="javascript:void();" className="image avatar">
            <picture>
              <source srcSet={avatar} type="image/webp" />
              <img src={avatar} alt="avatar" />
            </picture>
          </a>
          <h1>
            Hi. <strong>I'm Kais Salha</strong>, a full stack
            <br /> web developer
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
