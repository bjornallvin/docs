"use strict";

var _interopRequireWildcard = require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _PasswordInput = _interopRequireDefault(require("../PasswordInput"));

/** Registration form with built-in validation. */
var RegistrationForm = function RegistrationForm(props) {
  var _useState = (0, _react.useState)({
    email: '',
    password: ''
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      submitted = _useState6[0],
      setSubmitted = _useState6[1];

  var onChange = function onChange(event) {
    setUser((0, _objectSpread3.default)({}, user, (0, _defineProperty2.default)({}, event.target.name, event.target.value)));
  }; // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.


  var passwordQuality = function passwordQuality(password) {
    if (!password) return null;
    if (password.length >= props.minPasswordLength) return 100;
    var percentOfMinLength = parseInt(password.length / props.minPasswordLength * 100, 10);
    return percentOfMinLength;
  };

  var validate = function validate(_ref) {
    var email = _ref.email,
        password = _ref.password;
    var formErrors = {};
    var minPasswordLength = props.minPasswordLength;
    if (!email) formErrors.email = 'Email required.';
    if (password.length < minPasswordLength) formErrors.password = "Password must be at least ".concat(minPasswordLength, " characters.");
    setErrors(formErrors);
    var formIsValid = Object.getOwnPropertyNames(formErrors).length === 0;
    return formIsValid;
  };

  var onSubmit = function onSubmit() {
    var formIsValid = validate(user);

    if (formIsValid) {
      props.onSubmit(user);
      setSubmitted(true);
    }
  };

  return submitted ? /*#__PURE__*/_react.default.createElement("h2", null, props.confirmationMessage) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    htmlId: "registration-form-email",
    name: "email",
    onChange: onChange,
    label: "Email",
    value: user.email,
    error: errors.email,
    required: true
  }), /*#__PURE__*/_react.default.createElement(_PasswordInput.default, {
    htmlId: "registration-form-password",
    name: "password",
    value: user.password,
    onChange: onChange,
    quality: passwordQuality(user.password),
    showVisibilityToggle: true,
    maxLength: 50,
    error: errors.password
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    value: "Register",
    onClick: onSubmit
  }));
};

RegistrationForm.defaultProps = {
  confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};
var _default = RegistrationForm;
exports.default = _default;