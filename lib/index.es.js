import react from 'react';
import PropTypes from 'prop-types';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var interopRequireWildcard = createCommonjsModule(function (module) {
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;
});

unwrapExports(interopRequireWildcard);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

var forwardRef_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}
});

unwrapExports(forwardRef_1);

var ThemeProvider_1 = createCommonjsModule(function (module, exports) {





exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _inheritsLoose2 = interopRequireDefault(inheritsLoose);

var _forwardRef = interopRequireDefault(forwardRef_1);

var _react = interopRequireWildcard(react);

var ThemeContext = _react.default.createContext(new Map());

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    var prefixes = (0, _react.useContext)(ThemeContext);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      // eslint-disable-next-line react/prop-types
      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;
});

unwrapExports(ThemeProvider_1);
var ThemeProvider_2 = ThemeProvider_1.useBootstrapPrefix;
var ThemeProvider_3 = ThemeProvider_1.createBootstrapComponent;
var ThemeProvider_4 = ThemeProvider_1.ThemeConsumer;

var Badge_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _classnames = interopRequireDefault(classnames);

var _react = interopRequireDefault(react);



var defaultProps = {
  pill: false
};

var Badge = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "pill", "className"]);
  var prefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'badge');
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

var BootstrapBadge = unwrapExports(Badge_1);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* BRAND */\n/* ACCENT COLORS */\n/* NEUTRAL COLORS */\n/* ADJUST COLORS */\n/* SEMANTIC COLORS */\n.badge {\n  height: 24px;\n  width: auto;\n  display: inline-block;\n  padding: 0 12px;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 24px;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .badge.light {\n    line-height: 22px; }\n\n.badge-success {\n  background-color: #d9f2e8;\n  color: #007547; }\n  .badge-success.strong {\n    background-color: #00a865;\n    color: #fff; }\n  .badge-success.light {\n    background-color: #fff;\n    border: 1px solid #99dcc1; }\n\n.badge-danger {\n  background-color: #fae4e6;\n  color: #9c353e; }\n  .badge-danger.strong {\n    background-color: #e04c59;\n    color: #fff; }\n  .badge-danger.light {\n    background-color: #fff;\n    border: 1px solid #f3b7bd; }\n\n.badge-primary {\n  background-color: #ddeffb;\n  color: #1569a1; }\n  .badge-primary.strong {\n    background-color: #1e96e6;\n    color: #fff; }\n  .badge-primary.light {\n    border: 1px solid #a5d5f5;\n    background-color: #fff; }\n\n.badge-warning {\n  background-color: #f4eed9;\n  color: #806000; }\n  .badge-warning.strong {\n    background-color: #b88a00;\n    color: #fff; }\n  .badge-warning.light {\n    background-color: #fff;\n    border: 1px solid #e3d099; }\n\n.badge-neutral {\n  background-color: #dde3f0;\n  color: #2e324b; }\n  .badge-neutral.strong {\n    background-color: #70758b;\n    color: #fff; }\n  .badge-neutral.light {\n    background-color: #fff;\n    border: 1px solid #dde3f0;\n    color: #9fa2b3; }\n\n.width-32 {\n  width: 32px;\n  padding: 0 0; }\n\n.width-64 {\n  width: 64px;\n  padding: 0 0; }\n\n.width-96 {\n  width: 96px;\n  padding: 0 0; }\n\n.width-128 {\n  width: 128px;\n  padding: 0 0; }\n\n.width-160 {\n  width: 160px;\n  padding: 0 0; }\n";
styleInject(css);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(_ref) {
  var strong = _ref.strong,
      light = _ref.light,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ["strong", "light", "width"]);

  return react.createElement(BootstrapBadge, _extends({
    className: "\n    ".concat(light ? "light" : "", "\n    ").concat(strong ? "strong" : "", "\n    ").concat(width ? "width-" + width : "", "\n    ")
  }, props, {
    pill: true
  }));
};

Badge.propTypes = {
  variant: PropTypes.oneOf(["success", "danger", "warning", "primary", "neutral"]),

  /** Enables modular/fixed width */
  width: PropTypes.oneOf([32, 64, 96, 128]),

  /** Enables strong background */
  strong: PropTypes.bool,

  /** Enables light background, with a border */
  light: PropTypes.bool
};
Badge.defaultProps = {
  variant: "neutral",
  strong: false,
  light: false
};

export { Badge };
//# sourceMappingURL=index.es.js.map
