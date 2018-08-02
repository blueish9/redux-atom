"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createReducer;
/**
 * Author: Quan Vo
 * Date: 7/10/18
 */

function createReducer(initialState) {
  var reactor = {};

  for (var _len = arguments.length, atoms = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    atoms[_key - 1] = arguments[_key];
  }

  atoms.forEach(function (atom) {
    reactor = _extends({}, reactor, atom.react);
  });

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var handler = reactor[action.type];
    return handler ? handler(state, action) : state;
  };
};