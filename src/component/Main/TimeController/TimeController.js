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
      <Circle style={{
        border: '4px solid #FF4384',
        position: 'absolute',
        height: '540px',
        width: '540px',
      }}
      />
      <Circle style={{
        backgroundColor: '#FF4384',
        position: 'absolute',
        height: '500px',
        width: '500px',
      }}
      />
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
