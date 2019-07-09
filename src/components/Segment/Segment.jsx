import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "../Button/Button";

import "./Segment.scss";

class Segment extends React.Component {
  static Tab = Tab;

  render() {
    const childrenArray = this._getChildren(this.props.children);
    return (
      <div className="segment">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {childrenArray.map(({ props }, key) => {
            const { disabled } = props;
            return (
              <Segment.Tab
                disabled={disabled}
                eventKey={props.eventKey}
                title={<Button disabled={disabled}>{props.title}</Button>}
                key={key}
              >
                <div className="segment-content">{props.children}</div>
              </Segment.Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
  _getChildren = children => {
    return Array.isArray(children) ? children : [children];
  };
}

Segment.propTypes = {
  eventKey: PropTypes.string,
  title: PropTypes.node,
  disabled: PropTypes.bool
};

Segment.defaultProps = { disabled: false };

export default Segment;
