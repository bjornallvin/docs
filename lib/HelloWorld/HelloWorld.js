"use strict";

var _interopRequireDefault = require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HelloWorld;

var _react = _interopRequireDefault(require("react"));

/**
 * A Descriotion
 */
function HelloWorld(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", null, message);
}

HelloWorld.defaultProps = {
  message: "Howdy"
};