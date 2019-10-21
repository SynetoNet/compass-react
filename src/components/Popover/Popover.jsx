import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BSPopover from "react-bootstrap/Popover";

import "./Popover.scss";

class Popover extends React.Component {
  render() {
    const { content, placement, trigger, title, width, ...props } = this.props;
    const style = width ? { width, maxWidth: "none" } : null
    return (
      <div className="popover-container">
        <OverlayTrigger
          placement={placement}
          trigger={trigger}
          container={this}

          overlay={
            <BSPopover title={title} style={style}  {...props} >
              {content}
            </BSPopover>
          }
        >
          {this.props.children}
        </OverlayTrigger>
      </div>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"]),
  width: PropTypes.number
};

Popover.defaultProps = {
  placement: "auto",
  trigger: "hover"
};

export default Popover;
