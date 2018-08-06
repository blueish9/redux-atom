"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createAtom;

var _utils = require("./utils");

var _createAtomMiddleware = require("./createAtomMiddleware");

/**
 * @param: atom: a function that returns an action {type, data...}
 * @param: props: an object that contains properties to attach to an atom
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
      getNewState = _ref.getNewState,
      _ref$react = _ref.react,
      react = _ref$react === undefined ? (0, _utils.handler)(type, getNewState) : _ref$react;

  if (!type) {
    throw 'Missing type';
  }
  if (!getNewState) {
    throw 'Missing getNewState';
  }

  var atom = function atom() {
    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    _createAtomMiddleware.store.dispatch(createAction(type, actionParams, data));
  };

  // must assign one by one because atom is a function, not an object
  atom.type = type;
  atom.actionParams = actionParams;
  atom.getNewState = getNewState;
  atom.isMutable = isMutable;
  atom.react = react;

  return atom;
};

var createAction = function createAction(type, actionParams, data) {
  if (actionParams.length === 0 && data.length === 0) {
    return {
      type: type
    };
  }

  if (actionParams.length !== data.length) {
    throw "Function needs " + actionParams.length + " arguments";
  }

  return _extends({
    type: type
  }, (0, _utils.mapParams)(actionParams, data));
};