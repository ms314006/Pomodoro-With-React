import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Information from './Information';
import TimeController from './TimeController';
import Menu from './Menu';
import store from '../../store';
import styles from './index.scss';

const HomePage = () => (
  <>
    <Information />
    <TimeController />
    <Menu />
  </>
);

const Main = () => (
  <Provider store={store}>
    <HashRouter>
      <div
        className={styles.main_block}
        data-testid="main_block"
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default Main;
