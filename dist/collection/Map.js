"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createAtom = require("../createAtom");

var _createAtom2 = _interopRequireDefault(_createAtom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Author: Quan Vo
 * Date: 7/11/18
 */

var put = exports.put = function put(type, map, key) {
  var getNewState = function getNewState(state, action) {
    if (_typeof(state[map]) === 'object') return _defineProperty({}, map, _extends({}, state[map], _defineProperty({}, key, action[key])));
  };

  return (0, _createAtom2.default)({
    type: type,
    actionParams: [key],
    getNewState: getNewState
  });
};