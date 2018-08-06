import {handler, mapParams} from "./utils";
import {store} from "./createAtomMiddleware";

/**
 * @param: atom: a function that returns an action {type, data...}
 * @param: props: an object that contains properties to attach to an atom
 *
 * @return: a function which can be invoked to create an action,
 * this function also has a property 'react', which is a function that can react to an action to return new state
 */
export default function createAtom(
    {
      type,
      actionParams = [],
      isMutable = actionParams.length > 0,
      getNewState,
      react = handler(type, getNewState)
    }) {
  if (!type) {
    throw 'Missing type';
  }
  if (!getNewState) {
    throw 'Missing getNewState';
  }

  const atom = (...data) => {
    store.dispatch(createAction(type, actionParams, data));
  };

  // must assign one by one because atom is a function, not an object
  atom.type = type;
  atom.actionParams = actionParams;
  atom.getNewState = getNewState;
  atom.isMutable = isMutable;
  atom.react = react;

  return atom;
};

const createAction = (type, actionParams, data) => {
  if (actionParams.length === 0 && data.length === 0) {
    return {
      type
    };
  }

  if (actionParams.length !== data.length) {
    throw `Function needs ${actionParams.length} arguments`;
  }

  return {
    type,
    ...mapParams(actionParams, data)
  };
};