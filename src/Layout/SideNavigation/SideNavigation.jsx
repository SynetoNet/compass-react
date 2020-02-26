import React, { useState }                         from 'react'
import PropTypes                                   from "prop-types"
import Icon                                        from "../../components/Icon/Icon"
import SideNav, { Nav, NavItem, NavIcon, NavText } from './components/StyledSideNav'
import { Brand }                                   from "./components/Brand"
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const SideNavigation = (props) => {
  const { items } = props

  const [ expanded, setExpanded ] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <SideNav
      onSelect={ (selected) => { console.log(selected) } }
      onToggle={ toggleExpanded }
      expanded={ expanded }
      onMouseOver={ () => setExpanded(true) }
      onMouseLeave={ () => setExpanded(false) }
    >
      <Nav defaultSelected="dashboard">
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
              <NavItem eventKey={ item.eventKey } key={ index }>
                <NavIcon><Icon name={ item.icon }/></NavIcon>
                <NavText>{ item.title }</NavText>

                {
                  item.subItems && item.subItems.length ? item.subItems.map((subitem, index) => {
                    return (
                      <NavItem eventKey={ subitem.eventKey } key={ index }>
                        <NavText>{ subitem.title }</NavText>
                      </NavItem>
                    )
                  }) : null
                }
              </NavItem>
            )
          }) : null
        }
      </Nav>
    </SideNav>
  )
}

SideNavigation.propTypes = {
  items: PropTypes.array
}

SideNavigation.defaultProps = {
  items: []
}

export default SideNavigation
