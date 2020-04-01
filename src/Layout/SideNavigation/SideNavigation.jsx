import React, { useState } from 'react'
import PropTypes           from "prop-types"
import Icon                from "../../components/Icon/Icon"
import { Brand }           from "./components/Brand"
import {
  StyledSideNav,
  StyledNav,
  StyledNavItem,
  StyledNavIcon,
  StyledNavText
}                          from './components/StyledSideNav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const SideNavigation = (props) => {
  const { items, bottomItems, defaultEventKey, onSelect } = props

  const [ expanded, setExpanded ] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <StyledSideNav
      onSelect={onSelect}
      onToggle={ toggleExpanded }
      expanded={ expanded }
      onMouseOver={ () => setExpanded(true) }
      onMouseLeave={ () => setExpanded(false) }
    >
      <StyledNav defaultSelected={ defaultEventKey }>
        {
          items && items.length ? items.map((item, index) => {
            if ( item.eventKey === 'brand' ) {
              return (
                <Brand
                  key={ index }
                  expanded={ expanded }
                  brandImage={ item.brandImage }
                  brandLogo={ item.brandLogo }
                  brandTitle={ item.brandTitle }
                  onClick={ item.onClick }
                />
              )
            }

            return (
              <StyledNavItem eventKey={ item.eventKey } key={ index }>
                <StyledNavIcon><Icon name={ item.icon }/></StyledNavIcon>
                <StyledNavText>{ item.title }</StyledNavText>

                {
                  item.subItems && item.subItems.length ? item.subItems.map((subitem, index) => {
                    return (
                      <StyledNavItem eventKey={ subitem.eventKey } key={ index }>
                        <StyledNavText>{ subitem.title }</StyledNavText>
                      </StyledNavItem>
                    )
                  }) : null
                }
              </StyledNavItem>
            )
          }) : null
        }

        {
          bottomItems && bottomItems.length ? bottomItems.map((item, index) => {
            return (
              <StyledNavItem
                eventKey={item.eventKey}
                key={index}
                navitemStyle={index === 0 ? {marginTop: "auto"} : null}
              >
                <StyledNavIcon><Icon name={item.icon}/></StyledNavIcon>
                <StyledNavText>{item.title}</StyledNavText>

                {
                  item.subItems && item.subItems.length ? item.subItems.map((subitem, index) => {
                    return (
                      <StyledNavItem eventKey={subitem.eventKey} key={index}>
                        <StyledNavText>{subitem.title}</StyledNavText>
                      </StyledNavItem>
                    )
                  }) : null
                }
              </StyledNavItem>
            )
          }) : null
        }
      </StyledNav>
    </StyledSideNav>
  )
}

SideNavigation.propTypes = {
  items:           PropTypes.array,
  defaultEventKey: PropTypes.string,
  onSelect:        PropTypes.func
}

SideNavigation.defaultProps = {
  items: []
}

export default SideNavigation
