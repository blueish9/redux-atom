"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handler = exports.handler = function handler(actionType, getNewState) {
  return _defineProperty({}, actionType, function (state, action) {
    return _extends({}, state, getNewState(state, action));
  });
};

/**
 * @param: actionParams: [param_i1, param_i2, ...]
 * @param: data: [value_i1, value_i2, ...]
 * @return: { param_i1: value_i1, param_i2: value_i2, ... }
 *
 * For example:
 * actionParams = ['id', 'name']; data = [99, 'John'];
 * mapParams(actionParams, data) = {id: 99, name: 'John'}
 */
var mapParams = exports.mapParams = function mapParams(actionParams, data) {
  var params = {};
  actionParams.forEach(function (item, index) {
    return params[item] = data[index];
  });
  return params;
};