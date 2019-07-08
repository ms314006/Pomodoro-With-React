import React from 'react';
import styles from './index.scss';

const TimeController = (props) => {
  const { } = props;
  return (
    <div
      className={styles.timeController_block}
      data-testid="timeController_block"
    >
      <div className={styles.outside_border_circle} />
      <div className={styles.inside_fill_circle} />
      <div className={styles.controller_button_block}>
        <button
          type="button"
          className={styles.start_button}
          data-testid="start_button"
        >
          <i className="fas fa-caret-right" style={{ width: '85px', }} />
        </button>
        <button
          type="button"
          className={styles.end_button}
          data-testid="end_button"
        />
      </div>
    </div>
  );
};

export default TimeController;
