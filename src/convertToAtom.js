/**
 * Author: Quan Vo
 * Date: 8/14/18
 */

import atom from "./atom";


export default function convertToAtom(object) {
  if (typeof object === 'function')
    return object;

  if (typeof object === 'object' && object.hasOwnProperty('type') && object.hasOwnProperty('actionParams')) {
    if (object.hasOwnProperty('getNewState'))
      return atom(object.type, object.actionParams, object.getNewState);

    return atom(object.type, object.actionParams);
  }

  throw 'Invalid object. Cannot convert to atom'
}