import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Time from '../../../src/component/Time';

expect.extend({ toBeInTheDocument, });

describe('<Time />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<Time />);
    expect(getByTestId('time_block')).toBeInTheDocument();
  });
});
