import 'react';
import PropTypes__default from 'prop-types';
import { a as createCommonjsModule, b as _interopRequireDefault, c as require$$0, d as require$$1, e as require$$2, f as require$$4, q as require$$0$1, g as _ThemeProvider, h as unwrapExports } from './chunk-b1961f5e.js';

var createWithBsPrefix_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(require$$0);

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _react = _interopRequireDefault(require$$4);

var _camelize = _interopRequireDefault(require$$0$1);



var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];
});

unwrapExports(createWithBsPrefix_1);

export { PropTypes__default as a, createWithBsPrefix_1 as b };
//# sourceMappingURL=chunk-3beaf8a1.js.map
