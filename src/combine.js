/**
 * Author: Quan Vo
 * Date: 7/6/18
 */


import createAtom from "./createAtom";

/**
 * combine many atoms to a single atom with a new type
 */
export default combine = (type, ...atoms) => {
  const actionParams = [];
  atoms.forEach(atom => {
    if (atom.isMutable) {
      actionParams.push(...atom.actionParams)
    }
  });
  if (checkDuplicateParams(actionParams))
    throw 'Duplicate parameters when combining atoms';

  const getNewState = (state, action) => {
    let newState = {};
    atoms.forEach(atom => {
      if (atom.isMutable) {
        const data = {};
        atom.actionParams.forEach(param => {
          data[param] = action[param];
        });
        newState = {
          ...newState,
          ...atom.getNewState(state, data)
        };
      }
      else {
        newState = {
          ...newState,
          ...atom.getNewState()
        };
      }
    });
    return newState;
  };

  return createAtom({
    isMutable: atoms.findIndex(atom => atom.isMutable) >= 0,
    type,
    actionParams,
    getNewState
  })
};

const checkDuplicateParams = (params) => {
  const set = new Set(params);
  return set.size < params.length;
};