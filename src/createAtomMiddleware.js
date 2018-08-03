/**
 * Author: Quan Vo
 * Date: 8/3/18
 */

export let store;

export default function createAtomMiddleware(_store){
  return (next) => (action) => {
    store = _store;
    next(action);
  }
};