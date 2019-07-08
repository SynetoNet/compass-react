'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes$1 = _interopDefault(require('prop-types'));
var __chunk_1 = require('./chunk-1b20a27d.js');
var __chunk_3 = require('./chunk-8bc4d49b.js');
var __chunk_4 = require('./chunk-8f147875.js');
require('react-dom');
var __chunk_5 = require('./chunk-3dab2278.js');

var TabContext_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _react = __chunk_1._interopRequireDefault(React__default);

var TabContext = _react.default.createContext(null);

var _default = TabContext;
exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(TabContext_1);

var TabContainer_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _inheritsLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$2$2);

var _react = __chunk_1._interopRequireDefault(React__default);

var _uncontrollable = __chunk_1._interopRequireDefault(__chunk_5.require$$3);

var _TabContext = __chunk_1._interopRequireDefault(TabContext_1);

var _SelectableContext = __chunk_1._interopRequireDefault(__chunk_5.require$$6$1);

var TabContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabContainer, _React$Component);

  function TabContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getControlledId = function (key) {
      return _this.getKey(key, 'tabpane');
    };

    _this.getControllerId = function (key) {
      return _this.getKey(key, 'tab');
    };

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: (0, _extends2.default)({}, prevState.tabContext, {
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _this$props = this.props,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onSelect = _this$props2.onSelect;
    return _react.default.createElement(_TabContext.default.Provider, {
      value: this.state.tabContext
    }, _react.default.createElement(_SelectableContext.default.Provider, {
      value: onSelect
    }, children));
  };

  return TabContainer;
}(_react.default.Component);

var _default = (0, _uncontrollable.default)(TabContainer, {
  activeKey: 'onSelect'
});

exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(TabContainer_1);

var TabContent_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _inheritsLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$2$2);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);



var TabContent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return TabContent;
}(_react.default.Component);

var _default = (0, __chunk_1._ThemeProvider.createBootstrapComponent)(TabContent, 'tab-content');

exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(TabContent_1);

var TabPane_1 = __chunk_1.createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireWildcard(React__default);



var _TabContext = __chunk_1._interopRequireDefault(TabContext_1);

var _SelectableContext = __chunk_1._interopRequireWildcard(__chunk_5.require$$6$1);

var _Fade = __chunk_1._interopRequireDefault(__chunk_3.require$$6$1);

function useTabContext(props) {
  var context = (0, _react.useContext)(_TabContext.default);
  if (!context) return props;
  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0, _objectWithoutPropertiesLoose2.default)(context, ["activeKey", "getControlledId", "getControllerId"]);
  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = (0, _SelectableContext.makeEventKey)(props.eventKey);
  return (0, _extends2.default)({}, props, {
    active: props.active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade.default),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = _react.default.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_useTabContext, ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  var prefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tab-pane');
  if (!active && unmountOnExit) return null;

  var pane = _react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: (0, _classnames.default)(className, prefix, {
      active: active
    })
  }));

  if (Transition) pane = _react.default.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: mountOnEnter
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return _react.default.createElement(_TabContext.default.Provider, {
    value: null
  }, _react.default.createElement(_SelectableContext.default.Provider, {
    value: null
  }, pane));
});

TabPane.displayName = 'TabPane';
var _default = TabPane;
exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(TabPane_1);

var Tab_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$2$2);

var _react = __chunk_1._interopRequireDefault(React__default);

var _TabContainer = __chunk_1._interopRequireDefault(TabContainer_1);

var _TabContent = __chunk_1._interopRequireDefault(TabContent_1);

var _TabPane = __chunk_1._interopRequireDefault(TabPane_1);

/* eslint-disable react/require-render-return, react/no-unused-prop-types */
var Tab =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
  };

  return Tab;
}(_react.default.Component);

Tab.Container = _TabContainer.default;
Tab.Content = _TabContent.default;
Tab.Pane = _TabPane.default;
var _default = Tab;
exports.default = _default;
module.exports = exports["default"];
});

