/**
 * Author: Quan Vo
 * Date: 7/12/18
 */
import {fetchCategorySuccess, fetchingCategory, initCategorySuccess, setCategory} from '../atom/Category';
import {createReducer} from "@blueish9/redux-atom/dist";


const initialState = {
  list: [],
  selectedCategory: null,
  fetching: false
};

const categoryReducer = createReducer(
  initialState,
  fetchingCategory,
  setCategory,
  fetchCategorySuccess,
  initCategorySuccess
);

export default categoryReducer;