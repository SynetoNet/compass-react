'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes$1 = _interopDefault(require('prop-types'));
var __chunk_2 = require('./chunk-17e02351.js');
var RSelect = _interopDefault(require('react-select'));

var css = ".combo-box__control {\n  border-radius: 0.25rem !important;\n  border-color: #e1e8f1 !important; }\n  .combo-box__control:hover {\n    border-color: #e1e8f1 !important; }\n\n.combo-box__option {\n  background-color: #ffffff !important;\n  color: #5b69e1 !important; }\n  .combo-box__option:hover {\n    background-color: #5b69e1 !important;\n    color: #ffffff !important; }\n\n.combo-box__option--is-selected {\n  background-color: #ebf2ff !important;\n  color: #343855 !important; }\n\n.combo-box__option--is-focused {\n  background-color: #5b69e1 !important;\n  color: #ffffff !important; }\n\n.combo-box__multi-value__label {\n  font-size: 0.875rem;\n  color: #ffffff !important;\n  background-color: #5b69e1;\n  padding: 3px 10px !important; }\n  .combo-box__multi-value__label:hover {\n    background-color: #3042d9; }\n\n.combo-box__multi-value__remove:hover {\n  color: #5b69e1 !important;\n  background-color: #ebf2ff !important; }\n";
__chunk_2.styleInject(css);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ComboBox = function ComboBox(_ref) {
  var options = _ref.options,
      placeholder = _ref.placeholder,
      selected = _ref.selected,
      multiSelect = _ref.multiSelect,
      props = _objectWithoutProperties(_ref, ["options", "placeholder", "selected", "multiSelect"]);

  var _useState = React.useState(selected),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var handleChange = function handleChange(selected) {
    setSelectedOption(selected);
  };

  return React__default.createElement(RSelect, {
    placeholder: placeholder,
    value: selectedOption,
    onChange: handleChange,
    options: options,
    isMulti: multiSelect,
    closeMenuOnSelect: !multiSelect,
    classNamePrefix: "combo-box",
    className: "combo-box"
  });
};

ComboBox.propTypes = {
  options: PropTypes$1.arrayOf(PropTypes$1.shape({
    value: PropTypes$1.string,
    label: PropTypes$1.string
  })),
  placeholder: PropTypes$1.string,
  selected: PropTypes$1.shape({
    value: PropTypes$1.string,
    label: PropTypes$1.string
  })
};
ComboBox.defaultProps = {
  options: [],
  placeholder: "Select...",
  selected: null
};

module.exports = ComboBox;
//# sourceMappingURL=ComboBox.js.map
