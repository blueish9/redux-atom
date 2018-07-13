import createIon from "../createIon";

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

  return createIon({
    type,
    actionParams: [key],
    getNewState
  });
};

const changeUsername = put('CHANGE_USERNAME', 'profile', 'username');

changeUsername('John');