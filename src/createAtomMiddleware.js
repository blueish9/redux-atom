/**
 * Author: Quan Vo
 * Date: 8/3/18
 */

export let store;

const createAtomMiddleware = _store => {
  store = _store;
  return next => action => {
    next(action);
  };
};

export default createAtomMiddleware;

/*
export default function createAtomMiddleware(_store){
  return next => action => {
    store = _store;
    next(action);
  }
};*/
