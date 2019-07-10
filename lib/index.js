'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_1 = require('./chunk-a0298d7c.js');
var __chunk_2 = require('./chunk-17e02351.js');
var __chunk_3 = require('./chunk-915cb8ba.js');
require('./chunk-ee7919b2.js');
var __chunk_5 = require('./chunk-8b2f9712.js');
require('./chunk-2671b315.js');
var __chunk_7 = require('./chunk-cb603066.js');
require('react-dom');
require('./chunk-57850cad.js');
var __chunk_9 = require('./chunk-810f5613.js');
var __chunk_10 = require('./chunk-0d65d235.js');
require('./chunk-c5a80ffd.js');
var __chunk_12 = require('./chunk-ac45e622.js');
require('./chunk-c73a26f6.js');
require('./chunk-da59e328.js');
var __chunk_15 = require('./chunk-9dedfe09.js');

var Badge_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);



var defaultProps = {
  pill: false
};

var Badge = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "pill", "className"]);
  var prefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'badge');
  return _react.default.createElement("span", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;
module.exports = exports["default"];
});

var BootstrapBadge = __chunk_1.unwrapExports(Badge_1);

var css = ".badge {\n  height: 20px;\n  width: auto;\n  display: inline-block;\n  padding: 0 0.875rem;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 20px;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .badge.outline {\n    line-height: 18px; }\n  .badge.block {\n    display: block; }\n\n.badge-success {\n  background-color: #def4eb;\n  color: #008051; }\n  .badge-success.strong {\n    background-color: #00b170;\n    color: #ffffff; }\n  .badge-success.outline {\n    background-color: #ffffff;\n    border: 1px solid #a3e0c8; }\n\n.badge-danger {\n  background-color: #fbe8e9;\n  color: #a63d47; }\n  .badge-danger.strong {\n    background-color: #e45664;\n    color: #ffffff; }\n  .badge-danger.outline {\n    background-color: #ffffff;\n    border: 1px solid #f5bfc5; }\n\n.badge-info {\n  background-color: #e1f1fc;\n  color: #1674ab; }\n  .badge-info.strong {\n    background-color: #22a0e9;\n    color: #ffffff; }\n  .badge-info.outline {\n    border: 1px solid #aedaf6;\n    background-color: #ffffff; }\n\n.badge-warning {\n  background-color: #f5f0de;\n  color: #8b6b00; }\n  .badge-warning.strong {\n    background-color: #c09500;\n    color: #ffffff; }\n  .badge-warning.outline {\n    background-color: #ffffff;\n    border: 1px solid #e6d6a3; }\n\n.badge-secondary {\n  background-color: #e1e8f1;\n  color: #343855; }\n  .badge-secondary.strong {\n    background-color: #7a8095;\n    color: #ffffff; }\n  .badge-secondary.outline {\n    background-color: #ffffff;\n    border: 1px solid #e1e8f1;\n    color: #a8acbb; }\n";
__chunk_2.styleInject(css);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(_ref) {
  var _classNames;

  var color = _ref.color,
      variant = _ref.variant,
      width = _ref.width,
      block = _ref.block,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      props = _objectWithoutProperties(_ref, ["color", "variant", "width", "block", "className"]);

  var classes = (__chunk_1.classNames((_classNames = {
    outline: variant === "outline",
    strong: variant === "strong"
  }, _defineProperty(_classNames, "width-" + width, width), _defineProperty(_classNames, "block", block), _classNames)) + " ".concat(className)).trim();
  return React__default.createElement(BootstrapBadge, _extends({
    variant: color,
    className: classes
  }, props, {
    pill: true
  }));
};

Badge.propTypes = {
  color: PropTypes.oneOf(["success", "danger", "warning", "info", "secondary"]),
  variant: PropTypes.oneOf(["default", "strong", "outline"]),
  width: PropTypes.oneOf([32, 64, 96, 128, "auto"]),

  /** Makes badge stretch to the size of it's parent */
  block: PropTypes.bool
};
Badge.defaultProps = {
  color: "secondary",
  variant: "default",
  width: "auto",
  block: false
};

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Icon = function Icon(_ref) {
  var _classNames;

  var name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  var classes = __chunk_1.classNames((_classNames = {}, _defineProperty$1(_classNames, name, name), _defineProperty$1(_classNames, "fa-".concat(size), size), _defineProperty$1(_classNames, className, className), _classNames));
  return React__default.createElement("i", {
    className: classes,
    style: _objectSpread({
      color: color
    }, style)
  });
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"])
};
Icon.defaultProps = {
  size: "md"
};

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListActions = function ListActions(_ref) {
  var single = _ref.single,
      actions = _ref.actions;
  var classes = __chunk_1.classNames(_defineProperty$2({}, "list_actions--single", single)) + " list_actions";
  return React__default.createElement("div", {
    className: classes
  }, React__default.createElement(__chunk_7.Dropdown, {
    alignRight: true,
    label: React__default.createElement(Icon, {
      name: "fas fa-ellipsis-h"
    }),
    items: actions
  }));
};

