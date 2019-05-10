import React from "react";
import PropTypes from "prop-types";

import BootstrapTabs from "react-bootstrap/Tabs";
import BootstrapTab from "react-bootstrap/Tab";
import "./Tabs.scss";

class Tabs extends React.Component {
  static Tab = BootstrapTab;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`tabs-${this.props.layout} alignment-${
          this.props.alignment
        }`}
      >
        <BootstrapTabs {...this.props} />
      </div>
    );
  }
}

Tabs.propTypes = {
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
  alignment: PropTypes.oneOf(["left", "right"])
};

Tabs.defaultProps = {
  layout: "horizontal",
  alignment: "left"
};

export default Tabs;
