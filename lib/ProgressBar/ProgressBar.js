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
  var data = (0, _taggedTemplateLiteral2.default)(["\n    height: ", "px;\n    width: ", "px;    \n    background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    border-style:solid;\n    border-width:1px;\n    border-color:black;\n    width: ", "px;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var OuterWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.width;
});

var InnerWrapper = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.height;
}, function (props) {
  return parseInt(props.width * (props.percent / 100), 10);
}, function (props) {
  return props.percent === 100 ? "green" : props.percent > 50 ? 'lightgreen' : 'red';
});

var ProgressBar = function ProgressBar(props) {
  return /*#__PURE__*/_react.default.createElement(OuterWrapper, props, /*#__PURE__*/_react.default.createElement(InnerWrapper, props));
};

ProgressBar.defaultProps = {
  height: 5
};
var _default = ProgressBar;
exports.default = _default;