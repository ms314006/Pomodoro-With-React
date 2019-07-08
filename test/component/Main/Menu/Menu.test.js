import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Menu from '../../../../src/component/Main/Menu';

expect.extend({ toBeInTheDocument, });

describe('<Menu />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<Menu />);
    expect(getByTestId('menu_block')).toBeInTheDocument();
  });
});
