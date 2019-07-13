import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import TodoList from '../../../src/component/TodoList';
import reducer from '../../../src/reducer/todolist';

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
    const { getByTestId, } = renderWithRedux(<TodoList />, { initialState, });
    expect(getByTestId('todoList_block')).toBeInTheDocument();
  });

  test('render 的資料數是否正確', () => {
    const { getAllByTestId, } = renderWithRedux(<TodoList />, { initialState, });
    expect(getAllByTestId('todo_block').length).toBe(2);
  });

  test('確認 listCount 是否有起到效用', () => {
    const { getAllByTestId, } = renderWithRedux(<TodoList listCount={1} />, { initialState, });
    expect(getAllByTestId('todo_block').length).toBe(1);
  });
});