ListActions.propTypes = {
  single: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onSelect: PropTypes.func
  }))
};

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListItem = function ListItem(_ref) {
  var label = _ref.label,
      children = _ref.children,
      actions = _ref.actions,
      tabbed = _ref.tabbed;

  if (tabbed) {
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("dt", {
      className: "list_item list_label"
    }, label), React__default.createElement("dd", {
      className: "list_item list_value"
    }, children, renderActions()));
  }

  return React__default.createElement("li", {
    className: "list_item"
  }, React__default.createElement("div", {
    className: "list_label"
  }, label), React__default.createElement("div", {
    className: "list_value"
  }, children), renderActions());

  function renderActions() {
    if (!actions) {
      return null;
    }

    var _actions = actions.map(function (action) {
      return _objectSpread$1({}, action, {
        onSelect: function onSelect() {
          action.onSelect(label);
        }
      });
    });

    return React__default.createElement(ListActions, {
      actions: _actions
    });
  }
};

ListItem.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(["auto", "tabbed"])
};

var css$1 = ".list-wrapper {\n  position: relative; }\n\nul.list {\n  margin: 0;\n  list-style-type: none;\n  padding: 0; }\n\ndl.list {\n  display: grid;\n  grid-template-columns: minmax(2rem, -webkit-max-content) 1fr;\n  grid-template-columns: minmax(2rem, max-content) 1fr;\n  margin: 0; }\n\n.list_header {\n  display: flex;\n  align-items: center;\n  padding-bottom: 0.75rem; }\n  .list-wrapper:not(.compact) .list_header {\n    border-bottom: 1px #eff2f9 solid; }\n\n.list_title {\n  flex: 1;\n  margin: 0; }\n\n.list_item {\n  margin: 0;\n  padding: 0.15rem 0; }\n  .list-wrapper:not(.compact) .list_item {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem; }\n  .list-wrapper.compact.actions .list_item {\n    max-width: calc(100% - 30px); }\n\n.list-wrapper:not(.compact) .list_item:not(:last-of-type) {\n  border-bottom: 1px #eff2f9 solid; }\n\nli.list_item {\n  display: flex;\n  align-items: center; }\n  li.list_item .list_value {\n    flex: 1; }\n\n.list_label {\n  font-weight: bold; }\n\n.list_value {\n  padding-left: 1em;\n  color: #a8acbb; }\n\ndd.list_value {\n  display: flex;\n  justify-content: space-between; }\n\n.list_actions {\n  visibility: hidden;\n  padding-left: 1em; }\n  .list-wrapper.compact.actions:hover .list_actions {\n    visibility: visible; }\n  .list-wrapper.actions .list_item:hover .list_actions {\n    visibility: visible; }\n\n.list_actions--single {\n  position: absolute;\n  top: 0.25em;\n  right: 0; }\n";
__chunk_2.styleInject(css$1);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var List = function List(_ref) {
  var title = _ref.title,
      tabbed = _ref.tabbed,
      compact = _ref.compact,
      actions = _ref.actions,
      items = _ref.items,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      props = _objectWithoutProperties$1(_ref, ["title", "tabbed", "compact", "actions", "items", "children", "className"]);

  var classes = (__chunk_1.classNames({
    compact: compact,
    actions: actions
  }) + " list-wrapper ".concat(className)).trim();

  if (!items && !children) {
    throw "List component require either the \"items\" prop, or the \"children\" prop";
  }

  var content = children || getContent(items);
  var ListElement = tabbed ? "dl" : "ul";
  return React__default.createElement("div", {
    className: classes
  }, renderTitle(), renderActions(), React__default.createElement(ListElement, _extends$1({
    className: "list"
  }, props), content));

  function getContent(items) {
    return items.map(function (_ref2, index) {
      var value = _ref2.value,
          label = _ref2.label;
      var key = typeof label === "string" ? label : index;

      var _actions = !compact ? actions : undefined;

      return React__default.createElement(ListItem, {
        key: key,
        label: label,
        tabbed: tabbed,
        actions: _actions
      }, value);
    });
  }

  function renderTitle() {
    return title ? React__default.createElement("header", {
      className: "list_header"
    }, React__default.createElement("h4", {
      className: "list_title"
    }, title)) : null;
  }

  function renderActions() {
    if (!actions || !compact) {
      return null;
    }

    return React__default.createElement(ListActions, {
      actions: actions,
      single: true
    });
  }
};

