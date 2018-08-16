'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Author: Quan Vo
                                                                                                                                                                                                                                                                               * Date: 8/14/18
                                                                                                                                                                                                                                                                               */

exports.default = convertToAtom;

var _atom = require('./atom');

var _atom2 = _interopRequireDefault(_atom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertToAtom(object) {
  if (typeof object === 'function') return object;

  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.hasOwnProperty('type') && object.hasOwnProperty('actionParams')) {
    if (object.hasOwnProperty('getNewState')) return (0, _atom2.default)(object.type, object.actionParams, object.getNewState);

    return (0, _atom2.default)(object.type, object.actionParams);
  }

  throw 'Invalid object. Cannot convert to atom';
}