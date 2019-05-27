import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

import BSModal from "react-bootstrap/Modal";
import Button from "../Button/Button";
import "./Modal.scss";

class Modal extends React.Component {
  static Header = BSModal.Header;
  static Title = BSModal.Title;
  static Body = BSModal.Body;
  static Footer = BSModal.Footer;

  render() {
    const {
      children,
      title,
      content,
      actions,
      closeButton,
      ...props
    } = this.props;
    // const classes = classNames({});

    if (children) {
      return <BSModal {...props}>{children}</BSModal>;
    }

    return (
      <BSModal {...props}>
        {title && (
          <BSModal.Header closeButton={closeButton}>
            <BSModal.Title>{title}</BSModal.Title>
          </BSModal.Header>
        )}
        {content && <BSModal.Body>{content}</BSModal.Body>}
        <BSModal.Footer>{this._renderFooter(actions)}</BSModal.Footer>
      </BSModal>
    );
  }

  _renderFooter = ({ primary, secondary, tertiary }) => {
    const elements = [];

    if (tertiary) {
      elements.push(
        <div className="modal-footer_tertiary" key="tertiary">
          <Button
            variant="tertiary"
            onClick={tertiary.onClick}
            className="px-0"
          >
            {tertiary.label}
          </Button>
        </div>
      );
    }

    if (secondary) {
      elements.push(
        <Button
          variant="secondary"
          onClick={secondary.onClick || this.props.onHide}
          key="secondary"
        >
          {secondary.label}
        </Button>
      );
    }

    if (primary) {
      elements.push(
        <Button
          variant="primary"
          onClick={primary.onClick}
          key="primary"
          className="ml-2"
        >
          {primary.label}
        </Button>
      );
    }

    return elements;
  };
}

Modal.propTypes = {
  /**
   * Footer actions buttons: tertiary (left aligned), secondary & primary (right-aligned) in the form of:
   *
   * `{ label: "button text", onClick: () => {} }`
   *
   * Defaults to **`Close`** secondary button
   */
  actions: PropTypes.shape({
    primary: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    }),
    secondary: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    }),
    tertiary: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    })
  }),
  /** String or any component to be rendered */
  content: PropTypes.node,
  /** String or any component to be rendered */
  title: PropTypes.node
};

Modal.defaultProps = {
  actions: {
    secondary: {
      label: "Close"
    }
  }
};

export default Modal;
