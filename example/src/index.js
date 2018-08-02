/**
 * Author: Quan Vo
 * Date: 7/12/18
 */

import {fetchingTask, fetchTaskSuccess, finishAll, updateCompletedCount} from './atom/Task';
import rootReducer from './reducer';
import {fetchingCategory, initCategorySuccess} from './atom/Category';
import {createStore} from 'redux';
import requestApi from "./api";


const store = createStore(rootReducer);

// user open app --> show loading indicator while fetching API,
store.dispatch(fetchingTask());

// fetch API completed, set task list and hide loading indicator
const task = requestApi('/task');
store.dispatch(fetchTaskSuccess(task.list, task.completed, task.goal));

// completed some tasks --> update completed count
store.dispatch(updateCompletedCount(5));

// finish every tasks
store.dispatch(finishAll());


/* ---------------- ---------------- ---------------- ---------------- */


// user open app --> show loading indicator while fetching API,
store.dispatch(fetchingCategory());

// fetch API completed, hide loading indicator, compute default selected category bases on some factors
const category = requestApi('/category');
const level = 14;
const priority = 1;
store.dispatch(initCategorySuccess(category.list, level, priority));

export default store;