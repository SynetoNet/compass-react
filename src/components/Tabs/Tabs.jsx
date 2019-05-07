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
      <div className={`tabs-${this.props.layout}`}>
        <BootstrapTabs {...this.props} />
      </div>
    );
  }
}

Tabs.propTypes = {
  layout: PropTypes.oneOf(["vertical", "horizontal"])
};

Tabs.defaultProps = {
  layout: "horizontal"
};

export default Tabs;
