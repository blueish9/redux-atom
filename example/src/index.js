/**
 * Author: Quan Vo
 * Date: 7/12/18
 */

import {fetchingTask, fetchTaskSuccess, finishAll, updateCompletedCount} from './atom/Task';
import rootReducer from './reducer';
import {fetchingCategory, initCategorySuccess} from './atom/Category';
import {applyMiddleware, createStore} from 'redux';
import requestApi from "./api";
import {createAtomMiddleware} from "@blueish9/redux-atom";


const store = createStore(
  rootReducer,
  applyMiddleware(createAtomMiddleware)
);

// user open app --> show loading indicator while fetching API,
fetchingTask();

// fetch API completed, set task list and hide loading indicator
const task = requestApi('/task');
fetchTaskSuccess(task.list, task.completed, task.goal);

// completed some tasks --> update completed count
updateCompletedCount(5);

// finish every tasks
finishAll();


/* ---------------- ---------------- ---------------- ---------------- */


// user open app --> show loading indicator while fetching API,
fetchingCategory();

// fetch API completed, hide loading indicator, compute default selected category bases on some factors
const category = requestApi('/category');
const level = 14;
const priority = 1;
initCategorySuccess(category.list, level, priority);

export default store;