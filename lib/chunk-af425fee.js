import { a as createCommonjsModule, b as _interopRequireDefault, h as unwrapExports } from './chunk-b1961f5e.js';
import { a as require$$6 } from './chunk-2d4655dd.js';
import reactDom from 'react-dom';

var contains = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require$$6);

var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

exports.default = _default;

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}

module.exports = exports["default"];
});

unwrapExports(contains);

var on_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require$$6);

var on = function on() {};

if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(on_1);

var off_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require$$6);

var off = function off() {};

if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(off_1);

var listen_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require$$6);

var _on = _interopRequireDefault(on_1);

var _off = _interopRequireDefault(off_1);

var listen = function listen() {};

if (_inDOM.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on.default)(node, eventName, handler, capture);
    return function () {
      (0, _off.default)(node, eventName, handler, capture);
    };
  };
}

var _default = listen;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(listen_1);

var ownerDocument_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];
});

unwrapExports(ownerDocument_1);

var ownerDocument = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = _default;

var _reactDom = _interopRequireDefault(reactDom);

var _ownerDocument = _interopRequireDefault(ownerDocument_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(componentOrElement) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(componentOrElement));
}

module.exports = exports.default;
});

unwrapExports(ownerDocument);

export { reactDom as a, contains as b, listen_1 as c, ownerDocument as d, ownerDocument_1 as e, on_1 as f, off_1 as g };
//# sourceMappingURL=chunk-af425fee.js.map
