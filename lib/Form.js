import React__default from 'react';
import PropTypes__default from 'prop-types';
import { a as createCommonjsModule, b as _interopRequireDefault, h as unwrapExports, c as require$$0, d as require$$1, e as require$$2, k as _interopRequireWildcard, g as _ThemeProvider, i as styleInject } from './chunk-b1961f5e.js';
import { b as require$$0$1 } from './chunk-3beaf8a1.js';
import { a as Col_1 } from './chunk-ffe689f1.js';

var FormContext_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(React__default);

var FormContext = _react.default.createContext({
  controlId: undefined
});

var _default = FormContext;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormContext_1);

var FormGroup_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireWildcard(React__default);

var _FormContext = _interopRequireDefault(FormContext_1);



var FormGroup = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-group');
  var context = (0, _react.useMemo)(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return _react.default.createElement(_FormContext.default.Provider, {
    value: context
  }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children));
});

FormGroup.displayName = 'FormGroup';
var _default = FormGroup;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormGroup_1);

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var Feedback_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(PropTypes__default);

var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: _propTypes.default.string.isRequired,
  as: _propTypes.default.elementType
};
var defaultProps = {
  type: 'valid'
};

var Feedback = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      type = _ref.type,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "type"]);
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, type && type + "-feedback")
  }));
});

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
var _default = Feedback;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(Feedback_1);

var FormControl_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireWildcard(React__default);

var _warning = _interopRequireDefault(warning_1);

var _Feedback = _interopRequireDefault(Feedback_1);

var _FormContext = _interopRequireDefault(FormContext_1);



var FormControl = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      type = _ref.type,
      size = _ref.size,
      id = _ref.id,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "type", "size", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-control');
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
  }

  process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: (0, _classnames.default)(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});

FormControl.displayName = 'FormControl';
FormControl.Feedback = _Feedback.default;
var _default = FormControl;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormControl_1);

var FormCheckInput_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireWildcard(React__default);



var _FormContext = _interopRequireDefault(FormContext_1);

var defaultProps = {
  type: 'checkbox'
};

var FormCheckInput = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      isStatic = _ref.isStatic,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "isStatic"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-input');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return _react.default.createElement("input", (0, _extends2.default)({}, props, {
    ref: ref,
    id: id || controlId,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});

FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.defaultProps = defaultProps;
var _default = FormCheckInput;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormCheckInput_1);

var FormCheckLabel_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireWildcard(React__default);



var _FormContext = _interopRequireDefault(FormContext_1);

var defaultProps = {
  type: 'checkbox'
};

var FormCheckLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "htmlFor"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-label');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return _react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-label')
  }));
});

FormCheckLabel.displayName = 'FormCheckLabel';
FormCheckLabel.defaultProps = defaultProps;
var _default = FormCheckLabel;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormCheckLabel_1);

var FormCheck_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireWildcard(React__default);



var _FormContext = _interopRequireDefault(FormContext_1);

var _Feedback = _interopRequireDefault(Feedback_1);

var _FormCheckInput = _interopRequireDefault(FormCheckInput_1);

var _FormCheckLabel = _interopRequireDefault(FormCheckLabel_1);

var defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};

var FormCheck = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      disabled = _ref.disabled,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "className", "style", "title", "type", "label", "children", "custom"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;

  var input = _react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
    type: type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled
  }));

  return _react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, _react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
  }, children || _react.default.createElement(_react.default.Fragment, null, input, hasLabel && _react.default.createElement(_FormCheckLabel.default, {
    title: title
  }, label), (isValid || isInvalid) && _react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid'
  }, feedback))));
});

FormCheck.displayName = 'FormCheck';
FormCheck.defaultProps = defaultProps;
FormCheck.Input = _FormCheckInput.default;
FormCheck.Label = _FormCheckLabel.default;
var _default = FormCheck;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormCheck_1);

var FormLabel_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireWildcard(React__default);