List.Item = ListItem;
List.propTypes = {
  title: PropTypes.string,
  compact: PropTypes.bool,
  tabbed: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.node
  })),
  children: PropTypes.oneOfType([PropTypes.shape({
    type: ListItem
  }), PropTypes.arrayOf(PropTypes.shape({
    type: ListItem
  }))]),
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onSelect: PropTypes.func
  }))
};
List.defaultProps = {
  compact: false,
  tabbed: false
};

var OverlayTrigger_1 = __chunk_1.createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _inheritsLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$2);

var _contains = __chunk_1._interopRequireDefault(__chunk_10.require$$1);

var _react = __chunk_1._interopRequireWildcard(React__default);

var _reactDom = __chunk_1._interopRequireDefault(__chunk_5._reactDom);

var _warning = __chunk_1._interopRequireDefault(__chunk_12.require$$4);

var _Overlay = __chunk_1._interopRequireDefault(__chunk_15.Overlay_1);

var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react.default.Component);

var normalizeDelay = function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
};

var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
}; // eslint-disable-next-line react/no-multi-comp

var OverlayTrigger =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inheritsLoose2.default)(OverlayTrigger, _React$Component2);

  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component2.call(this, props, context) || this;

    _this.getTarget = function () {
      return _reactDom.default.findDOMNode(_this.trigger.current);
    };

    _this.handleShow = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'show';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.show) {
        _this.show();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'show') _this.show();
      }, delay.show);
    };

    _this.handleHide = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'hide';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.hide) {
        _this.hide();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'hide') _this.hide();
      }, delay.hide);
    };

    _this.handleFocus = function (e) {
      var _this$getChildProps = _this.getChildProps(),
          onFocus = _this$getChildProps.onFocus;

      _this.handleShow(e);

      if (onFocus) onFocus(e);
    };

    _this.handleBlur = function (e) {
      var _this$getChildProps2 = _this.getChildProps(),
          onBlur = _this$getChildProps2.onBlur;

      _this.handleHide(e);

      if (onBlur) onBlur(e);
    };

    _this.handleClick = function (e) {
      var _this$getChildProps3 = _this.getChildProps(),
          onClick = _this$getChildProps3.onClick;

      if (_this.state.show) _this.hide();else _this.show();
      if (onClick) onClick(e);
    };

    _this.handleMouseOver = function (e) {
      _this.handleMouseOverOut(_this.handleShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleHide, e, 'toElement');
    };

    _this.trigger = _react.default.createRef();
    _this.state = {
      show: !!props.defaultShow
    }; // We add aria-describedby in the case where the overlay is a role="tooltip"
    // for other cases describedby isn't appropriate (e.g. a popover with inputs) so we don't add it.

    _this.ariaModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var popper = data.instance.popper;

        var target = _this.getTarget();

        if (!_this.state.show || !target) return data;
        var role = popper.getAttribute('role') || '';

        if (popper.id && role.toLowerCase() === 'tooltip') {
          target.setAttribute('aria-describedby', popper.id);
        }

        return data;
      }
    };
    return _this;
  }

  var _proto2 = OverlayTrigger.prototype;

  _proto2.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this._timeout);
  };

  _proto2.getChildProps = function getChildProps() {
    return _react.default.Children.only(this.props.children).props;
  };

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  _proto2.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !(0, _contains.default)(target, related)) {
      handler(e);
    }
  };

  _proto2.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto2.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto2.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["trigger", "overlay", "children", "popperConfig"]);
    delete props.delay;
    delete props.defaultShow;

    var child = _react.default.Children.only(children);

    var triggerProps = {};
    var triggers = trigger == null ? [] : [].concat(trigger);

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick;
    }

    if (triggers.indexOf('focus') !== -1) {
      triggerProps.onFocus = this.handleShow;
      triggerProps.onBlur = this.handleHide;
    }

    if (triggers.indexOf('hover') !== -1) {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(triggers.length >= 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : void 0;
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(RefHolder, {
      ref: this.trigger
    }, (0, _react.cloneElement)(child, triggerProps)), _react.default.createElement(_Overlay.default, (0, _extends2.default)({}, props, {
      popperConfig: (0, _extends2.default)({}, popperConfig, {
        modifiers: (0, _extends2.default)({}, popperConfig.modifiers, {
          ariaModifier: this.ariaModifier
        })
      }),
      show: this.state.show,
      onHide: this.handleHide,
      target: this.getTarget
    }), overlay));
  };

  return OverlayTrigger;
}(_react.default.Component);

