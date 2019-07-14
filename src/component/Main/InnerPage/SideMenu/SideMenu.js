import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Circle from '../../../Circle';
import styles from './index.scss';

const SideMenu = (props) => {
  const { match, } = props;

  const getFontColor = (targetPath) => {
    if (match.url === targetPath) {
      return '#FF4384';
    }
    return '#3B597F';
  };

  return (
    <div
      className={styles.sidebarMenu_block}
      data-testid="sidebarMenu_block"
    >
      <div className={styles.menu_block}>
        <div className={styles.menu_item}>
          <Link
            to="/todolist/overview"
            data-testid="menu_icon_todlist"
            className={styles.item_link}
            style={{
              color: getFontColor('/todolist/overview'),
            }}
          >
            <i className="fas fa-list" />
            <span className={styles.menu_name}>TO-DO LIST</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link
            to="/todolist/chart"
            data-testid="menu_icon_chart"
            className={styles.item_link}
            style={{
              color: getFontColor('/todolist/chart'),
            }}
          >
            <i className="fas fa-poll" />
            <span className={styles.menu_name}>ANALYTICS</span>
          </Link>
        </div>
        <div className={styles.menu_item}>
          <Link
            to="/todolist/ring"
            data-testid="menu_icon_ring"
            className={styles.item_link}
            style={{
              color: getFontColor('/todolist/ring'),
            }}
          >
            <i className="fab fa-itunes-note" />
            <span className={styles.menu_name}>RINGTONES</span>
          </Link>
        </div>
      </div>
      <div className={styles.littleTimeControl_block}>
        <div className={styles.littleTimeControl_main_circle}>
          <Circle style={{
            height: '350px',
            width: '350px',
            backgroundColor: '#FFEDF7',
            position: 'absolute',
          }}
          />
        </div>
        <div className={styles.littleTimeControl_button}>
          <div className={styles.littleTimeControl_button_icon}>
            <i className="fas fa-caret-right" />
          </div>
          <Circle style={{
            width: '130px',
            height: '130px',
            backgroundColor: '#003164',
            position: 'absolute',
          }}
          />
          <Circle style={{
            width: '115px',
            height: '115px',
            backgroundColor: '#FF4384',
            position: 'absolute',
          }}
          />
          <Circle style={{
            width: '95px',
            height: '95px',
            border: '7px solid #003164',
            position: 'absolute',
          }}
          />
        </div>
        <div className={styles.littleTimeControl_text}>
          <div className={styles.littleTimeControl_time_text}>
            <span>25:00</span>
          </div>
          <div className={styles.littleTimeControl_todoName_text}>
            <span>THE FIRST THING TO DO TODAY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  match: PropTypes.shape({}),
};

SideMenu.defaultProps = {
  match: {
    path: '',
  },
};

export default SideMenu;