var _warning = _interopRequireDefault(warning_1);

var _Col = _interopRequireDefault(Col_1);

var _FormContext = _interopRequireDefault(FormContext_1);



var defaultProps = {
  column: false,
  srOnly: false
};

var FormLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-label');
  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return _react.default.createElement(_Col.default, (0, _extends2.default)({
    as: "label",
    className: classes,
    htmlFor: htmlFor
  }, props));
  return (// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    _react.default.createElement("label", (0, _extends2.default)({
      ref: ref,
      className: classes,
      htmlFor: htmlFor
    }, props))
  );
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
var _default = FormLabel;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormLabel_1);

var FormText_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireDefault(React__default);



var FormText = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'small' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-text');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

FormText.displayName = 'FormText';
var _default = FormText;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(FormText_1);

var Form_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireDefault(React__default);

var _createWithBsPrefix = _interopRequireDefault(require$$0$1);



var _FormGroup = _interopRequireDefault(FormGroup_1);

var _FormControl = _interopRequireDefault(FormControl_1);

var _FormCheck = _interopRequireDefault(FormCheck_1);

var _FormLabel = _interopRequireDefault(FormLabel_1);

var _FormText = _interopRequireDefault(FormText_1);

var defaultProps = {
  inline: false
};

var Form = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});

Form.displayName = 'Form';
Form.defaultProps = defaultProps;
Form.Row = (0, _createWithBsPrefix.default)('form-row');
Form.Group = _FormGroup.default;
Form.Control = _FormControl.default;
Form.Check = _FormCheck.default;
Form.Label = _FormLabel.default;
Form.Text = _FormText.default;
var _default = Form;
exports.default = _default;
module.exports = exports["default"];
});

var BSForm = unwrapExports(Form_1);

var css = ".custom-control {\n  padding-left: 2rem;\n  min-height: 2em; }\n\n.custom-control-input {\n  outline: none; }\n\n.custom-control-label::after,\n.custom-control-label::before {\n  font-size: 16px;\n  top: 0.15rem;\n  left: -1.75rem;\n  width: 1em;\n  height: 1em; }\n";
styleInject(css);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Check = function Check(props) {
  return React__default.createElement(BSForm.Check, _extends({
    custom: true
  }, props));
};

Check.propTypes = {
  disabled: PropTypes__default.bool,
  inline: PropTypes__default.bool,
  type: PropTypes__default.oneOf(["radio", "checkbox"])
};
Check.defaultProps = {
  disabled: false,
  inline: false,
  type: "checkbox"
};

