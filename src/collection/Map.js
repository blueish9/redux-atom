import createAtom from "../createAtom";

/**
 * Author: Quan Vo
 * Date: 7/11/18
 */

export const put = (type, map, key) => {
  const getNewState = (state, action) => {
    if (typeof state[map] === 'object')
      return {
        [map]: {
          ...state[map],
          [key]: action[key]
        }
      }
  };

  return createAtom({
    type,
    actionParams: [key],
    getNewState
  });
};