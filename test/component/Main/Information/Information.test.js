import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Information from '../../../../src/component/Main/Information';
import reducer from '../../../../src/reducer/todolist';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('<Information />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = renderWithRedux(
      <HashRouter>
        <Information />
      </HashRouter>
    );
    // 區塊
    expect(getByTestId('information_block')).toBeInTheDocument();

    // more 連結
    expect(getByTestId('todolist_link')).toBeInTheDocument();
  });


  test('Link 是否會正確改變路由', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });
    const { getByTestId, } = renderWithRedux(
      <Router history={history}>
        <Information />
      </Router>
    );

    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByTestId('todolist_link'));
    expect(history.location.pathname).toBe('/todolist/overview');
  });
});
