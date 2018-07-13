import createIon from "./createIon";


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
export default ion = (type, actionParams, getNewState = assignData) => {
  if (typeof actionParams === 'function')
    return createIon({
      type,
      getNewState: actionParams
    });

  return createIon({
    type,
    actionParams,
    getNewState
  });
};