import React, { PureComponent } from 'react'
import NoLightGallery from './NoLightGallery'

import thumb01 from '../assets/images/thumbs/2.png'
import thumb01b from '../assets/images/thumbs/2.png'
import thumb02 from '../assets/images/thumbs/1.png'
import thumb02b from '../assets/images/thumbs/1.png'
import thumb06 from '../assets/images/thumbs/3.png'
import thumb06b from '../assets/images/thumbs/3.png'

const DEFAULT_IMAGES = [
  {
    id: 'thumb2',
    thumbnail: thumb02b,
    altThumbnail: thumb02,
    caption: 'ksalha.dev',
    tech:
      "Personal Project: This website! Hope you like it. It uses Gatsby.Js to serve static HTML files rather than JavaScript. Which is why it's fast. Hosted with Netlify and Cloudflare.",
    description: 'Tech: React.Js, Gatsby.Js',
    link: '',
  },
  {
    id: 'thumb1',
    thumbnail: thumb01b,
    altThumbnail: thumb01,
    caption: 'DevConnect',
    tech:
      'Personal Project: A social network web app with signup, login, personal profiles, posts, comments, feed, like & unlike system and more.',
    description: 'Tech: MongoDB, Express.Js, React.Js, Redux.Js, Node.Js',
    link: 'https://devconnectt.herokuapp.com/',
  },
  {
    id: 'thumb1',
    thumbnail: thumb06b,
    altThumbnail: thumb06,
    caption: 'maxcare.sa',
    tech:
      "Client Project: The first website I ever made after learning Mongo, Express, Node, HTML, and CSS for the first time (unoptimized). I like to look at it to see how far I've come since I began this journey.",
    description: 'Tech: HTML, CSS, MongoDB, Express.Js, Node.Js',
    link: 'http://maxcare.sa',
  },
]

export default class Projects extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <br />
          <NoLightGallery
            images={DEFAULT_IMAGES.map(
              ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                tech,
                link,
                description,
                id,
              }) => ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                tech,
                link,
                description,
                id,
              })
            )}
          />

          <ul className="actions">
            <li>
              <a
                href="https://github.com/KaisSalha"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/open?id=1oONaaipIBFTXuqccRo6p-V9DEEw87Vf2"
                className="button resume"
                target="_blank"
                rel="noopener noreferrer"
                id="home"
              >
                Resume
              </a>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}
