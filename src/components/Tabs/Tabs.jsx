import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./Tabs.scss";

class Tabs extends React.Component {
  static Tab = Tab;

  render() {
    const { layout, align, children, extra, ...props } = this.props;
    const childrenArray = Array.isArray(children) ? children : [children];

    const classes = classNames({
      ["tabs-" + layout]: layout,
      ["tabs-align-" + align]: align
    });

    return (
      <div className={classes}>
        <Tab.Container
          defaultActiveKey={childrenArray[0].props.eventKey}
          {...props}
        >
          <Nav className="nav-tabs">
            {extra && align === "end" && this._renderExtra(extra)}

            {childrenArray.map(({ props }) => {
              const { eventKey, title, ...others } = props;

              return (
                <Nav.Item key={eventKey}>
                  <Nav.Link eventKey={eventKey} {...others}>
                    {title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
            {layout === "vertical" ? this._renderBorderFiller() : ""}

            {extra && align === "start" && this._renderExtra(extra)}
          </Nav>
          <Tab.Content>
            {childrenArray.map(({ props }) => {
              const { eventKey, children, ...others } = props;
              return (
                <Tab.Pane key={eventKey} eventKey={eventKey} {...others}>
                  {children}
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }

  _renderBorderFiller() {
    return <div className="border-filler" />;
  }

  _renderExtra(extra) {
    return <div className="tabs-extra">{extra}</div>;
  }
}

Tabs.propTypes = {
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
  align: PropTypes.oneOf(["start", "end"]),
  /** additional content you want to render inline with the Tab Navigation */
  extra: PropTypes.element
};

Tabs.defaultProps = {
  layout: "horizontal",
  align: "start"
};

export default Tabs;
