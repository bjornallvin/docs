"use strict";

var _interopRequireWildcard = require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _EyeIcon = _interopRequireDefault(require("../EyeIcon"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

/** Password input with integrated label, quality tips, and show password toggle. */
var PasswordInput = function PasswordInput(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var toggleShowPassword = function toggleShowPassword(event) {
    setShowPassword(!showPassword);
    if (event) event.preventDefault();
  };

  var htmlId = props.htmlId,
      value = props.value,
      label = props.label,
      error = props.error,
      onChange = props.onChange,
      placeholder = props.placeholder,
      maxLength = props.maxLength,
      showVisibilityToggle = props.showVisibilityToggle,
      quality = props.quality,
      rest = (0, _objectWithoutProperties2.default)(props, ["htmlId", "value", "label", "error", "onChange", "placeholder", "maxLength", "showVisibilityToggle", "quality"]);
  return /*#__PURE__*/_react.default.createElement(_TextInput.default, Object.assign({
    htmlId: htmlId,
    label: label,
    placeholder: placeholder,
    type: showPassword ? 'text' : 'password',
    onChange: onChange,
    value: value,
    maxLength: maxLength,
    error: error,
    required: true
  }, rest), showVisibilityToggle && /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: toggleShowPassword,
    style: {
      marginLeft: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_EyeIcon.default, null)), value.length > 0 && quality && /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    percent: quality,
    width: 130
  }));
};

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password'
};
var _default = PasswordInput;
exports.default = _default;