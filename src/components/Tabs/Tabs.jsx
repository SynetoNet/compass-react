import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapTabs from "react-bootstrap/Tabs";
import BootstrapTab from "react-bootstrap/Tab";
import "./Tabs.scss";

class Tabs extends React.Component {
  static Tab = BootstrapTab;
  constructor(props) {
    super(props);
  }
  render() {
    const { layout, align, ...props } = this.props;

    const classes = classNames({
      ["tabs-" + layout]: layout,
      ["tabs-" + align]: align
    });

    return (
      <div className={classes}>
        <BootstrapTabs {...props} />
      </div>
    );
  }
}

Tabs.propTypes = {
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
  align: PropTypes.oneOf(["left", "right"])
};

Tabs.defaultProps = {
  layout: "horizontal",
  align: "left"
};

export default Tabs;
