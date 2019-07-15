'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_1 = require('./chunk-c8869f1e.js');
var __chunk_2 = require('./chunk-17e02351.js');
var __chunk_4 = require('./chunk-31ba1e02.js');

var css = ".width-32 {\n  width: 32px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-64 {\n  width: 64px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-96 {\n  width: 96px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-128 {\n  width: 128px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-160 {\n  width: 160px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-auto {\n  width: auto; }\n";
__chunk_2.styleInject(css);

var css$1 = ".btn {\n  border-radius: 2px;\n  position: relative; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: 0.5; }\n\n.btn-primary {\n  background-color: #5b69e1; }\n  .btn-primary:hover:not(:disabled) {\n    background-color: #4552c0; }\n  .btn-primary:active:not(:disabled) {\n    background-color: #3646c4; }\n  .btn-primary.btn-success {\n    background-color: #00b170; }\n    .btn-primary.btn-success:hover:not(:disabled) {\n      background-color: #009a61; }\n    .btn-primary.btn-success:active:not(:disabled) {\n      background-color: #008051; }\n  .btn-primary.btn-danger {\n    background-color: #e45664; }\n    .btn-primary.btn-danger:hover:not(:disabled) {\n      background-color: #cb3f4d; }\n    .btn-primary.btn-danger:active:not(:disabled) {\n      background-color: #a63d47; }\n  .btn-primary.btn-info {\n    background-color: #22a0e9; }\n    .btn-primary.btn-info:hover:not(:disabled) {\n      background-color: #2b93cf; }\n    .btn-primary.btn-info:active:not(:disabled) {\n      background-color: #1674ab; }\n  .btn-primary.btn-warning {\n    background-color: #f4be00;\n    color: #ffffff; }\n    .btn-primary.btn-warning:hover:not(:disabled) {\n      background-color: #c09500; }\n    .btn-primary.btn-warning:active:not(:disabled) {\n      background-color: #8b6b00; }\n\n.show > .btn-secondary.dropdown-toggle,\n.btn-secondary {\n  background-color: #ffffff;\n  border: 1px solid #4f5ed7;\n  color: #4f5ed7; }\n  .show > .btn-secondary.dropdown-toggle:hover:not(:disabled),\n  .btn-secondary:hover:not(:disabled) {\n    background-color: #4552c0;\n    border-color: #4552c0;\n    color: #ffffff; }\n  .show > .btn-secondary.dropdown-toggle:active:not(:disabled),\n  .btn-secondary:active:not(:disabled) {\n    background-color: #3646c4 !important;\n    border-color: #3646c4 !important;\n    color: #ffffff; }\n  .show > .btn-secondary.dropdown-toggle:focus,\n  .btn-secondary:focus {\n    box-shadow: 0 0 0 0.2rem #b1b9ff !important; }\n  .show > .btn-secondary.dropdown-toggle:disabled,\n  .btn-secondary:disabled {\n    border-color: #4f5ed7;\n    color: #4f5ed7;\n    background-color: #ffffff; }\n  .show > .btn-secondary.dropdown-toggle.btn-success,\n  .btn-secondary.btn-success {\n    background-color: #ffffff;\n    border-color: #00b170;\n    color: #008051; }\n    .show > .btn-secondary.dropdown-toggle.btn-success:hover:not(:disabled),\n    .btn-secondary.btn-success:hover:not(:disabled) {\n      background-color: #009a61;\n      border-color: #009a61;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-success:active:not(:disabled),\n    .btn-secondary.btn-success:active:not(:disabled) {\n      background-color: #008051 !important;\n      border-color: #008051 !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-success:focus,\n    .btn-secondary.btn-success:focus {\n      box-shadow: 0 0 0 0.2rem #a3e0c8 !important; }\n  .show > .btn-secondary.dropdown-toggle.btn-danger,\n  .btn-secondary.btn-danger {\n    background-color: #ffffff;\n    border-color: #e45664;\n    color: #a63d47; }\n    .show > .btn-secondary.dropdown-toggle.btn-danger:hover:not(:disabled),\n    .btn-secondary.btn-danger:hover:not(:disabled) {\n      background-color: #cb3f4d;\n      border-color: #cb3f4d;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-danger:active:not(:disabled),\n    .btn-secondary.btn-danger:active:not(:disabled) {\n      background-color: #a63d47 !important;\n      border-color: #a63d47 !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-danger:focus,\n    .btn-secondary.btn-danger:focus {\n      box-shadow: 0 0 0 0.2rem #f5bfc5 !important; }\n  .show > .btn-secondary.dropdown-toggle.btn-warning,\n  .btn-secondary.btn-warning {\n    background-color: #ffffff;\n    border-color: #f4be00;\n    color: #8b6b00; }\n    .show > .btn-secondary.dropdown-toggle.btn-warning:hover:not(:disabled),\n    .btn-secondary.btn-warning:hover:not(:disabled) {\n      background-color: #c09500;\n      border-color: #c09500;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-warning:active:not(:disabled),\n    .btn-secondary.btn-warning:active:not(:disabled) {\n      background-color: #8b6b00 !important;\n      border-color: #8b6b00 !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-warning:focus,\n    .btn-secondary.btn-warning:focus {\n      box-shadow: 0 0 0 0.2rem #e6d6a3 !important; }\n  .show > .btn-secondary.dropdown-toggle.btn-info,\n  .btn-secondary.btn-info {\n    background-color: #ffffff;\n    border-color: #22a0e9;\n    color: #1674ab; }\n    .show > .btn-secondary.dropdown-toggle.btn-info:hover:not(:disabled),\n    .btn-secondary.btn-info:hover:not(:disabled) {\n      background-color: #2b93cf;\n      border-color: #2b93cf;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-info:active:not(:disabled),\n    .btn-secondary.btn-info:active:not(:disabled) {\n      background-color: #1674ab !important;\n      border-color: #1674ab !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-info:focus,\n    .btn-secondary.btn-info:focus {\n      box-shadow: 0 0 0 0.2rem #aedaf6 !important; }\n\n.btn-tertiary {\n  color: #4f5ed7;\n  border-color: transparent !important; }\n  .btn-tertiary:hover:not(:disabled) {\n    background-color: #dadefd;\n    color: #3646c4; }\n  .btn-tertiary:active:not(:disabled) {\n    background-color: #b1b9ff;\n    color: #3646c4; }\n  .btn-tertiary:disabled {\n    color: #4f5ed7; }\n  .btn-tertiary.btn-success {\n    color: #00b170;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-success:hover:not(:disabled) {\n      background-color: #def4eb;\n      color: #008051; }\n    .btn-tertiary.btn-success:active:not(:disabled) {\n      background-color: #a3e0c8 !important;\n      color: #008051 !important; }\n  .btn-tertiary.btn-danger {\n    color: #e45664;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-danger:hover:not(:disabled) {\n      background-color: #fbe8e9;\n      color: #a63d47; }\n    .btn-tertiary.btn-danger:active:not(:disabled) {\n      background-color: #f5bfc5 !important;\n      color: #a63d47 !important; }\n  .btn-tertiary.btn-warning {\n    color: #c09500;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-warning:hover:not(:disabled) {\n      background-color: #f5f0de;\n      color: #8b6b00; }\n    .btn-tertiary.btn-warning:active:not(:disabled) {\n      background-color: #e6d6a3 !important;\n      color: #8b6b00 !important; }\n  .btn-tertiary.btn-info {\n    color: #22a0e9;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-info:hover:not(:disabled) {\n      background-color: #e1f1fc;\n      color: #1674ab; }\n    .btn-tertiary.btn-info:active:not(:disabled) {\n      background-color: #aedaf6 !important;\n      color: #1674ab !important; }\n";
__chunk_2.styleInject(css$1);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var LOADING_TEXTS = ["Still working...", "Mostly done...", "A bit more...", "Almost done..."];
var LOADING_DELAY = 10000;

