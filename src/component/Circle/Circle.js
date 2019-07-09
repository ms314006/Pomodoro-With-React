import React from 'react';
import styles from './index.scss';

const Circle = (props) => {
  const { style, } = props;
  return (
    <div
      style={style}
      className={styles.circle_block}
      data-testid="circle_block"
    />
  );
};

export default Circle;
