import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BSPopover from "react-bootstrap/Popover";
import "./Popover.scss";

class Popover extends React.Component {
  render() {
    const { content, placement, trigger, title, ...props } = this.props;
    return (
      <OverlayTrigger
        placement={placement}
        show={"false"}
        trigger={trigger}
        overlay={
          <BSPopover title={title} {...props}>
            {content}
          </BSPopover>
        }
      >
        {this.props.children}
      </OverlayTrigger>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"])
};

Popover.defaultProps = {
  placement: "auto",
  trigger: "hover"
};

export default Popover;
