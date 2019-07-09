import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Circle from '../../../src/component/Circle';

expect.extend({ toBeInTheDocument, });

describe('<Circle />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<Circle />);
    expect(getByTestId('circle_block')).toBeInTheDocument();
  });
});
