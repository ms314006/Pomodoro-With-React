import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import AddTodoInput from '../../../src/component/AddTodoInput';

expect.extend({ toBeInTheDocument, });

describe('<AddTodoInput />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<AddTodoInput />);
    expect(getByTestId('add_todo_input_block')).toBeInTheDocument();
  });
});