var Tab = __chunk_1.unwrapExports(Tab_1);

var all_1 = __chunk_1.createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;



var _createChainableTypeChecker2 = _interopRequireDefault(__chunk_3._createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];
});

__chunk_1.unwrapExports(all_1);

var CardContext = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _react = __chunk_1._interopRequireDefault(React__default);

var _default = _react.default.createContext(null);

exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(CardContext);

var mapContextToProps_1 = __chunk_1.createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = mapContextToProps;

var _react = _interopRequireDefault(React__default);

var _forwardRef = _interopRequireDefault(__chunk_1.require$$1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayName = function getDisplayName(Component) {
  var name = typeof Component === 'string' ? Component : Component.name || Component.displayName;
  return name ? "ContextTransform(" + name + ")" : 'ContextTransform';
};

var ensureConsumer = function ensureConsumer(c) {
  return c.Consumer || c;
};

function $mapContextToProps(_ref, Component) {
  var maybeArrayOfConsumers = _ref.consumers,
      mapToProps = _ref.mapToProps,
      displayName = _ref.displayName,
      _ref$forwardRefAs = _ref.forwardRefAs,
      forwardRefAs = _ref$forwardRefAs === void 0 ? 'ref' : _ref$forwardRefAs;
  var consumers = maybeArrayOfConsumers;

  if (!Array.isArray(maybeArrayOfConsumers)) {
    consumers = [maybeArrayOfConsumers];
  }

  var SingleConsumer = ensureConsumer(consumers[0]);

  function singleRender(props, ref) {
    var _extends2;

    var propsWithRef = _extends((_extends2 = {}, _extends2[forwardRefAs] = ref, _extends2), props);

    return _react.default.createElement(SingleConsumer, null, function (value) {
      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var _extends3;

    var propsWithRef = _extends((_extends3 = {}, _extends3[forwardRefAs] = ref, _extends3), props);

    return consumers.reduceRight(function (inner, Context) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var Consumer = ensureConsumer(Context);
        return _react.default.createElement(Consumer, null, function (value) {
          return inner.apply(void 0, args.concat([value]));
        });
      };
    }, function () {
      for (var _len2 = arguments.length, contexts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        contexts[_key2] = arguments[_key2];
      }

      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps.apply(void 0, contexts.concat([props]))));
    })();
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  return (0, _forwardRef.default)(contextTransform, {
    displayName: displayName || getDisplayName(Component)
  });
}

function mapContextToProps(maybeOpts, mapToProps, Component) {
  if (arguments.length === 2) return $mapContextToProps(maybeOpts, mapToProps);
  return $mapContextToProps({
    consumers: maybeOpts,
    mapToProps: mapToProps
  }, Component);
}
});

__chunk_1.unwrapExports(mapContextToProps_1);

var AbstractNav_1 = __chunk_1.createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _inheritsLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$2$2);

var _react = __chunk_1._interopRequireDefault(React__default);

var _querySelectorAll = __chunk_1._interopRequireDefault(__chunk_4.require$$4);

var _mapContextToProps = __chunk_1._interopRequireDefault(mapContextToProps_1);

var _SelectableContext = __chunk_1._interopRequireWildcard(__chunk_5.require$$6$1);

var _NavContext = __chunk_1._interopRequireDefault(__chunk_5.require$$5);

var _TabContext = __chunk_1._interopRequireDefault(TabContext_1);

var noop = function noop() {};