var reactSwitch_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});function _extends(){return (_extends=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);}return t}).apply(this,arguments)}var uncheckedIcon=React__default.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},React__default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),checkedIcon=React__default.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},React__default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function createBackgroundColor(t,i,o,s,n){var e=(t-o)/(i-o);if(0===e)return s;if(1===e)return n;for(var h="#",r=1;r<6;r+=2){var a=parseInt(s.substr(r,2),16),c=parseInt(n.substr(r,2),16),l=Math.round((1-e)*a+e*c).toString(16);1===l.length&&(l="0"+l),h+=l;}return h}function convertShorthandColor(t){if(7===t.length)return t;for(var i="#",o=1;o<4;o+=1)i+=t[o]+t[o];return i}function getBackgroundColor(t,i,o,s,n){return createBackgroundColor(t,i,o,convertShorthandColor(s),convertShorthandColor(n))}function objectWithoutProperties(t,i){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&-1===i.indexOf(s)&&(o[s]=t[s]);return o}var ReactSwitch=function(n){function t(t){n.call(this,t);var i=t.height,o=t.width,s=t.checked;this.t=t.handleDiameter||i-2,this.i=Math.max(o-i,o-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={s:s?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this);}return n&&(t.__proto__=n),((t.prototype=Object.create(n&&n.prototype)).constructor=t).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o});},t.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()});},t.prototype.x=function(t){var i=this.state,o=i.C,s=i.s,n=(this.props.checked?this.i:this.o)+t-o;i.R||t===o||this.setState({R:!0});var e=Math.min(this.i,Math.max(this.o,n));e!==s&&this.setState({s:e});},t.prototype.S=function(t){var i=this.state,o=i.s,s=i.R,n=i.m,e=this.props.checked,h=(this.i+this.o)/2,r=Date.now()-n;!s||r<250?this.T(t):e?h<o?this.setState({s:this.i}):this.T(t):o<h?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now();},t.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a));},t.prototype.r=function(t){t.preventDefault(),this.x(t.clientX);},t.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a);},t.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX);},t.prototype.l=function(t){this.x(t.touches[0].clientX);},t.prototype.u=function(t){t.preventDefault(),this.S(t);},t.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}));},t.prototype.b=function(){this.e=Date.now();},t.prototype.g=function(){this.setState({M:!0});},t.prototype.v=function(){this.setState({M:!1});},t.prototype.w=function(t){this.y=t;},t.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1});},t.prototype.T=function(t){var i=this.props;(0, i.onChange)(!i.checked,t,i.id);},t.prototype.render=function(){var t=this.props,i=t.disabled,o=t.className,s=t.offColor,n=t.onColor,e=t.offHandleColor,h=t.onHandleColor,r=t.checkedIcon,a=t.uncheckedIcon,c=t.boxShadow,l=t.activeBoxShadow,u=t.height,d=t.width,f=objectWithoutProperties(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),p=this.state,b=p.s,g=p.R,v=p.M,w={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:u/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},k={height:u,width:d,margin:Math.max(0,(this.t-u)/2),position:"relative",background:getBackgroundColor(b,this.i,this.o,s,n),borderRadius:u/2,cursor:i?"default":"pointer",WebkitTransition:g?null:"background 0.25s",MozTransition:g?null:"background 0.25s",transition:g?null:"background 0.25s"},y={height:u,width:Math.min(1.5*u,d-(this.t+u)/2+1),position:"relative",opacity:(b-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},C={height:u,width:Math.min(1.5*u,d-(this.t+u)/2+1),position:"absolute",opacity:1-(b-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},M={height:this.t,width:this.t,background:getBackgroundColor(b,this.i,this.o,e,h),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+b+"px)",top:Math.max(0,(u-this.t)/2),outline:0,boxShadow:v?l:c,border:0,WebkitTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return React__default.createElement("div",{className:o,style:w},React__default.createElement("div",{className:"react-switch-bg",style:k,onClick:i?null:this.f,onMouseDown:function(t){return t.preventDefault()}},r&&React__default.createElement("div",{style:y},r),a&&React__default.createElement("div",{style:C},a)),React__default.createElement("div",{className:"react-switch-handle",style:M,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.h,onTouchStart:i?null:this.c,onTouchMove:i?null:this.l,onTouchEnd:i?null:this.u,onTouchCancel:i?null:this.v}),React__default.createElement("input",_extends({},{type:"checkbox",role:"switch",disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},f,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},t}(React__default.Component);ReactSwitch.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:uncheckedIcon,checkedIcon:checkedIcon,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},exports.default=ReactSwitch;
});

unwrapExports(reactSwitch_min);

var reactSwitch_dev = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, '__esModule', { value: true });




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var uncheckedIcon = React__default.createElement('svg', {
  viewBox: "-2 -5 14 20",
  height: "100%",
  width: "100%",
  style: {
    position: "absolute",
    top: 0
  }
}, React__default.createElement('path', {
  d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
  fill: "#fff",
  fillRule: "evenodd"
}));
var checkedIcon = React__default.createElement('svg', {
  height: "100%",
  width: "100%",
  viewBox: "-2 -5 17 21",
  style: {
    position: "absolute",
    top: 0
  }
}, React__default.createElement('path', {
  d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
  fill: "#fff",
  fillRule: "evenodd"
}));

function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

  if (relativePos === 0) {
    return offColor;
  }

  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";

  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
    var newComponent = weightedValue.toString(16);

    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }

    newColor += newComponent;
  }

  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }

  var sixDigitColor = "#";

  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }

  return sixDigitColor;
}

