import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Information from '../../../../src/component/Main/Information';

expect.extend({ toBeInTheDocument, });

describe('<Information />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<Information />);
    expect(getByTestId('information_block')).toBeInTheDocument();
  });
});
