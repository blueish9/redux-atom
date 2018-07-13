/**
 * Author: Quan Vo
 * Date: 7/6/18
 */


import createIon from "./createIon";

/**
 * combine many ions to a single ion with a new type
 */
export default combine = (type, ...ions) => {
  const actionParams = [];
  ions.forEach(ion => {
    if (ion.isMutable) {
      actionParams.push(...ion.actionParams)
    }
  });
  if (checkDuplicateParams(actionParams))
    throw 'Duplicate parameters when combining ions';

  const getNewState = (state, action) => {
    let newState = {};
    ions.forEach(ion => {
      if (ion.isMutable) {
        const data = {};
        ion.actionParams.forEach(param => {
          data[param] = action[param];
        });
        newState = {
          ...newState,
          ...ion.getNewState(state, data)
        };
      }
      else {
        newState = {
          ...newState,
          ...ion.getNewState()
        };
      }
    });
    return newState;
  };

  return createIon({
    isMutable: ions.findIndex(ion => ion.isMutable) >= 0,
    type,
    actionParams,
    getNewState
  })
};

const checkDuplicateParams = (params) => {
  const set = new Set(params);
  return set.size < params.length;
};