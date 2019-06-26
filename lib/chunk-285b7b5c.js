'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes$1 = _interopDefault(require('prop-types'));
var __chunk_1 = require('./chunk-de18f870.js');
var __chunk_4 = require('./chunk-84b3e559.js');

var css = ".width-32 {\n  width: 32px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-64 {\n  width: 64px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-96 {\n  width: 96px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-128 {\n  width: 128px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-160 {\n  width: 160px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.width-auto {\n  width: auto; }\n";
__chunk_1.styleInject(css);

var ink = __chunk_1.createCommonjsModule(function (module) {
module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n});},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e,o){var n=o(1),r=Math.sqrt(2),i=Math.cos,a=Math.max,u=Math.min;function s(t){return u(t.duration,Date.now()-t.mouseDown)}function c(t){return t.mouseUp>0?Date.now()-t.mouseUp:0}function l(t){var e=t.duration,o=t.radius,r=.85*n(s(t),0,o,e),u=.15*n(c(t),0,o,e),l=.02*o*i(Date.now()/e);return a(0,r+u+l)}t.exports={getMaxRadius:function(t,e,o){return u(.5*a(t,e),o)},getBlotOpacity:function(t,e){return n(c(t),e,-e,t.duration)},getBlotOuterOpacity:function(t,e){return u(this.getBlotOpacity(t,e),n(s(t),0,.3,3*t.duration))},getBlotShiftX:function(t,e,o){return u(1,l(t)/e*2/r)*(o/2-t.x)},getBlotShiftY:function(t,e,o){return u(1,l(t)/e*2/r)*(o/2-t.y)},getBlotScale:function(t){return l(t)/t.radius}};},function(t,e){t.exports=function(t,e,o,n){return o*((t=t/n-1)*t*t*t*t+1)+e};},function(t,e,o){var n=o(0),r=function(t){var e=t.mouseUp,o=t.duration;return !e||Date.now()-e<o};t.exports=function(t){var e=[],o=!1,i=void 0,a={each:function(t,o){for(var n=0,r=e.length;n<r;n++)t.call(o,e[n]);},play:function(){o||(o=!0,a.update());},stop:function(){o=!1,cancelAnimationFrame(i);},getTotalOpacity:function(t){for(var o=0,r=0,i=e.length;r<i;r++)o+=n.getBlotOuterOpacity(e[r],t);return o},update:function(){(e=e.filter(r)).length?i=requestAnimationFrame(a.update):a.stop(),t();},add:function(t){e.push(t),a.play();},release:function(t){for(var o=e.length-1;o>=0;o--)if(!e[o].mouseUp)return e[o].mouseUp=t}};return a};},function(t,e){t.exports={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"};},function(t,e){t.exports=React__default;},function(t,e){t.exports=function(t){return (window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)};},function(t,e){var o=!1;"undefined"!=typeof window&&(o="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),t.exports=o;},function(t,e,o){var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);}return t};var r=o(6),i=0,a=o(5),u=o(4),s=o(3),c=o(2),l=2*Math.PI,p=o(0),f=function(t){function e(o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments));return n.tick=function(){var t=n.state,e=t.ctx,o=t.color,r=t.density,i=t.height,a=t.width,u=t.store;e.save(),e.scale(r,r),e.clearRect(0,0,a,i),e.fillStyle=o,n.props.background&&(e.globalAlpha=u.getTotalOpacity(n.props.opacity),e.fillRect(0,0,a,i)),u.each(n.makeBlot,n),e.restore();},n._onPress=function(t){var e=t.button,o=t.ctrlKey,r=t.clientX,a=t.clientY,u=t.changedTouches,s=Date.now();if(u)for(var c=0;c<u.length;c++){var l=u[c],p=l.clientX,f=l.clientY;n.pushBlot(s,p,f);}else e!==i||o||n.pushBlot(s,r,a);},n._onRelease=function(){n.state.store.release(Date.now());},n.state={color:"transparent",density:1,height:0,store:c(n.tick),touchEvents:n.touchEvents(),width:0},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.touchEvents=function(){return this.props.hasTouch?{onTouchStart:this._onPress,onTouchEnd:this._onRelease,onTouchCancel:this._onRelease}:{onMouseDown:this._onPress,onMouseUp:this._onRelease,onMouseLeave:this._onRelease}},e.prototype.makeBlot=function(t){var e=this.state,o=e.ctx,n=e.height,r=e.width,i=t.x,a=t.y,u=t.radius;if(o.globalAlpha=p.getBlotOpacity(t,this.props.opacity),o.beginPath(),this.props.recenter){var s=Math.max(n,r);i+=p.getBlotShiftX(t,s,r),a+=p.getBlotShiftY(t,s,n);}o.arc(i,a,u*p.getBlotScale(t),0,l),o.closePath(),o.fill();},e.prototype.componentWillUnmount=function(){this.state.store.stop();},e.prototype.pushBlot=function(t,e,o){var n=this,r=this.canvas;r.getDOMNode&&"function"==typeof r.getDOMNode&&(r=r.getDOMNode());var i=r.getBoundingClientRect(),u=i.top,s=i.bottom,c=i.left,l=i.right,f=window.getComputedStyle(r).color,h=this.state.ctx||r.getContext("2d"),d=a(h),y=s-u,g=l-c,v=p.getMaxRadius(y,g,this.props.radius);this.setState({color:f,ctx:h,density:d,height:y,width:g},function(){n.state.store.add({duration:n.props.duration,mouseDown:t,mouseUp:0,radius:v,x:e-c,y:o-u});});},e.prototype.setCanvas=function(t){this.canvas=t;},e.prototype.render=function(){var t=this.state,e=t.className,o=t.density,r=t.height,i=t.width,a=t.touchEvents;return u.createElement("canvas",n({className:e,ref:this.setCanvas.bind(this),style:n({},s,this.props.style),height:r*o,width:i*o,onDragOver:this._onRelease},a))},e}(u.PureComponent);f.defaultProps={background:!0,className:"ink",duration:1e3,opacity:.25,radius:150,recenter:!0,hasTouch:r},t.exports=f;}]);

});

