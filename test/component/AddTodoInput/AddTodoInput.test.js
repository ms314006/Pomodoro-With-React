import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import { TestAddTodoInput } from '../../../src/component/AddTodoInput/AddTodoInput.js';

expect.extend({ toBeInTheDocument, });

const props = {
  addTodo: jest.fn(),
};

describe('<AddTodoInput />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<TestAddTodoInput />);
    expect(getByTestId('add_todo_input_block')).toBeInTheDocument();
    expect(getByTestId('add_todo_input')).toBeInTheDocument();
    expect(getByTestId('add_todo_button')).toBeInTheDocument();
  });

  test('測試新增 Todo ', () => {
    const { getByTestId, } = render(<TestAddTodoInput {...props} />);

    fireEvent.change(getByTestId('add_todo_input'), { target: { value: 'testTodo2', }, });
    expect(getByTestId('add_todo_input').value).toBe('testTodo2');

    fireEvent.click(getByTestId('add_todo_button'));
    expect(props.addTodo.mock.calls.length).toBe(1);
    expect(getByTestId('add_todo_input').value).toBe('');
  });
});
