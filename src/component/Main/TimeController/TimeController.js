import React from 'react';
import Circle from '../../Circle';
import styles from './index.scss';

const TimeController = (props) => {
  const { } = props;
  return (
    <div
      className={styles.timeController_block}
      data-testid="timeController_block"
    >
      <div className={styles.outside_circle}>
        <Circle style={{
          width: '100%',
          height: '100%',
          border: '4px solid #FF4384',
          boxSizing: 'border-box',
        }}
        />
      </div>
      <div className={styles.inside_circle}>
        <Circle style={{
          backgroundColor: '#FF4384',
          height: '100%',
          width: '100%',
          border: 'none',
        }}
        />
      </div>
      <div className={styles.controller_button_block}>
        <i
          className={`fas fa-play-circle ${styles.start_button}`}
          data-testid="start_button"
        />
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
