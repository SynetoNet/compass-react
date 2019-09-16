'use strict';

var __chunk_1 = require('./chunk-c8869f1e.js');
var __chunk_5 = require('./chunk-e107fe28.js');
require('react-dom');

var contains = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = __chunk_1._interopRequireDefault(__chunk_5.require$$6);

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

__chunk_1.unwrapExports(contains);

var on_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = __chunk_1._interopRequireDefault(__chunk_5.require$$6);

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

__chunk_1.unwrapExports(on_1);

var off_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = __chunk_1._interopRequireDefault(__chunk_5.require$$6);

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

__chunk_1.unwrapExports(off_1);

var listen_1 = __chunk_1.createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _inDOM = __chunk_1._interopRequireDefault(__chunk_5.require$$6);

var _on = __chunk_1._interopRequireDefault(on_1);

var _off = __chunk_1._interopRequireDefault(off_1);

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

__chunk_1.unwrapExports(listen_1);

var ownerDocument_1 = __chunk_1.createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];
});

__chunk_1.unwrapExports(ownerDocument_1);

var ownerDocument = __chunk_1.createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = _default;

var _reactDom = _interopRequireDefault(__chunk_5._reactDom);

var _ownerDocument = _interopRequireDefault(ownerDocument_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(componentOrElement) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(componentOrElement));
}

module.exports = exports.default;
});

__chunk_1.unwrapExports(ownerDocument);

exports.require$$0 = on_1;
exports.require$$1 = contains;
exports.require$$1$1 = off_1;
exports.require$$12 = ownerDocument;
exports.require$$3 = listen_1;
exports.require$$5 = ownerDocument_1;
//# sourceMappingURL=chunk-05702d30.js.map
