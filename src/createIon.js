import {handler, mapParams} from "./utils";

/**
 * @param: action: a function that returns an action {type, data...}
 * @param: props: an object that contains properties to attach to an action
 *
 *
 */
export default createIon = (
    {
      type,
      actionParams = [],
      isMutable = actionParams.length > 0,
      action = defaultAction(type, actionParams),
      getNewState,
      handle = handler(type, getNewState)
    }) => {
  if (!type)
    throw 'Missing type';
  if (!type)
    throw 'Missing getNewState';

  // must assign one by one because action is a function, not an object
  action.type = type;
  action.actionParams = actionParams;
  action.getNewState = getNewState;
  action.isMutable = isMutable;
  action.handle = handle;
  return action;
};

export const defaultAction = (type, actionParams) => (...data) => {
  if (actionParams.length === 0 && data.length === 0)
    return {
      type
    };

  if (actionParams.length !== data.length)
    throw `Function needs ${actionParams.length} arguments`;

  return {
    type,
    ...mapParams(actionParams, data)
  };
};