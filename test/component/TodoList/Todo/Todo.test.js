import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Todo from '../../../../src/component/TodoList/Todo';

expect.extend({ toBeInTheDocument, });

describe('<Todo />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<Todo />);
    expect(getByTestId('todo_block')).toBeInTheDocument();
  });
});
