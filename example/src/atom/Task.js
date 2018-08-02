/**
 * Author: Quan Vo
 * Date: 7/10/18
 */
import {hideFetching} from './Loading';
import {atom, combine} from "@blueish9/redux-atom/dist";


export const fetchingTask = atom('FETCHING_TASK', () => ({fetching: true}));

export const assignTask = atom('ASSIGN_TASK', ['list', 'completed', 'goal']);
export const fetchTaskSuccess = combine('FETCH_TASK_SUCCESS', assignTask, hideFetching);

export const updateCompletedCount = atom(
  'UPDATE_COMPLETED_COUNT',
  ['completed'],
  (state, action) => ({
    completed: action.completed,
    done: action.completed === state.goal
  })
);

export const finishAll = atom('FINISH_ALL', (state, action) => ({
  completed: state.goal,
  done: true
}));

/*------------------------------------------------------------------------*/

export const switchTask = atom('SWITCH_TASK', ['categoryId'], (state, action) => ({
  list: state.list.filter(task => task.categoryId === action.categoryId)
}));