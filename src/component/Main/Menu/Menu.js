import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Menu = (props) => {
  const { } = props;
  return (
    <div
      className={styles.menu_block}
      data-testid="menu_block"
    >
      <div
        className={styles.menu_list_block}
        data-testid="menu_list_block"
      >
        <div>
          <Link
            to="/todolist"
            className={styles.menu_icon}
            data-testid="menu_icon_todlist"
          >
            <i className="fas fa-list" />
          </Link>
        </div>
        <div>
          <Link
            to="/todolist/chart"
            className={styles.menu_icon}
            data-testid="menu_icon_chart"
          >
            <i className="fas fa-poll" />
          </Link>
        </div>
        <div>
          <Link
            to="/todolist/ring"
            className={styles.menu_icon}
            data-testid="menu_icon_ring"
          >
            <i className="fab fa-itunes-note" />
          </Link>
        </div>
      </div>
      <div />
      <div
        className={styles.logo_block}
        data-testid="logo_block"
      >
        <span className={styles.logo}>
          POMODORO
        </span>
      </div>
    </div>
  );
};

export default Menu;
