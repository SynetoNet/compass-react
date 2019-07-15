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
      return <BSModal {...props}>{children}</BSModal>;
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

Modal.propTypes = {
  /**
   * Footer actions buttons: tertiary (left aligned), secondary & primary (right-aligned) in the form of:
   *
   * `{ label: "button text", onClick: () => {} }`
   *
   * Defaults to secondary button with **`Close`** label
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
