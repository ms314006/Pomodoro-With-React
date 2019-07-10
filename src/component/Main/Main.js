import React from 'react';
import { Provider } from 'react-redux';
import Information from './Information';
import TimeController from './TimeController';
import Menu from './Menu';
import store from '../../store';
import styles from './index.scss';

const Main = () => (
  <Provider store={store}>
    <div
      className={styles.main_block}
      data-testid="main_block"
    >
      <Information />
      <TimeController />
      <Menu />
    </div>
  </Provider>
);

export default Main;
