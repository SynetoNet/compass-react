import React from "react";
import PropTypes from "prop-types";
import Ink from "react-ink";

import BSDropdown from "react-bootstrap/Dropdown";

import "./Dropdown.scss";

class Dropdown extends React.Component {
  static Toggle = BSDropdown.Toggle;
  static Item = BSDropdown.Item;
  static Menu = BSDropdown.Menu;
  static Header = BSDropdown.Header;
  static Divider = BSDropdown.Divider;

  render() {
    const { items, label, role, disabledToggle, children, ...props } = this.props;

    return (
      <BSDropdown {...props}>
        {this.renderTrigger(label, role, disabledToggle)}
        {items ? this.renderItems(items) : children}
      </BSDropdown>
    );
  }

  renderTrigger = (label, role, disabledToggle) => {
    if (typeof label !== "string") {
      const trigger = React.forwardRef((props, ref) => {
        return (
          <div
            {...props}
            ref={ref}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            {label}
          </div>
        );
      });

      return (
        <Dropdown.Toggle as={trigger} className="dropdown-no-caret" disabled={disabledToggle}>
          {label}
        </Dropdown.Toggle>
      );
    }

    return (
      <Dropdown.Toggle variant={role} disabled={disabledToggle}>
        {label}
        <Ink />
      </Dropdown.Toggle>
    );
  };

  renderItems(items) {
    return (
      <Dropdown.Menu>
        {items.map(({ label, eventKey, ...otherProps }) => {
          const key = eventKey || label;
          return (
            <Dropdown.Item key={key} eventKey={key} {...otherProps}>
              {label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    );
  }
}

Dropdown.propTypes = {
  role: PropTypes.string,
  label: PropTypes.node.isRequired,
  alignRight: PropTypes.bool,
  disabledToggle: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      eventKey: PropTypes.string,
      onSelect: PropTypes.func
    })
  )
};

Dropdown.defaultProps = {
  role: "secondary",
  alignRight: false,
  disabledToggle: false
};

export default Dropdown;
