/**
 * Author: Quan Vo
 * Date: 7/10/18
 */

export default createReducer = (initialState, ...models) => {
  let modelHandler = {};
  models.forEach(ion => {
    modelHandler = {
      ...modelHandler,
      ...ion.handle
    };
  });

  return (state = initialState, action) => {
    const handler = modelHandler[action.type];
    return handler ? handler(state, action) : state;
  }
};