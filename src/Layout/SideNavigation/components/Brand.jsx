import React                                           from 'react'
import PropTypes                                       from "prop-types"
import { StyledNavItem, StyledNavIcon, StyledNavText } from './StyledSideNav'
import "./Brand.scss"

export const Brand = (props) => {
  const { eventKey, expanded, brandLogo, brandImage, brandTitle, onClick } = props

  return (
    <StyledNavItem eventKey={ eventKey } className="brand-item" onClick={ onClick }>
      {
        !expanded ?
        <StyledNavIcon className="brand-logo-container">
          <img src={ brandLogo } alt="brandLogo" className="brand-logo"/>
        </StyledNavIcon> : null
      }

      <StyledNavText style={ { color: "#fff" } }>
        <img src={ brandImage } alt="brandImage" className="brand-image"/>
        &nbsp; | { brandTitle }
      </StyledNavText>
    </StyledNavItem>
  )
}

Brand.propTypes = {
  expanded:   PropTypes.bool,
  brandImage: PropTypes.string,
  brandLogo:  PropTypes.string,
  brandTitle: PropTypes.string
}
