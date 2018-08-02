import {handler, mapParams} from "./utils";

/**
 * @param: action: a function that returns an action {type, data...}
 * @param: props: an object that contains properties to attach to an action
 *
 * @return: a function which can be invoked to create an action,
 * this function also has a property 'react', which is a function that can react to an action to return new state
 */
export default function createAtom(
  {
    type,
    actionParams = [],
    isMutable = actionParams.length > 0,
    action = defaultAction(type, actionParams),
    getNewState,
    react = handler(type, getNewState)
  }) {
  if (!type)
  {
    throw 'Missing type';
  }
  if (!getNewState)
  {
    throw 'Missing getNewState';
  }

  // must assign one by one because action is a function, not an object
  action.name = type;
  action.actionParams = actionParams;
  action.getNewState = getNewState;
  action.isMutable = isMutable;
  action.react = react;
  return action;
};

export const defaultAction = (type, actionParams) => (...data) => {
  if (actionParams.length === 0 && data.length === 0)
  {
    return {
      type
    };
  }

  if (actionParams.length !== data.length)
  {
    throw `Function needs ${actionParams.length} arguments`;
  }

  return {
    type,
    ...mapParams(actionParams, data)
  };
};