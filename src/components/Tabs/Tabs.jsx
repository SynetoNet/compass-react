import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./Tabs.scss";

class Tabs extends React.Component {
  static Tab = Tab;
  static defaultProps = {
    layout: "horizontal",
    align: "start"
  };

  render() {
    const { layout, align, children, extra, ...props } = this.props;
    const childrenArray = this._getChildren(children);

    const classes = classNames({
      ["tabs-" + layout]: layout,
      ["tabs-align-" + align]: align
    });

    return (
      <div className={classes}>
        <Tab.Container
          defaultActiveKey={this._getTabKeys()[0]}
          {...props}
          onSelect={this.onSelect}
        >
          <Nav className="nav-tabs">
            {extra && align === "end" && this._renderExtra(extra)}

            {childrenArray.map(({ props }) => {
              const { eventKey, title, ...others } = props;

              return (
                <Nav.Item key={eventKey}>
                  <Nav.Link eventKey={eventKey} {...others}>
                    <div className="nav-link_content">{title}</div>
                  </Nav.Link>
                </Nav.Item>
              );
            })}

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

  onSelect = tab => {
    const { onSelect } = this.props;

    /**
     * Hi-jack the original onSelect() handler
     *
     * Don't call the onSelect handler if this gets called
     * for a Tab (eventKey) that is not contained within the passed Tabs
     *
     * Required for Controlled Tabs that have a Dropdown
     * Because they share the same `SelectableContext` in React-Bootstrap
     * and selecting one Dropdown option will trigger a change
     * with the `eventKey` value for that option, causing the Tab to change also
     */
    if (tab.length && !this._getTabKeys().includes(tab)) {
      return;
    }

    onSelect && onSelect(tab);
  };

  _renderExtra(extra) {
    return <div className="tabs-extra">{extra}</div>;
  }

  _getChildren = children => {
    return Array.isArray(children) ? children : [children];
  };

  _getTabKeys = () => {
    const { children } = this.props;
    return this._getChildren(children).map(tab => tab.props.eventKey);
  };
}

Tabs.propTypes = {
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
  align: PropTypes.oneOf(["start", "end"]),
  /** additional content you want to render inline with the Tab Navigation */
  extra: PropTypes.element,
  /** the **`eventKey`** of the active Tab (used for controlled Tabs) */
  activeKey: PropTypes.string,
  /** the **`eventKey`** of the active Tab onj initial render, defaults to first Tab */
  defaultActiveKey: PropTypes.string,
  /**
   * @param {String} eventKey
   */
  onSelect: PropTypes.func
};

export default Tabs;
