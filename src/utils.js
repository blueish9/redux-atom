export const handler = (actionType, getNewState) => ({
  [actionType]: (state, action) => ({
    ...state,
    ...getNewState(state, action)
  })
});

/**
 * @param: actionParams: [param_i1, param_i2, ...]
 * @param: data: [value_i1, value_i2, ...]
 * @return: { param_i1: value_i1, param_i2: value_i2, ... }
 *
 * For example:
 * actionParams = ['id', 'name']; data = [99, 'John'];
 * mapParams(actionParams, data) = {id: 99, name: 'John'}
 */
export const mapParams = (actionParams, data) => {
  const params = {};
  actionParams.forEach((item, index) => params[item] = data[index]);
  return params;
};