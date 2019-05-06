import React from "react";
import PropTypes from "prop-types";

import BootstrapTabs from "react-bootstrap/Tabs";

import "./Tabs.scss";

const Tabs = ({ vertical, ...props }) => (
  <div
    className={`
  ${vertical ? "verticalContainer" : "horizontalContainer"}`}
  >
    <BootstrapTabs
      className={`
      ${vertical ? "vertical" : "horizontal"}`}
      {...props}
    />
  </div>
);

export default Tabs;
