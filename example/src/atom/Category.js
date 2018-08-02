/**
 * Author: Quan Vo
 * Date: 7/12/18
 */

import {hideFetching} from './Loading';
import {atom, combine} from "@blueish9/redux-atom/dist";

export const fetchingCategory = atom('FETCHING_CATEGORY', () => ({fetching: true}));

export const setCategory = atom('SET_CATEGORY', ['list']);
export const fetchCategorySuccess = combine('FETCH_CATEGORY_SUCCESS', setCategory, hideFetching);

export const setDefaultSelectedCategory = atom('SET_DEFAULT_SELECTED_CATEGORY', ['level', 'priority'], (state, action) => {
  const criteria = action.level + action.priority;    // complex computation to get the criteria
  return {
    selectedCategory: state.list.find(category => category.criteria === criteria) || state.selectedCategory
  };
});

export const initCategorySuccess = combine('INIT_CATEGORY_SUCCESS', fetchCategorySuccess, setDefaultSelectedCategory);