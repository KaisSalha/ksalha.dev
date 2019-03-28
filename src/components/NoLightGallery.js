import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

class NoLightGallery extends PureComponent {
  renderNoLightGallery() {
    let noClickStyle = {}
    const { images } = this.props

    if (!images) return

    const NoLightGallery = images.map((obj, i) => {
      if (obj.link.length === 0) {
        noClickStyle = { pointerEvents: 'none' }
      } else {
        noClickStyle = { pointerEvents: '' }
      }
      return (
        <article className="8u 12u$(xsmall) work-item" key={i}>
          <a
            style={noClickStyle}
            className="image fit thumb work"
            href={obj.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source srcSet={obj.thumbnail} type="image/webp" />
              <source srcSet={obj.altThumbnail} type="image/png" />
              <img src={obj.altThumbnail} alt={obj.caption} id={obj.id} />
            </picture>
          </a>

          <h3>{obj.caption}</h3>
          <p style={{ marginBottom: '0.5em' }}>{obj.description}</p>
          <p>{obj.tech}</p>
        </article>
      )
    })

    return <div className="row">{NoLightGallery}</div>
  }
  render() {
    return <div>{this.renderNoLightGallery()}</div>
  }
}

NoLightGallery.displayName = 'NoLightGallery'
NoLightGallery.propTypes = {
  images: PropTypes.array,
}

export default NoLightGallery
