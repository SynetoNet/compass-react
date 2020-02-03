import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";

const Layout = props => {
  const { hasDrawer, drawer, header, content } = props;

  if (hasDrawer) {
    return (
      <section className="compass-layout compass-layout-has-drawer">
        <aside className="compass-layout-drawer">{drawer}</aside>

        <section className="compass-layout">
          <header className="compass-layout-header">{header}</header>
          <main className="compass-layout-content">{content}</main>
        </section>
      </section>
    );
  }

  return (
    <section className="compass-layout">
      <header className="compass-layout-header">{header}</header>
      <main className="compass-layout-content">{content}</main>
    </section>
  );
};

Layout.defaultProps = {
  hasDrawer: false
};

Layout.propTypes = {
  hasDrawer: PropTypes.bool,
  drawer: PropTypes.node,
  header: PropTypes.node,
  content: PropTypes.node
};

export default Layout;
