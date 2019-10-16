import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

import BSModal from "react-bootstrap/Modal";
import Button from "../Button/Button";
import "./Modal.scss";

class Modal extends React.Component {
  static Header = BSModal.Header;
  static Title = BSModal.Title;
  static Body = ({ children, ...props }) => {
    return (
      <>
        <div className="modal-shadow-top" />
        <BSModal.Body {...props}>
          <div className="modal-body-inner">{children}</div>
        </BSModal.Body>
        <div className="modal-shadow-bottom" />
      </>
    );
  };
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
      return (
        <BSModal {...props} onEntering={this.onEnter}>
          {children}
        </BSModal>
      );
    }

    return (
      <BSModal {...props} onEntering={this.onEnter}>
        {title && (
          <Modal.Header closeButton={closeButton}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        {content && <Modal.Body>{content}</Modal.Body>}
        <Modal.Footer>{this._renderFooter(actions)}</Modal.Footer>
      </BSModal>
    );
  }

  _renderFooter = ({ primary, secondary, tertiary }) => {
    const elements = [];

    if (tertiary) {
      elements.push(
        <div className="modal-footer_tertiary" key="tertiary">
          <Button
            role="tertiary"
            onClick={tertiary.onClick}
            className="px-0"
            disabled={tertiary.disabled ? true : false}
          >
            {tertiary.label}
          </Button>
        </div>
      );
    }

    if (secondary) {
      elements.push(
        <Button
          role="secondary"
          onClick={secondary.onClick || this.props.onHide}
          key="secondary"
          disabled={secondary.disabled ? true : false}
        >
          {secondary.label}
        </Button>
      );
    }

    if (primary) {
      elements.push(
        <Button
          onClick={primary.onClick}
          key="primary"
          className="ml-2"
          disabled={primary.disabled ? true : false}
        >
          {primary.label}
        </Button>
      );
    }

    return elements;
  };

  onEnter = modal => {
    const { onEntering } = this.props;

    // support stacked modals
    const START_Z_INDEX = 1040;
    const nrModals = document.querySelectorAll(".modal.show").length;
    modal.style.zIndex = START_Z_INDEX + 2 * nrModals + 1;
    const modalBackdrop = document.querySelectorAll(".modal-backdrop.show")[
      nrModals - 1
    ];
    modalBackdrop.style.zIndex = START_Z_INDEX + 2 * nrModals;

    onEntering && onEntering();
  };
}

const actionsShape = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
Modal.propTypes = {
  /**
   * Footer actions buttons: tertiary (left aligned), secondary & primary (right-aligned) in the form of:
   *
   * `{ label: "button text", onClick: () => {} }`
   *
   * Defaults to secondary button with **`Close`** label
   */
  actions: PropTypes.shape({
    primary: PropTypes.shape(actionsShape),
    secondary: PropTypes.shape(actionsShape),
    tertiary: PropTypes.shape(actionsShape)
  }),
  /** String or any component to be rendered */
  content: PropTypes.node,
  /** String or any component to be rendered */
  title: PropTypes.node,
  backdrop: PropTypes.oneOf([false, true, "static"]),
  size: PropTypes.oneOf(["sm", "lg"])
};

Modal.defaultProps = {
  actions: {
    secondary: {
      label: "Close"
    }
  },
  backdrop: "static"
};

export default Modal;
