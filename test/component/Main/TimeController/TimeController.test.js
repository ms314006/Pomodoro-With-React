import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import TimeController from '../../../../src/component/Main/TimeController';

expect.extend({ toBeInTheDocument, });

describe('<TimeController />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(<TimeController />);
    expect(getByTestId('timeController_block')).toBeInTheDocument();
    expect(getByTestId('start_button')).toBeInTheDocument();
    expect(getByTestId('end_button')).toBeInTheDocument();
  });
});