var AbstractNav =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AbstractNav, _React$Component);

  function AbstractNav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          parentOnSelect = _this$props.parentOnSelect;
      if (key == null) return;
      if (onSelect) onSelect(key, event);
      if (parentOnSelect) parentOnSelect(key, event);
    };

    _this.handleKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (onKeyDown) onKeyDown(event);
      var nextActiveChild;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextActiveChild = _this.getNextActiveChild(-1);
          break;

        case 'ArrowRight':
        case 'ArrowDown':
          nextActiveChild = _this.getNextActiveChild(1);
          break;

        default:
          return;
      }

      if (!nextActiveChild) return;
      event.preventDefault();

      _this.handleSelect(nextActiveChild.dataset.rbEventKey, event);

      _this._needsRefocus = true;
    };

    _this.attachRef = function (ref) {
      _this.listNode = ref;
    };

    _this.state = {
      navContext: null
    };
    return _this;
  }

  AbstractNav.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var activeKey = _ref.activeKey,
        getControlledId = _ref.getControlledId,
        getControllerId = _ref.getControllerId,
        role = _ref.role;
    return {
      navContext: {
        role: role,
        // used by NavLink to determine it's role
        activeKey: (0, _SelectableContext.makeEventKey)(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      }
    };
  };

  var _proto = AbstractNav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this._needsRefocus || !this.listNode) return;
    var activeChild = this.listNode.querySelector('[data-rb-event-key].active');
    if (activeChild) activeChild.focus();
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    if (!this.listNode) return null;
    var items = (0, _querySelectorAll.default)(this.listNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = this.listNode.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$as = _this$props2.as,
        Component = _this$props2$as === void 0 ? 'ul' : _this$props2$as,
        _ = _this$props2.onSelect,
        _0 = _this$props2.parentOnSelect,
        _1 = _this$props2.getControlledId,
        _2 = _this$props2.getControllerId,
        _3 = _this$props2.activeKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["as", "onSelect", "parentOnSelect", "getControlledId", "getControllerId", "activeKey"]);

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return _react.default.createElement(_SelectableContext.default.Provider, {
      value: this.handleSelect
    }, _react.default.createElement(_NavContext.default.Provider, {
      value: this.state.navContext
    }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      onKeyDown: this.handleKeyDown,
      ref: this.attachRef
    }))));
  };

  return AbstractNav;
}(_react.default.Component);

var _default = (0, _mapContextToProps.default)([_SelectableContext.default, _TabContext.default], function (parentOnSelect, tabContext, _ref2) {
  var role = _ref2.role;
  if (!tabContext) return {
    parentOnSelect: parentOnSelect
  };
  var activeKey = tabContext.activeKey,
      getControllerId = tabContext.getControllerId,
      getControlledId = tabContext.getControlledId;
  return {
    activeKey: activeKey,
    parentOnSelect: parentOnSelect,
    role: role || 'tablist',
    // pass these two through to avoid having to listen to
    // both Tab and Nav contexts in NavLink
    getControllerId: getControllerId,
    getControlledId: getControlledId
  };
}, AbstractNav);

exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(AbstractNav_1);

var NavItem_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);



var NavItem = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "as"]);
  bsPrefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-item');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

NavItem.displayName = 'NavItem';
var _default = NavItem;
exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(NavItem_1);

var AbstractNavItem_1 = __chunk_1.createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireWildcard(React__default);

var _useEventCallback = __chunk_1._interopRequireDefault(__chunk_4.require$$4$1);

var _NavContext = __chunk_1._interopRequireDefault(__chunk_5.require$$5);

var _SelectableContext = __chunk_1._interopRequireWildcard(__chunk_5.require$$6$1);

var defaultProps = {
  disabled: false
};

var AbstractNavItem = _react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "className", "tabIndex", "eventKey", "onSelect", "onClick", "as"]);
  var navKey = (0, _SelectableContext.makeEventKey)(eventKey, props.href);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    props['data-rb-event-key'] = navKey;
    props.id = navContext.getControllerId(navKey);
    props['aria-controls'] = navContext.getControlledId(navKey);
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: (0, _classnames.default)(className, isActive && 'active')
  }));
});

AbstractNavItem.defaultProps = defaultProps;
var _default = AbstractNavItem;
exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(AbstractNavItem_1);

