import * as actions from '../../src/actions/todolist';

const todo = {
  name: 'TodoList 2',
  completed: false,
  spendSeconds: 0,
};

describe('test actions', () => {
  test('Add todo', () => {
    expect(actions.ADD_TODO).toBe('ADD_TODO');

    const expectAction = {
      type: actions.ADD_TODO,
      payload: {
        todo: {
          ...todo,
        },
      },
    };

    expect(actions.addTodo(todo)).toEqual(expectAction);
  });

  test('Add spend seconds', () => {
    expect(actions.ADD_SPEND_SECONDS).toBe('ADD_SPEND_SECONDS');

    const expectAction = {
      type: actions.ADD_SPEND_SECONDS,
      payload: {
        id: 1,
      },
    };

    expect(actions.addSpendSeconds(1)).toEqual(expectAction);
  });

  test('Check todo completed', () => {
    expect(actions.CHECK_TODO).toBe('CHECK_TODO');

    const expectAction = {
      type: actions.CHECK_TODO,
      payload: {
        id: 1,
        completed: true,
      },
    };

    expect(actions.checkTodo({ id: 1, completed: true, })).toEqual(expectAction);

    expectAction.payload.completed = false;
    expect(actions.checkTodo({ id: 1, completed: false, })).toEqual(expectAction);
  });

});