var Ink = __chunk_1.unwrapExports(ink);

var Button_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _extends2 = __chunk_1._interopRequireDefault(__chunk_1.require$$0);

var _objectWithoutPropertiesLoose2 = __chunk_1._interopRequireDefault(__chunk_1.require$$1);

var _classnames = __chunk_1._interopRequireDefault(__chunk_1.classNames);

var _react = __chunk_1._interopRequireDefault(React__default);



var _SafeAnchor = __chunk_1._interopRequireDefault(__chunk_4.require$$4$2);

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, __chunk_1._ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      innerRef: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  var Component = as || 'button';
  if (ref) props.ref = ref;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
module.exports = exports["default"];
});

var BootstrapButton = __chunk_1.unwrapExports(Button_1);

var css$1 = ".btn {\n  border-radius: 2px;\n  position: relative; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: 0.5; }\n\n.btn-primary {\n  background-color: #5b69e1; }\n  .btn-primary:hover:not(:disabled) {\n    background-color: #4552c0; }\n  .btn-primary:active:not(:disabled) {\n    background-color: #3646c4; }\n  .btn-primary.btn-success {\n    background-color: #00b170; }\n    .btn-primary.btn-success:hover:not(:disabled) {\n      background-color: #009a61; }\n    .btn-primary.btn-success:active:not(:disabled) {\n      background-color: #008051; }\n  .btn-primary.btn-danger {\n    background-color: #e45664; }\n    .btn-primary.btn-danger:hover:not(:disabled) {\n      background-color: #cb3f4d; }\n    .btn-primary.btn-danger:active:not(:disabled) {\n      background-color: #a63d47; }\n  .btn-primary.btn-info {\n    background-color: #22a0e9; }\n    .btn-primary.btn-info:hover:not(:disabled) {\n      background-color: #2b93cf; }\n    .btn-primary.btn-info:active:not(:disabled) {\n      background-color: #1674ab; }\n  .btn-primary.btn-warning {\n    background-color: #f4be00;\n    color: #ffffff; }\n    .btn-primary.btn-warning:hover:not(:disabled) {\n      background-color: #c09500; }\n    .btn-primary.btn-warning:active:not(:disabled) {\n      background-color: #8b6b00; }\n\n.show > .btn-secondary.dropdown-toggle,\n.btn-secondary {\n  background-color: #ffffff;\n  border: 1px solid #4f5ed7;\n  color: #4f5ed7; }\n  .show > .btn-secondary.dropdown-toggle:hover:not(:disabled),\n  .btn-secondary:hover:not(:disabled) {\n    background-color: #4552c0;\n    border-color: #4552c0;\n    color: #ffffff; }\n  .show > .btn-secondary.dropdown-toggle:active:not(:disabled),\n  .btn-secondary:active:not(:disabled) {\n    background-color: #3646c4 !important;\n    border-color: #3646c4 !important;\n    color: #ffffff; }\n  .show > .btn-secondary.dropdown-toggle:focus,\n  .btn-secondary:focus {\n    box-shadow: 0 0 0 0.2rem #b1b9ff !important; }\n  .show > .btn-secondary.dropdown-toggle:disabled,\n  .btn-secondary:disabled {\n    border-color: #4f5ed7;\n    color: #4f5ed7;\n    background-color: #ffffff; }\n  .show > .btn-secondary.dropdown-toggle.btn-success,\n  .btn-secondary.btn-success {\n    background-color: #ffffff;\n    border-color: #00b170;\n    color: #008051; }\n    .show > .btn-secondary.dropdown-toggle.btn-success:hover:not(:disabled),\n    .btn-secondary.btn-success:hover:not(:disabled) {\n      background-color: #009a61;\n      border-color: #009a61;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-success:active:not(:disabled),\n    .btn-secondary.btn-success:active:not(:disabled) {\n      background-color: #008051 !important;\n      border-color: #008051 !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-success:focus,\n    .btn-secondary.btn-success:focus {\n      box-shadow: 0 0 0 0.2rem #a3e0c8 !important; }\n  .show > .btn-secondary.dropdown-toggle.btn-danger,\n  .btn-secondary.btn-danger {\n    background-color: #ffffff;\n    border-color: #e45664;\n    color: #a63d47; }\n    .show > .btn-secondary.dropdown-toggle.btn-danger:hover:not(:disabled),\n    .btn-secondary.btn-danger:hover:not(:disabled) {\n      background-color: #cb3f4d;\n      border-color: #cb3f4d;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-danger:active:not(:disabled),\n    .btn-secondary.btn-danger:active:not(:disabled) {\n      background-color: #a63d47 !important;\n      border-color: #a63d47 !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-danger:focus,\n    .btn-secondary.btn-danger:focus {\n      box-shadow: 0 0 0 0.2rem #f5bfc5 !important; }\n  .show > .btn-secondary.dropdown-toggle.btn-warning,\n  .btn-secondary.btn-warning {\n    background-color: #ffffff;\n    border-color: #f4be00;\n    color: #8b6b00; }\n    .show > .btn-secondary.dropdown-toggle.btn-warning:hover:not(:disabled),\n    .btn-secondary.btn-warning:hover:not(:disabled) {\n      background-color: #c09500;\n      border-color: #c09500;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-warning:active:not(:disabled),\n    .btn-secondary.btn-warning:active:not(:disabled) {\n      background-color: #8b6b00 !important;\n      border-color: #8b6b00 !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-warning:focus,\n    .btn-secondary.btn-warning:focus {\n      box-shadow: 0 0 0 0.2rem #e6d6a3 !important; }\n  .show > .btn-secondary.dropdown-toggle.btn-info,\n  .btn-secondary.btn-info {\n    background-color: #ffffff;\n    border-color: #22a0e9;\n    color: #1674ab; }\n    .show > .btn-secondary.dropdown-toggle.btn-info:hover:not(:disabled),\n    .btn-secondary.btn-info:hover:not(:disabled) {\n      background-color: #2b93cf;\n      border-color: #2b93cf;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-info:active:not(:disabled),\n    .btn-secondary.btn-info:active:not(:disabled) {\n      background-color: #1674ab !important;\n      border-color: #1674ab !important;\n      color: #ffffff; }\n    .show > .btn-secondary.dropdown-toggle.btn-info:focus,\n    .btn-secondary.btn-info:focus {\n      box-shadow: 0 0 0 0.2rem #aedaf6 !important; }\n\n.btn-tertiary {\n  color: #4f5ed7;\n  border-color: transparent !important; }\n  .btn-tertiary:hover:not(:disabled) {\n    background-color: #dadefd;\n    color: #3646c4; }\n  .btn-tertiary:active:not(:disabled) {\n    background-color: #b1b9ff;\n    color: #3646c4; }\n  .btn-tertiary:disabled {\n    color: #4f5ed7; }\n  .btn-tertiary.btn-success {\n    color: #00b170;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-success:hover:not(:disabled) {\n      background-color: #def4eb;\n      color: #008051; }\n    .btn-tertiary.btn-success:active:not(:disabled) {\n      background-color: #a3e0c8 !important;\n      color: #008051 !important; }\n  .btn-tertiary.btn-danger {\n    color: #e45664;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-danger:hover:not(:disabled) {\n      background-color: #fbe8e9;\n      color: #a63d47; }\n    .btn-tertiary.btn-danger:active:not(:disabled) {\n      background-color: #f5bfc5 !important;\n      color: #a63d47 !important; }\n  .btn-tertiary.btn-warning {\n    color: #c09500;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-warning:hover:not(:disabled) {\n      background-color: #f5f0de;\n      color: #8b6b00; }\n    .btn-tertiary.btn-warning:active:not(:disabled) {\n      background-color: #e6d6a3 !important;\n      color: #8b6b00 !important; }\n  .btn-tertiary.btn-info {\n    color: #22a0e9;\n    background-color: #ffffff; }\n    .btn-tertiary.btn-info:hover:not(:disabled) {\n      background-color: #e1f1fc;\n      color: #1674ab; }\n    .btn-tertiary.btn-info:active:not(:disabled) {\n      background-color: #aedaf6 !important;\n      color: #1674ab !important; }\n";
__chunk_1.styleInject(css$1);

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

  return React__default.createElement(BootstrapButton, _extends({
    variant: color,
    className: classes,
    disabled: _disabled,
    onClick: _onClick
  }, props), text, React__default.createElement(Ink, null));
};

Button.propTypes = {
  variant: PropTypes$1.oneOf(["primary", "tertiary", "secondary", "link"]),
  color: PropTypes$1.oneOf(["accent", "success", "danger", "warning", "info"]),
  width: PropTypes$1.oneOf([32, 64, 96, 128, "auto"]),
  type: PropTypes$1.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes$1.bool,
  loading: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.bool]),
  children: PropTypes$1.string,
  onClick: PropTypes$1.func
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

var hasClass_1 = __chunk_1.createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
});

__chunk_1.unwrapExports(hasClass_1);

var addClass_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = addClass;

var _hasClass = __chunk_1._interopRequireDefault(hasClass_1);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
});

__chunk_1.unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

exports.Button = Button;
exports.Button_1 = Button_1;
exports.Ink = Ink;
exports.require$$0 = addClass_1;
exports.require$$1 = removeClass;
exports.require$$2 = hasClass_1;
//# sourceMappingURL=chunk-285b7b5c.js.map
