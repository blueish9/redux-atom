import createAtom from "../createAtom";

/**
 * Author: Quan Vo
 * Date: 7/10/18
 */

export const append = (type, list, items = 'items') => {
  const getNewState = (state, action) => {
    if (action[items].constructor === Array)
      return [
        state[list],
        ...action[items]
      ];

    return [
      state[list],
      action[items]
    ]
  };

  return createAtom({
    type,
    actionParams: [items],
    getNewState
  });
};

export const insertAt = (type, list, items = 'items', position = 'position') => {
  const getNewState = (state, action) => {
    if (action[items].constructor === Array)
      return [
        ...state[list].slice(0, action[position]),
        action[items],
        ...state[list].slice(action[position]),
      ];

    return [
      ...state[list].slice(0, action[position]),
      ...action[items],
      ...state[list].slice(action[position]),
    ]
  };

  return createAtom({
    type,
    actionParams: [items, position],
    getNewState
  })
};

/*export const update = (type, list, item = 'item', position = 'position') => {
  const getNewState = (state, action) => {
    return [
      ...state[list].slice(0, action[position]),
      ...state[list].slice(action[position] + 1),
    ];
  };

  return createAtom(
      {
        type,
        actionParams: [position],
        getNewState
      })
};*/

export const remove = (type, list, position = 'position') => {
  const getNewState = (state, action) => {
    return [
      ...state[list].slice(0, action[position]),
      ...state[list].slice(action[position] + 1),
    ];
  };

  return createAtom({
    type,
    actionParams: [position],
    getNewState
  })
};