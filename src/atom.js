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