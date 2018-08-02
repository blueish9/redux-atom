'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultAction = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createAtom;

var _utils = require('./utils');

/**
 * @param: action: a function that returns an action {type, data...}
 * @param: props: an object that contains properties to attach to an action
 *
 * @return: a function which can be invoked to create an action,
 * this function also has a property 'react', which is a function that can react to an action to return new state
 */
function createAtom(_ref) {
  var type = _ref.type,
      _ref$actionParams = _ref.actionParams,
      actionParams = _ref$actionParams === undefined ? [] : _ref$actionParams,
      _ref$isMutable = _ref.isMutable,
      isMutable = _ref$isMutable === undefined ? actionParams.length > 0 : _ref$isMutable,
      _ref$action = _ref.action,
      action = _ref$action === undefined ? defaultAction(type, actionParams) : _ref$action,
      getNewState = _ref.getNewState,
      _ref$react = _ref.react,
      react = _ref$react === undefined ? (0, _utils.handler)(type, getNewState) : _ref$react;

  if (!type) {
    throw 'Missing type';
  }
  if (!type) {
    throw 'Missing getNewState';
  }

  // must assign one by one because action is a function, not an object
  action.type = type;
  action.actionParams = actionParams;
  action.getNewState = getNewState;
  action.isMutable = isMutable;
  action.react = react;
  return action;
};

var defaultAction = exports.defaultAction = function defaultAction(type, actionParams) {
  return function () {
    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    if (actionParams.length === 0 && data.length === 0) {
      return {
        type: type
      };
    }

    if (actionParams.length !== data.length) {
      throw 'Function needs ' + actionParams.length + ' arguments';
    }

    return _extends({
      type: type
    }, (0, _utils.mapParams)(actionParams, data));
  };
};