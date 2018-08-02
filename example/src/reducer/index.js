/**
 * Author: Quan Vo
 * Date: 7/12/18
 */

import categoryReducer from './categoryReducer';
import taskReducer from './taskReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  categoryReducer,
  taskReducer
});

export default rootReducer;