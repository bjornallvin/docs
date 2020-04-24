"use strict";

var _interopRequireDefault = require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/bjorn.allvin/Projects/Misc/docs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    color: red;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: block;\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLabel = _styledComponents.default.label(_templateObject(), function (props) {
  return props.theme.mainColor || 'black';
});

var RequiredSpan = _styledComponents.default.span(_templateObject2());
/** Label with required field display, htmlFor, and block styling */


function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required;
  return /*#__PURE__*/_react.default.createElement(StyledLabel, {
    htmlFor: htmlFor
  }, label, " ", required && /*#__PURE__*/_react.default.createElement(RequiredSpan, null, " *"));
}

var _default = Label;
exports.default = _default;