import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import AddTodoInput from '../../../src/component/AddTodoInput';
import reducer from '../../../src/reducer/todolist';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('<AddTodoInput />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = renderWithRedux(<AddTodoInput />);
    expect(getByTestId('add_todo_input_block')).toBeInTheDocument();
    expect(getByTestId('add_todo_input')).toBeInTheDocument();
    expect(getByTestId('add_todo_button')).toBeInTheDocument();
  });

  test('測試新增 Todo ', () => {
    const { getByTestId, } = renderWithRedux(<AddTodoInput />);
    fireEvent.change(getByTestId('add_todo_input'), { target: { value: 'testTodo2', }, });
    expect(getByTestId('add_todo_input').value).toBe('testTodo2');
    fireEvent.click(getByTestId('add_todo_button'));
    // 新增完會取消當前 Name
    expect(getByTestId('add_todo_input').value).toBe('');
  });
});
