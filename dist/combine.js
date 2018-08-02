"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = combine;

var _createAtom = require("./createAtom");

var _createAtom2 = _interopRequireDefault(_createAtom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Author: Quan Vo
                                                                                                                                                                                                     * Date: 7/6/18
                                                                                                                                                                                                     */

/**
 * combine many atoms to a single atom with a new type
 */
function combine(type) {
  for (var _len = arguments.length, atoms = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    atoms[_key - 1] = arguments[_key];
  }

  var actionParams = [];
  atoms.forEach(function (atom) {
    if (atom.isMutable) {
      actionParams.push.apply(actionParams, _toConsumableArray(atom.actionParams));
    }
  });
  if (checkDuplicateParams(actionParams)) {
    throw 'Duplicate parameters when combining atoms';
  }

  var getNewState = function getNewState(state, action) {
    var newState = {};
    atoms.forEach(function (atom) {
      if (atom.isMutable) {
        var data = {};
        atom.actionParams.forEach(function (param) {
          data[param] = action[param];
        });
        newState = _extends({}, newState, atom.getNewState(state, data));
      } else {
        newState = _extends({}, newState, atom.getNewState());
      }
    });
    return newState;
  };

  return (0, _createAtom2.default)({
    isMutable: atoms.findIndex(function (atom) {
      return atom.isMutable;
    }) >= 0,
    type: type,
    actionParams: actionParams,
    getNewState: getNewState
  });
};

var checkDuplicateParams = function checkDuplicateParams(params) {
  var set = new Set(params);
  return set.size < params.length;
};