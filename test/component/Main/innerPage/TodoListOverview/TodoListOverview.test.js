import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import TodoListOverview from '../../../../../src/component/Main/InnerPage/TodoListOverview';
import reducer from '../../../../../src/reducer/todolist';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

const initialState = {
  currentId: 0,
  todoList: [
    {
      id: 0,
      name: 'TodoList 1',
      completed: false,
      spendSeconds: 0,
    },
    {
      id: 1,
      name: 'TodoList 2',
      completed: false,
      spendSeconds: 0,
    }
  ],
};

describe('<TodoList />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = renderWithRedux(<TodoListOverview />, { initialState, });
    expect(getByTestId('todoListOverview_block')).toBeInTheDocument();
  });
});
