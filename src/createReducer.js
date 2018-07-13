/**
 * Author: Quan Vo
 * Date: 7/10/18
 */

export default createReducer = (initialState, ...atoms) => {
  let reactor = {};
  atoms.forEach(atom => {
    reactor = {
      ...reactor,
      ...atom.react
    };
  });

  return (state = initialState, action) => {
    const handler = reactor[action.type];
    return handler ? handler(state, action) : state;
  }
};