var NavLink_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);

var _SafeAnchor = __chunk_1._interopRequireDefault(__chunk_4.require$$4$2);

var _AbstractNavItem = __chunk_1._interopRequireDefault(AbstractNavItem_1);



var defaultProps = {
  disabled: false,
  as: _SafeAnchor.default
};

var NavLink = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);
  bsPrefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-link');
  return _react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: (0, _classnames.default)(className, bsPrefix, disabled && 'disabled')
  }));
});

NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
var _default = NavLink;
exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(NavLink_1);

var Nav_1 = __chunk_1.createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _all = __chunk_1._interopRequireDefault(all_1);

var _react = __chunk_1._interopRequireWildcard(React__default);

var _hook = __chunk_1._interopRequireDefault(__chunk_5.require$$5$1);



var _NavbarContext = __chunk_1._interopRequireDefault(__chunk_5.require$$6);

var _CardContext = __chunk_1._interopRequireDefault(CardContext);

var _AbstractNav = __chunk_1._interopRequireDefault(AbstractNav_1);

var _NavItem = __chunk_1._interopRequireDefault(NavItem_1);

var _NavLink = __chunk_1._interopRequireDefault(NavLink_1);

var defaultProps = {
  justify: false,
  fill: false
};

var Nav = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = (0, _hook.default)(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  bsPrefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav');
  var navbarBsPrefix, cardHeaderBsPrefix;
  var navbarContext = (0, _react.useContext)(_NavbarContext.default);
  var cardContext = (0, _react.useContext)(_CardContext.default);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    navbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return _react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});

Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem.default;
Nav.Link = _NavLink.default;
Nav._Nav = Nav; // for Testing until enzyme is working with context

var _default = Nav;
exports.default = _default;
module.exports = exports["default"];
});

var Nav = __chunk_1.unwrapExports(Nav_1);

