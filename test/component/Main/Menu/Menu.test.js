import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from 'jest-dom';
import Menu from '../../../../src/component/Main/Menu';

expect.extend({ toBeInTheDocument, });

describe('<Menu />', () => {
  afterEach(() => {
    cleanup();
  });

  test('是否正常 render', () => {
    const { getByTestId, } = render(
      <HashRouter>
        <Menu />
      </HashRouter>
    );
    expect(getByTestId('menu_block')).toBeInTheDocument();
    expect(getByTestId('menu_list_block')).toBeInTheDocument();
    expect(getByTestId('logo_block')).toBeInTheDocument();
  });

  test('Link 是否會正確改變路由', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });
    const { getByTestId, } = render(
      <Router history={history}>
        <Menu />
      </Router>
    );

    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByTestId('menu_icon_todlist'));
    expect(history.location.pathname).toBe('/todolist/overview');

    fireEvent.click(getByTestId('menu_icon_chart'));
    expect(history.location.pathname).toBe('/todolist/chart');

    fireEvent.click(getByTestId('menu_icon_ring'));
    expect(history.location.pathname).toBe('/todolist/ring');
  });

  test('回首頁的 Icon render 的時機只能在首頁以外', () => {
    const route = '/todolist';
    const history = createMemoryHistory({ initialEntries: [route], });
    const { getByTestId, } = render(
      <Router history={history}>
        <Menu match={{ path: '/todolist', }} />
      </Router>
    );

    fireEvent.click(getByTestId('menu_icon_close'));
    expect(history.location.pathname).toBe('/');
  });
});
