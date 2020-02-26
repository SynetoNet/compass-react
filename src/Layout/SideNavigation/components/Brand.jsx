import React                         from 'react'
import PropTypes                     from "prop-types"
import { NavItem, NavIcon, NavText } from './StyledSideNav'
import "./Brand.scss"

export const Brand = (props) => {
  const { eventKey, expanded, brandLogo, brandImage, brandTitle, onClick } = props

  return (
    <NavItem eventKey={ eventKey } className="brandItem" onClick={ onClick }>
      {
        !expanded ?
        <NavIcon className="brandLogoContainer">
          <img src={ brandLogo } alt="brandLogo" className="brandLogo"/>
        </NavIcon> : null
      }

      <NavText style={ { color: "#fff" } }>
        <img src={ brandImage } alt="brandImage" className="brandImage"/>
        &nbsp; | { brandTitle }
      </NavText>
    </NavItem>
  )
}

Brand.propTypes = {
  expanded:   PropTypes.bool,
  brandImage: PropTypes.string,
  brandLogo:  PropTypes.string,
  brandTitle: PropTypes.string
}
