import {initCategorySuccess} from './Category';
import {assignTask, updateCompletedCount} from './Task';

/**
 * Author: Quan Vo
 * Date: 7/12/18
 */

describe('Task atom', () => {
  it('assignTask should create ASSIGN_TASK action', () => {
    expect(assignTask([1, 2, 3], 0, 100)).toEqual({
      type: 'ASSIGN_TASK',
      list: [1, 2, 3],
      completed: 0,
      goal: 100
    });
  });

  it('updateCompletedCount should create UPDATE_COMPLETED_COUNT action', () => {
    expect(updateCompletedCount(['a', 'b', 'c'], 5, 1)).toEqual({
      type: 'UPDATE_COMPLETED_COUNT',
      list: ['a', 'b', 'c'],
      level: 5,
      priority: 1
    });
  });
});