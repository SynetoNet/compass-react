import React from "react";
import PropTypes from "prop-types";
import Ink from "react-ink";
// import classNames from "classnames";

import BSDropdown from "react-bootstrap/Dropdown";

import "./Dropdown.scss";

class Dropdown extends React.Component {
  static Toggle = BSDropdown.Toggle;
  static Item = BSDropdown.Item;
  static Menu = BSDropdown.Menu;
  static Header = BSDropdown.Header;
  static Divider = BSDropdown.Divider;

  render() {
    const { items, label, variant, children, ...props } = this.props;
    // let classes = classNames({});

    return (
      <BSDropdown {...props}>
        <BSDropdown.Toggle variant={variant}>
          {label}
          <Ink />
        </BSDropdown.Toggle>
        {items ? this.renderItems(items) : children}
      </BSDropdown>
    );
  }

  renderItems(items) {
    return (
      <BSDropdown.Menu>
        {items.map(({ label, eventKey, ...otherProps }) => {
          const key = eventKey || label;
          return (
            <BSDropdown.Item key={key} eventKey={key} {...otherProps}>
              {label}
            </BSDropdown.Item>
          );
        })}
      </BSDropdown.Menu>
    );
  }
}

Dropdown.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      eventKey: PropTypes.string,
      onSelect: PropTypes.func
    })
  )
};

Dropdown.defaultProps = {
  variant: "secondary"
};

export default Dropdown;
