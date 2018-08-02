'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.insertAt = exports.append = undefined;

var _createAtom = require('../createAtom');

var _createAtom2 = _interopRequireDefault(_createAtom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Author: Quan Vo
 * Date: 7/10/18
 */

var append = exports.append = function append(type, list) {
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'items';

  var getNewState = function getNewState(state, action) {
    if (action[items].constructor === Array) return [state[list]].concat(_toConsumableArray(action[items]));

    return [state[list], action[items]];
  };

  return (0, _createAtom2.default)({
    type: type,
    actionParams: [items],
    getNewState: getNewState
  });
};

var insertAt = exports.insertAt = function insertAt(type, list) {
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'items';
  var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'position';

  var getNewState = function getNewState(state, action) {
    if (action[items].constructor === Array) return [].concat(_toConsumableArray(state[list].slice(0, action[position])), [action[items]], _toConsumableArray(state[list].slice(action[position])));

    return [].concat(_toConsumableArray(state[list].slice(0, action[position])), _toConsumableArray(action[items]), _toConsumableArray(state[list].slice(action[position])));
  };

  return (0, _createAtom2.default)({
    type: type,
    actionParams: [items, position],
    getNewState: getNewState
  });
};

/*export const update = (type, list, item = 'item', position = 'position') => {
  const getNewState = (state, action) => {
    return [
      ...state[list].slice(0, action[position]),
      ...state[list].slice(action[position] + 1),
    ];
  };

  return createAtom(
      {
        type,
        actionParams: [position],
        getNewState
      })
};*/

var remove = exports.remove = function remove(type, list) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'position';

  var getNewState = function getNewState(state, action) {
    return [].concat(_toConsumableArray(state[list].slice(0, action[position])), _toConsumableArray(state[list].slice(action[position] + 1)));
  };

  return (0, _createAtom2.default)({
    type: type,
    actionParams: [position],
    getNewState: getNewState
  });
};