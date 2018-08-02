/**
 * Author: Quan Vo
 * Date: 7/12/18
 */
import {fetchCategorySuccess, initCategorySuccess, setCategory} from './Category';

describe('Category atom', () => {
  it('setCategory should create SET_CATEGORY action', () => {
    expect(setCategory([1, 2, 3])).toEqual({
      type: 'SET_CATEGORY',
      list: [1, 2, 3]
    });
  });

  it('initCategorySuccess should create INIT_CATEGORY_SUCCESS action', () => {
    expect(initCategorySuccess(['a', 'b', 'c'], 5, 1)).toEqual({
      type: 'INIT_CATEGORY_SUCCESS',
      list: ['a', 'b', 'c'],
      level: 5,
      priority: 1
    });
  });
});