import createAtom from "./createAtom";


const assignData = (state, action) => {
  const {type, ...data} = action;
  return {
    ...data
  }
};

/**
 * @param: type: String
 * @param: actionParams: Array<String>
 * @param: getNewState: Function: (state, action) => {}
 *
 * need at least 2 parameters
 */
export default function atom(type, actionParams, getNewState = assignData) {
  if (typeof actionParams === 'function')
  {
    return createAtom({
      type,
      getNewState: actionParams
    });
  }

  return createAtom({
    type,
    actionParams,
    getNewState
  });
};