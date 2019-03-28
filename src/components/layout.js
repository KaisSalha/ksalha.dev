import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from './Header'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const siteTitle = 'Kais Salha'
    const siteDescription = 'Full Stack Developer'

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="Kais Salha" content={siteDescription} />
        </Helmet>
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
