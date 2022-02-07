import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Ink from "react-ink";

import BootstrapButton from "react-bootstrap/Button";

import "./Button.scss";
import "../../base/fixed-width.scss";

const LOADING_TEXTS = [
  "Still working...",
  "Mostly done...",
  "A bit more...",
  "Almost done..."
];

const LOADING_DELAY = 10000;

const Button = ({
  appearance,
  width,
  loading,
  disabled,
  block,
  children,
  onClick,
  role,
  className,
  ...props
}) => {
  const initialText = children;
  const [text, setText] = useState(initialText);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const prevLoading = usePrevious(loading);
  const _disabled = loading || disabled;

  let classes = classNames(className, {
    ["width-" + width]: width,
    disabled: _disabled,
  });

  let buttonTexts = [];

  if (loading) {
    const initialLoadingText =
      typeof loading === "string" ? loading : "Please wait...";

    buttonTexts = [initialLoadingText, ...LOADING_TEXTS];
  }

  useEffect(() => {
    let timer;

    if (loading) {
      if (!prevLoading) {
        // switched from not loading, to loading
        updateLoadingText();
      }

      loadingIndex < buttonTexts.length - 1 &&
        (timer = setTimeout(() => updateLoadingText(), LOADING_DELAY));
    } else if (prevLoading) {
      reset();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loading, loadingIndex]);

  useEffect(() => {
    let newText = loading ? buttonTexts[loadingIndex] : children;
    setText(newText);
  }, [children, loadingIndex]);

  function updateLoadingText() {
    setLoadingIndex(prev => prev + 1);
  }

  function reset() {
    setText(initialText);
    setLoadingIndex(-1);
  }

  function _onClick(e) {
    !_disabled && onClick && onClick(e);
  }

  if (role === 'secondary') {
    appearance = "outline-" + appearance;
  }

  if (role === 'tertiary' || role === 'link') {
    classes += ' btn-' + appearance;
    appearance = "link";
  }

  const bootstrapBtn = (
    <BootstrapButton
      variant={appearance}
      className={classes}
      disabled={_disabled}
      onClick={_onClick}
      {...props}
    >
      {text}
      <Ink />
    </BootstrapButton>
  );

  if (!block) {
    return bootstrapBtn;
  }
  
  return <div className="d-grid">{bootstrapBtn}</div> 
};

Button.propTypes = {
  role: PropTypes.oneOf(["primary", "tertiary", "secondary", "link"]),
  appearance: PropTypes.oneOf(["primary", "success", "danger", "warning", "info"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "100%"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
  onClick: PropTypes.func
};

Button.defaultProps = {
  role: "primary",
  appearance: "primary",
  type: "button",
  width: "100%",
  disabled: false,
  block: false
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default Button;
