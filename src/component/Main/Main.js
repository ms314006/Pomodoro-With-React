import React from 'react';
import Information from './Information';
import TimeController from './TimeController';
import Menu from './Menu';
import styles from './index.scss';

const Main = () => (
  <div
    className={styles.main_block}
    data-testid="main_block"
  >
    <Information />
    <TimeController />
    <Menu />
  </div>
);

export default Main;