var css = ".nav-tabs .nav-link {\n  color: #181c37;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  position: relative; }\n  .nav-tabs .nav-link.active {\n    color: #5b69e1;\n    border-color: #dde3f0 #dde3f0 #fff; }\n  .nav-tabs .nav-link:hover::before, .nav-tabs .nav-link.active::before {\n    display: block;\n    background: #5b69e1;\n    content: \"\";\n    position: absolute; }\n\n.tabs-horizontal .tab-content {\n  margin-top: 20px; }\n\n.tabs-horizontal .nav-link:hover:not(.active) {\n  border-color: transparent;\n  color: #5b69e1; }\n\n.tabs-horizontal .nav-link.active::before {\n  height: 3px;\n  top: -1px;\n  left: -1px;\n  right: -1px; }\n\n.tabs-horizontal .nav-item {\n  text-align: center;\n  display: flex; }\n  .tabs-horizontal .nav-item.tabs-extra {\n    align-self: stretch; }\n  .tabs-horizontal .nav-item .nav-link.active {\n    height: 100%; }\n\n.tabs-horizontal.tabs-align-end .nav-tabs {\n  justify-content: flex-end; }\n\n.tabs-vertical {\n  display: flex;\n  border: none; }\n  .tabs-vertical .tab-content {\n    margin-left: 20px; }\n  .tabs-vertical .nav-tabs {\n    flex-flow: column;\n    border-bottom: none;\n    border-right: 1px solid #e1e8f1; }\n    .tabs-vertical .nav-tabs .nav-link:hover:not(.active) {\n      border-color: transparent;\n      color: #5b69e1; }\n    .tabs-vertical .nav-tabs .nav-link.active {\n      border-right: none;\n      border-bottom: 1px solid #e1e8f1;\n      border-left-color: transparent;\n      margin-right: -1px; }\n    .tabs-vertical .nav-tabs .nav-link.active::before {\n      width: 3px;\n      top: -1px;\n      left: -1px;\n      bottom: -1px; }\n\n.tabs-extra {\n  flex: 1;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n  padding-top: 1px; }\n\n.nav-link_content {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 200px; }\n";
__chunk_1.styleInject(css);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (tab) {
      var onSelect = _this.props.onSelect;
      /**
       * Hi-jack the original onSelect() handler
       *
       * Don't call the onSelect handler if this gets called
       * for a Tab (eventKey) that is not contained within the passed Tabs
       *
       * Required for Controlled Tabs that have a Dropdown
       * Because they share the same `SelectableContext` in React-Bootstrap
       * and selecting one Dropdown option will trigger a change
       * with the `eventKey` value for that option, causing the Tab to change also
       */

      if (tab.length && !_this._getTabKeys().includes(tab)) {
        return;
      }

      onSelect && onSelect(tab);
    });

    _defineProperty(_assertThisInitialized(_this), "_getChildren", function (children) {
      return Array.isArray(children) ? children : [children];
    });

    _defineProperty(_assertThisInitialized(_this), "_getTabKeys", function () {
      var children = _this.props.children;
      return _this._getChildren(children).map(function (tab) {
        return tab.props.eventKey;
      });
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          layout = _this$props.layout,
          align = _this$props.align,
          children = _this$props.children,
          extra = _this$props.extra,
          props = _objectWithoutProperties(_this$props, ["layout", "align", "children", "extra"]);

      var childrenArray = this._getChildren(children);

      var classes = __chunk_1.classNames((_classNames = {}, _defineProperty(_classNames, "tabs-" + layout, layout), _defineProperty(_classNames, "tabs-align-" + align, align), _classNames));
      return React__default.createElement("div", {
        className: classes
      }, React__default.createElement(Tab.Container, _extends({
        defaultActiveKey: this._getTabKeys()[0]
      }, props, {
        onSelect: this.onSelect
      }), React__default.createElement(Nav, {
        className: "nav-tabs"
      }, extra && align === "end" && this._renderExtra(extra), childrenArray.map(function (_ref) {
        var props = _ref.props;

        var eventKey = props.eventKey,
            title = props.title,
            others = _objectWithoutProperties(props, ["eventKey", "title"]);

        return React__default.createElement(Nav.Item, {
          key: eventKey
        }, React__default.createElement(Nav.Link, _extends({
          eventKey: eventKey
        }, others), React__default.createElement("div", {
          className: "nav-link_content"
        }, title)));
      }), extra && align === "start" && this._renderExtra(extra)), React__default.createElement(Tab.Content, null, childrenArray.map(function (_ref2) {
        var props = _ref2.props;

        var eventKey = props.eventKey,
            children = props.children,
            others = _objectWithoutProperties(props, ["eventKey", "children"]);

        return React__default.createElement(Tab.Pane, _extends({
          key: eventKey,
          eventKey: eventKey
        }, others), children);
      }))));
    }
  }, {
    key: "_renderExtra",
    value: function _renderExtra(extra) {
      return React__default.createElement("div", {
        className: "tabs-extra"
      }, extra);
    }
  }]);

  return Tabs;
}(React__default.Component);

_defineProperty(Tabs, "Tab", Tab);

Tabs.propTypes = {
  layout: PropTypes$1.oneOf(["vertical", "horizontal"]),
  align: PropTypes$1.oneOf(["start", "end"]),

  /** additional content you want to render inline with the Tab Navigation */
  extra: PropTypes$1.element,

  /** the **`eventKey`** of the active Tab (used for controlled Tabs) */
  activeKey: PropTypes$1.string,

  /** the **`eventKey`** of the active Tab onj initial render, defaults to first Tab */
  defaultActiveKey: PropTypes$1.string,

  /**
   * @param {String} eventKey
   */
  onSelect: PropTypes$1.func
};
Tabs.defaultProps = {
  layout: "horizontal",
  align: "start"
};

module.exports = Tabs;
//# sourceMappingURL=Tabs.js.map
