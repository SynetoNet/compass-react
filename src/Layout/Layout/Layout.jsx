import React     from "react"
import PropTypes from "prop-types"
import "./Layout.scss"

const Layout = props => {
  const { hasDrawer, drawer, header, content, headerStyle, drawerStyle, contentStyle } = props

  if ( hasDrawer ) {
    return (
      <section className="compass-layout">
        <aside className="compass-layout-drawer" style={ drawerStyle }>{ drawer }</aside>

        <section className="compass-layout-with-drawer">
          <header className="compass-layout-header" style={ headerStyle }>{ header }</header>
          <main className="compass-layout-content" style={ contentStyle }>{ content }</main>
        </section>
      </section>
    )
  }

  return (
    <section className="compass-layout">
      <header className="compass-layout-header" style={ headerStyle }>{ header }</header>
      <main className="compass-layout-content" style={ contentStyle }>{ content }</main>
    </section>
  )
}

Layout.defaultProps = {
  hasDrawer: false
}

Layout.propTypes = {
  hasDrawer:    PropTypes.bool,
  drawer:       PropTypes.node,
  header:       PropTypes.node,
  content:      PropTypes.node,
  headerStyle:  PropTypes.object,
  drawerStyle:  PropTypes.object,
  contentStyle: PropTypes.object
}

export default Layout
