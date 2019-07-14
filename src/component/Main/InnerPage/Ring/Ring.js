import React from 'react';
import Circle from '../../../Circle';
import PanelHeader from '../PanelHeader';
import styles from './index.scss';

const ringList = [
  'NONE', 'DEFAULT', 'ALARM', 'ALERT', 'BEEP', 'BELL',
  'BIRD', 'BUGLE', 'DIGITAL', 'DROP', 'HORN', 'MUSIC'
];

const RingItem = (props) => {
  const { ringName, } = props;
  return (
    <div className={styles.ringItem_block}>
      <Circle style={{
        border: '3px solid #FFFFFF', width: '16px', height: '16px', marginRight: '10px',
      }}
      />
      {ringName}
    </div>
  );
};

const Ring = () => (
  <div
    className={styles.ring_block}
    data-testid="ring_block"
  >
    <PanelHeader title="WORK" />
    <div className={styles.ring_content_block}>
      {ringList.map(ringName => <RingItem key={ringName} ringName={ringName} />)}
    </div>
    <div className={styles.row_height} />
    <PanelHeader title="BREAK" />
    <div className={styles.ring_content_block}>
      {ringList.map(ringName => <RingItem key={ringName} ringName={ringName} />)}
    </div>
  </div>
);

export default Ring;
