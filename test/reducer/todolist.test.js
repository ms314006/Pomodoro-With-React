import reducer from '../../src/reducer/todolist.js';
import * as actions from '../../src/actions/todolist.js';

// 初始 state
const initialState = {
  currentId: 0,
  currentTodo: 0,
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
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  test('Test add todo', () => {
    const newTodoData = {
      name: 'TodoList 2',
    };
    expect(reducer(initialState, actions.addTodo(newTodoData))).toEqual({
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

  test('Test check todo completed to true', () => {
    expect(reducer(initialState, actions.checkTodo({ id: 0, completed: true, }))).toEqual({
      ...initialState,
      todoList: [
        {
          id: 0,
          name: 'TodoList 1',
          completed: true,
          spendSeconds: 0,
        }
      ],
    });
  });

});
