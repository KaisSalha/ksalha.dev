/* eslint-disable */

import React from 'react'

import Layout from '../components/layout'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Life from '../components/Life'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class HomeIndex extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      name: '',
      message: '',
      renderState: <Projects />,
      addedTopButton: false,
    }

    this.onClick = this.onClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.projectsRef = React.createRef()
    this.lifeRef = React.createRef()
    this.contactRef = React.createRef()
    this.topRef = React.createRef()
  }

  onClick(e, component) {
    if (component === 'Life') {
      this.projectsRef.current.classList.remove('work')
      this.contactRef.current.classList.remove('contact')
      this.lifeRef.current.classList.add('life')
    } else if (component === 'Contact') {
      this.projectsRef.current.classList.remove('work')
      this.contactRef.current.classList.add('contact')
      // this.lifeRef.current.classList.remove('life')
    } else if (component === 'Projects') {
      this.projectsRef.current.classList.add('work')
      this.contactRef.current.classList.remove('contact')
      // this.lifeRef.current.classList.remove('life')
    }

    this.setState({ renderState: e })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (!this.state.addedTopButton && window.scrollY > '800') {
      this.topRef.current.classList.add('showButton')
      this.topRef.current.classList.remove('animateHide')
      this.setState({ addedTopButton: true })
    }

    if (this.state.addedTopButton && window.scrollY < '800') {
      this.topRef.current.classList.remove('showButton')
      this.topRef.current.classList.add('animateHide')
      this.setState({ addedTopButton: false })
    }
  }

  render() {
    return (
      <Layout>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                {'{'} software development is my passion 💻 {'}'}
              </h2>
              <p>
                My name is Kais Salha. I'm a 24 years old with a bachelor's in
                computer engineering from Multimedia University Cyberjaya.
                Currently doing a post-grad in Network Security and Architecture
                at Fanshawe College.
              </p>
            </header>
            <ul className="actions" style={{ justifyContent: 'center' }}>
              <li>
                <a
                  ref={this.projectsRef}
                  id="work"
                  href="javascript:void(0)"
                  className="button work"
                  onClick={() => {
                    this.onClick(<Projects />, 'Projects')
                  }}
                >
                  Projects
                </a>
              </li>
              {/* <li>
                <a
                  ref={this.lifeRef}
                  href="javascript:void(0)"
                  className="button"
                  id="dev"
                  onClick={() => {
                    this.onClick(<Life />, 'Life')
                  }}
                >
                  About me
                </a>
              </li> */}
              <li>
                <a
                  ref={this.contactRef}
                  href="javascript:void(0)"
                  className="button"
                  id="hire"
                  onClick={() => {
                    this.onClick(<Contact />, 'Contact')
                  }}
                >
                  Contact me!
                </a>
              </li>
            </ul>
          </section>
          {this.state.renderState}
          <AnchorLink href="#main" target="_blank" rel="noopener noreferrer">
            <i
              className="topButton animateHide fa fa-angle-up"
              ref={this.topRef}
              aria-label="topButton"
            />
          </AnchorLink>
        </div>
        <ul className="copyright actions">
          <li>
            &copy; {new Date().getFullYear()} Kais Salha &nbsp; | &nbsp; Made
            with{' '}
            <span role="img" aria-label="coffee" style={{ fontSize: '1.6em' }}>
              ☕
            </span>
            &nbsp; | &nbsp; Design by{' '}
            <a
              href="https://html5up.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML5 UP (CC BY 3.0 license)
            </a>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default HomeIndex