var Button = function Button(_ref) {
  var _classNames;

  var color = _ref.color,
      width = _ref.width,
      loading = _ref.loading,
      disabled = _ref.disabled,
      children = _ref.children,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["color", "width", "loading", "disabled", "children", "onClick"]);

  var initialText = children;

  var _useState = React.useState(initialText),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = React.useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      loadingIndex = _useState4[0],
      setLoadingIndex = _useState4[1];

  var prevLoading = usePrevious(loading);

  var _disabled = loading || disabled;

  var classes = __chunk_1.classNames((_classNames = {}, _defineProperty(_classNames, "btn-" + color, color), _defineProperty(_classNames, "width-" + width, width), _defineProperty(_classNames, "disabled", _disabled), _classNames));
  var buttonTexts = [];

  if (loading) {
    var initialLoadingText = typeof loading === "string" ? loading : "Please wait...";
    buttonTexts = [initialLoadingText].concat(LOADING_TEXTS);
  }

  React.useEffect(function () {
    var timer;

    if (loading) {
      if (!prevLoading) {
        // switched from not loading, to loading
        updateLoadingText();
      }

      loadingIndex < buttonTexts.length - 1 && (timer = setTimeout(function () {
        return updateLoadingText();
      }, LOADING_DELAY));
    } else if (prevLoading) {
      reset();
    }

    return function () {
      clearTimeout(timer);
    };
  }, [loading, loadingIndex]);
  React.useEffect(function () {
    var newText = loading ? buttonTexts[loadingIndex] : children;
    setText(newText);
  }, [children, loadingIndex]);

  function updateLoadingText() {
    setLoadingIndex(function (prev) {
      return prev + 1;
    });
  }

  function reset() {
    setText(initialText);
    setLoadingIndex(-1);
  }

  function _onClick() {
    !_disabled && onClick && onClick();
  }

  return React__default.createElement(__chunk_4.BootstrapButton, _extends({
    variant: color,
    className: classes,
    disabled: _disabled,
    onClick: _onClick
  }, props), text, React__default.createElement(__chunk_4.Ink, null));
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "tertiary", "secondary", "link"]),
  color: PropTypes.oneOf(["accent", "success", "danger", "warning", "info"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "auto"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
  onClick: PropTypes.func
};
Button.defaultProps = {
  variant: "secondary",
  color: "accent",
  type: "button",
  width: "auto",
  disabled: false
};

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

exports.Button = Button;
//# sourceMappingURL=chunk-154fc642.js.map
