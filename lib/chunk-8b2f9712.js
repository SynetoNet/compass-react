'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-a0298d7c.js');
var reactDom = _interopDefault(require('react-dom'));

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var inDOM = __chunk_1.createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];
});

__chunk_1.unwrapExports(inDOM);

exports._reactDom = reactDom;
exports.require$$2 = assertThisInitialized;
exports.require$$6 = inDOM;
//# sourceMappingURL=chunk-8b2f9712.js.map
