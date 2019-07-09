import reducer from '../../src/reducer/todolist.js';
import * as actions from '../../src/actions/todolist.js';

// 初始 state
const initialState = {
  currentId: 0,
  todoList: [
    {
      id: 0,
      name: 'TodoList 1',
      completed: false,
      spendSeconds: 0,
    }
  ],
};

describe('test reducer', () => {
  test('Test initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('Test add todo', () => {
    const newTodoData = {
      name: 'TodoList 2',
      completed: false,
      spendSeconds: 0,
    };
    expect(reducer(initialState, actions.addTodoList(newTodoData))).toEqual({
      ...initialState,
      currentId: 1,
      todoList: [
        ...initialState.todoList,
        {
          id: 1,
          name: 'TodoList 2',
          completed: false,
          spendSeconds: 0,
        }
      ],
    });
  });

  test('Test add spend seconds', () => {
    expect(reducer(initialState, actions.addSpendSeconds(0))).toEqual({
      ...initialState,
      todoList: [
        {
          id: 0,
          name: 'TodoList 1',
          completed: false,
          spendSeconds: 1,
        }
      ],
    });
  });
  
});
