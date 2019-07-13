import reducer, { initState } from '../../src/reducer/todolist.js';
import * as actions from '../../src/actions/todolist.js';

describe('test reducer', () => {

  test('Test initial state', () => {
    expect(reducer(initState, {})).toEqual(initState);
  });

  test('Test add todo', () => {
    const newTodoData = {
      name: 'TodoList 6',
    };
    expect(reducer(initState, actions.addTodo(newTodoData))).toEqual({
      ...initState,
      lastNewTodoId: 5,
      todoList: [
        ...initState.todoList,
        {
          id: 5,
          name: 'TodoList 6',
          completed: false,
          spendSeconds: 0,
        }
      ],
    });
  });

  test('Test add spend seconds', () => {
    const expectObject = JSON.parse(JSON.stringify(initState));
    expectObject.todoList[0].spendSeconds += 1;
    expect(reducer(initState, actions.addSpendSeconds(0))).toEqual(expectObject);
  });

  test('Test check todo completed to true', () => {
    const expectObject = JSON.parse(JSON.stringify(initState));
    expectObject.todoList[0].completed = true;
    expect(reducer(initState, actions.checkTodo({ id: 0, completed: true, }))).toEqual(expectObject);
  });

});
