/**
 * Author: Quan Vo
 * Date: 7/12/18
 */
import {assignTask, fetchingTask, fetchTaskSuccess, finishAll, switchTask, updateCompletedCount} from '../atom/Task';
import {createReducer} from "@blueish9/redux-atom/dist";


const initialState = {
  list: [],
  completed: 0,
  goal: 0,
  done: false,
  fetching: false
};

const taskReducer = createReducer(
  initialState,
  fetchingTask,
  assignTask,
  fetchTaskSuccess,
  updateCompletedCount,
  finishAll,
  switchTask
);

export default taskReducer;

