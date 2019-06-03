import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
  color,
  width,
  loading,
  disabled,
  children,
  onClick,
  ...props
}) => {
  const initialText = children;
  const [text, setText] = useState(initialText);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const prevLoading = usePrevious(loading);
  const _disabled = loading || disabled;

  let classes = classNames({
    ["btn-" + color]: color,
    ["width-" + width]: width,
    disabled: _disabled
  });

  let buttonTexts = [];

  if (loading) {
    const initialLoadingText =
      typeof loading === "string" ? loading : "Please wait...";

    buttonTexts = [initialLoadingText, ...LOADING_TEXTS];
  }

  if (_disabled) {
    const replace = "btn-" + color;
    classes = classes.replace(replace, "");
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

  function _onClick() {
    !_disabled && onClick();
  }

  return (
    <BootstrapButton
      variant={color}
      className={classes}
      disabled={_disabled}
      onClick={_onClick}
      {...props}
    >
      {text}
    </BootstrapButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "tertiary", "secondary", "link"]),
  color: PropTypes.oneOf(["success", "danger", "default"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "auto"]),
  disabled: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: "secondary",
  color: "default",
  width: "auto",
  disabled: false
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default Button;
