"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = atom;

var _createAtom = require("./createAtom");

var _createAtom2 = _interopRequireDefault(_createAtom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var assignData = function assignData(state, action) {
  var type = action.type,
      data = _objectWithoutProperties(action, ["type"]);

  return _extends({}, data);
};

/**
 * @param: type: String
 * @param: actionParams: Array<String>
 * @param: getNewState: Function: (state, action) => {}
 */
function atom(type, actionParams) {
  var getNewState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : assignData;

  if (typeof actionParams === 'function') {
    return (0, _createAtom2.default)({
      type: type,
      getNewState: actionParams
    });
  }

  return (0, _createAtom2.default)({
    type: type,
    actionParams: actionParams,
    getNewState: getNewState
  });
};