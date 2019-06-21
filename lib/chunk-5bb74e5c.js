'use strict';

var __chunk_1 = require('./chunk-6dd1212f.js');

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

exports.require$$2 = assertThisInitialized;
exports.require$$6 = inDOM;
//# sourceMappingURL=chunk-5bb74e5c.js.map
