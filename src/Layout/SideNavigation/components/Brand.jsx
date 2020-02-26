import React                                           from 'react'
import PropTypes                                       from "prop-types"
import { StyledNavItem, StyledNavIcon, StyledNavText } from './StyledSideNav'
import "./Brand.scss"

export const Brand = (props) => {
  const { eventKey, expanded, brandLogo, brandImage, brandTitle, onClick } = props

  return (
    <StyledNavItem eventKey={ eventKey } className="brandItem" onClick={ onClick }>
      {
        !expanded ?
        <StyledNavIcon className="brandLogoContainer">
          <img src={ brandLogo } alt="brandLogo" className="brandLogo"/>
        </StyledNavIcon> : null
      }

      <StyledNavText style={ { color: "#fff" } }>
        <img src={ brandImage } alt="brandImage" className="brandImage"/>
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
