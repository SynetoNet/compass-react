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
        <Dropdown.Toggle variant={variant}>
          {label}
          <Ink />
        </Dropdown.Toggle>
        {items ? this.renderItems(items) : children}
      </BSDropdown>
    );
  }

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