OverlayTrigger.defaultProps = defaultProps;
var _default = OverlayTrigger;
exports.default = _default;
module.exports = exports["default"];
});

var OverlayTrigger = __chunk_1.unwrapExports(OverlayTrigger_1);

var Tooltip_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);

var _isRequiredForA11y = __chunk_1._interopRequireDefault(__chunk_9.require$$4);



var defaultProps = {
  placement: 'right'
};

function Tooltip(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    ref: innerRef,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: (0, _classnames.default)(className, bsPrefix, "bs-tooltip-" + placement)
  }, props), _react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), _react.default.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
}

Tooltip.defaultProps = defaultProps;

var _default = (0, __chunk_1._ThemeProvider.createBootstrapComponent)(Tooltip, 'tooltip');

exports.default = _default;
module.exports = exports["default"];
});

var BSTooltip = __chunk_1.unwrapExports(Tooltip_1);

var css$2 = ".tooltip-light .tooltip-inner {\n  color: #181c37;\n  background-color: #ffffff;\n  border: 1px solid #181c37; }\n";
__chunk_2.styleInject(css$2);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          placement = _this$props.placement,
          trigger = _this$props.trigger,
          theme = _this$props.theme,
          props = _objectWithoutProperties$2(_this$props, ["text", "placement", "trigger", "theme"]);

      var classes = __chunk_1.classNames(_defineProperty$4({}, "tooltip-".concat(theme), theme));
      return React__default.createElement(OverlayTrigger, _extends$2({
        placement: placement
      }, getTriggerProp(trigger), {
        overlay: React__default.createElement(BSTooltip, _extends$2({
          className: classes
        }, props), text)
      }), this.props.children);
    }
  }]);

  return Tooltip;
}(React__default.Component);

function getTriggerProp(trigger) {
  // force close on click outside
  if (trigger === "click") {
    return {
      trigger: trigger,
      rootClose: true
    };
  }

  return {
    trigger: trigger
  };
}

Tooltip.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  text: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"])
};
Tooltip.defaultProps = {
  theme: "dark",
  placement: "auto",
  trigger: "hover"
};

var css$3 = ".popover-container {\n  display: inline-block; }\n";
__chunk_2.styleInject(css$3);

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(Popover, _React$Component);

  function Popover() {
    _classCallCheck$1(this, Popover);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(Popover).apply(this, arguments));
  }

  _createClass$1(Popover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          placement = _this$props.placement,
          trigger = _this$props.trigger,
          title = _this$props.title,
          props = _objectWithoutProperties$3(_this$props, ["content", "placement", "trigger", "title"]);

      return React__default.createElement("div", {
        className: "popover-container"
      }, React__default.createElement(OverlayTrigger, _extends$3({
        placement: placement
      }, getTriggerProp$1(trigger), {
        container: this,
        overlay: React__default.createElement(__chunk_15.Popover, _extends$3({
          title: title
        }, props), content)
      }), this.props.children));
    }
  }]);

  return Popover;
}(React__default.Component);

function getTriggerProp$1(trigger) {
  // force close on click outside
  if (trigger === "click") {
    return {
      trigger: trigger,
      rootClose: true
    };
  }

  return {
    trigger: trigger
  };
}

Popover.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right", "auto"]),
  trigger: PropTypes.oneOf(["focus", "click", "hover"])
};
Popover.defaultProps = {
  placement: "auto",
  trigger: "hover"
};

var Container_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);



var defaultProps = {
  fluid: false
};

var Container = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? prefix + "-fluid" : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];
});

var Container = __chunk_1.unwrapExports(Container_1);

var Row_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _inheritsLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$2);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);



var Row =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "noGutters", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(_react.default.Component);

Row.defaultProps = {
  noGutters: false
};

var _default = (0, __chunk_1._ThemeProvider.createBootstrapComponent)(Row, 'row');

exports.default = _default;
module.exports = exports["default"];
});

var Row = __chunk_1.unwrapExports(Row_1);

exports.Button = __chunk_3.Button;
exports.Dropdown = __chunk_7.Dropdown;
exports.Col = __chunk_12.Col;
exports.Badge = Badge;
exports.Container = Container;
exports.Icon = Icon;
exports.List = List;
exports.Popover = Popover;
exports.Row = Row;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map