function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
    return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
  }

  return null;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var ReactSwitch =
/*@__PURE__*/
function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };
    this.$lastDragAt = 0;
    this.$lastKeyUpAt = 0;
    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);
    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onClick = this.$onClick.bind(this);
    this.$onInputChange = this.$onInputChange.bind(this);
    this.$onKeyUp = this.$onKeyUp.bind(this);
    this.$setHasOutline = this.$setHasOutline.bind(this);
    this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
    this.$getInputRef = this.$getInputRef.bind(this);
  }

  if (Component) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create(Component && Component.prototype);
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.checked === this.props.checked) {
      return;
    }

    var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({
      $pos: $pos
    });
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart(clientX) {
    this.$inputRef.focus();
    this.setState({
      $startX: clientX,
      $hasOutline: true,
      $dragStartingTime: Date.now()
    });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag(clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var $isDragging = ref.$isDragging;
    var $pos = ref.$pos;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

    if (!$isDragging && clientX !== $startX) {
      this.setState({
        $isDragging: true
      });
    }

    var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

    if (newPos !== $pos) {
      this.setState({
        $pos: newPos
      });
    }
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop(event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var $dragStartingTime = ref.$dragStartingTime;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

    var timeSinceStart = Date.now() - $dragStartingTime;

    if (!$isDragging || timeSinceStart < 250) {
      this.$onChange(event); // Handle dragging from checked position
    } else if (checked) {
      if ($pos > halfwayCheckpoint) {
        this.setState({
          $pos: this.$checkedPos
        });
      } else {
        this.$onChange(event);
      } // Handle dragging from unchecked position

    } else if ($pos < halfwayCheckpoint) {
      this.setState({
        $pos: this.$uncheckedPos
      });
    } else {
      this.$onChange(event);
    }

    this.setState({
      $isDragging: false,
      $hasOutline: false
    });
    this.$lastDragAt = Date.now();
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown(event) {
    event.preventDefault(); // Ignore right click and scroll

    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove(event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp(event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart(event) {
    this.$checkedStateFromDragging = null;
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove(event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd(event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onInputChange = function $onInputChange(event) {
    // This condition is unfortunately needed in some browsers where the input's change event might get triggered
    // right after the dragstop event is triggered (occurs when dropping over a label element)
    if (Date.now() - this.$lastDragAt > 50) {
      this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

      if (Date.now() - this.$lastKeyUpAt > 50) {
        this.setState({
          $hasOutline: false
        });
      }
    }
  };

  ReactSwitch.prototype.$onKeyUp = function $onKeyUp() {
    this.$lastKeyUpAt = Date.now();
  };

  ReactSwitch.prototype.$setHasOutline = function $setHasOutline() {
    this.setState({
      $hasOutline: true
    });
  };

  ReactSwitch.prototype.$unsetHasOutline = function $unsetHasOutline() {
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$getInputRef = function $getInputRef(el) {
    this.$inputRef = el;
  };

  ReactSwitch.prototype.$onClick = function $onClick(event) {
    event.preventDefault();
    this.$inputRef.focus();
    this.$onChange(event);
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$onChange = function $onChange(event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.render = function render() {
    var ref = this.props;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon$$1 = ref.checkedIcon;
    var uncheckedIcon$$1 = ref.uncheckedIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var handleDiameter = ref.handleDiameter;
    var rest$1 = objectWithoutProperties(ref, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]);
    var rest = rest$1;
    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;
    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      direction: "ltr",
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
      borderRadius: height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };
    var checkedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "relative",
      opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var uncheckedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "absolute",
      opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      borderRadius: "50%",
      position: "absolute",
      transform: "translateX(" + $pos + "px)",
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };
    var inputStyle = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1
    };
    return React__default.createElement('div', {
      className: className,
      style: rootStyle
    }, React__default.createElement('div', {
      className: "react-switch-bg",
      style: backgroundStyle,
      onClick: disabled ? null : this.$onClick,
      onMouseDown: function (e) {
        return e.preventDefault();
      }
    }, checkedIcon$$1 && React__default.createElement('div', {
      style: checkedIconStyle
    }, checkedIcon$$1), uncheckedIcon$$1 && React__default.createElement('div', {
      style: uncheckedIconStyle
    }, uncheckedIcon$$1)), React__default.createElement('div', {
      className: "react-switch-handle",
      style: handleStyle,
      onClick: function (e) {
        return e.preventDefault();
      },
      onMouseDown: disabled ? null : this.$onMouseDown,
      onTouchStart: disabled ? null : this.$onTouchStart,
      onTouchMove: disabled ? null : this.$onTouchMove,
      onTouchEnd: disabled ? null : this.$onTouchEnd,
      onTouchCancel: disabled ? null : this.$unsetHasOutline
    }), React__default.createElement('input', _extends({}, {
      type: "checkbox",
      role: "switch",
      disabled: disabled,
      style: inputStyle
    }, rest, {
      ref: this.$getInputRef,
      onFocus: this.$setHasOutline,
      onBlur: this.$unsetHasOutline,
      onKeyUp: this.$onKeyUp,
      onChange: this.$onInputChange
    })));
  };

  return ReactSwitch;
}(React__default.Component);

ReactSwitch.propTypes = {
  checked: PropTypes__default.bool.isRequired,
  onChange: PropTypes__default.func.isRequired,
  disabled: PropTypes__default.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes__default.number,
  uncheckedIcon: PropTypes__default.oneOfType([PropTypes__default.bool, PropTypes__default.element]),
  checkedIcon: PropTypes__default.oneOfType([PropTypes__default.bool, PropTypes__default.element]),
  boxShadow: PropTypes__default.string,
  activeBoxShadow: PropTypes__default.string,
  height: PropTypes__default.number,
  width: PropTypes__default.number,
  id: PropTypes__default.string,
  className: PropTypes__default.string
};
ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

exports.default = ReactSwitch;
});

unwrapExports(reactSwitch_dev);

var reactSwitch = createCommonjsModule(function (module) {
if (process.env.NODE_ENV === "production") {
  module.exports = reactSwitch_min;
} else {
  module.exports = reactSwitch_dev;
}
});

var css$1 = ".custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.25rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n  height: 2px;\n  top: 8px; }\n";
styleInject(css$1);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var Switch = function Switch(props) {
  return React__default.createElement(reactSwitch, _extends$1({
    handleDiameter: 22,
    uncheckedIcon: false,
    checkedIcon: false,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
    height: 10,
    width: 40,
    offColor: "#e04c59"
  }, props));
};

Switch.propTypes = {
  disabled: PropTypes__default.bool
};
Switch.defaultProps = {
  disabled: false
};

var css$2 = ".form-label {\n  font-weight: bold; }\n\n.form-control {\n  border-color: #e1e8f1;\n  border-radius: 0.15rem;\n  -webkit-appearance: none; }\n  .form-control:focus {\n    border-color: #5b69e1; }\n\ninput:disabled {\n  cursor: no-drop; }\n";
styleInject(css$2);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return React__default.createElement(BSForm, this.props);
    }
  }]);

  return Form;
}(React__default.Component);

_defineProperty(Form, "Group", BSForm.Group);

_defineProperty(Form, "Label", BSForm.Label);

_defineProperty(Form, "Control", BSForm.Control);

_defineProperty(Form, "Check", Check);

_defineProperty(Form, "Text", BSForm.Text);

_defineProperty(Form, "Row", BSForm.Row);

_defineProperty(Form, "Switch", Switch);

export default Form;
//# sourceMappingURL=Form.js.map
