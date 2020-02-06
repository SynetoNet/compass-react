import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Styled from "react-styleguidist/lib/client/rsg-components/Styled";

const styles = ({ color }) => ({
  link: {
    "&, &:link, &:visited": {
      fontSize: "inherit",
      color: "#fff",
      textDecoration: "none"
    },
    "&:hover, &:active": {
      // isolate: false,
      color: "#fff",
      textDecoration: "underline",
      cursor: "pointer"
    }
  }
});

export const LinkRenderer = ({ classes, children, ...props }) => {
  return (
    <a {...props} className={cx(classes.link, props.className)}>
      {children}
    </a>
  );
};

LinkRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};

export default Styled(styles)(LinkRenderer);
