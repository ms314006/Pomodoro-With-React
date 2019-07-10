import React from 'react';
import PropTypes from 'prop-types';
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

Circle.propTypes = {
  style: PropTypes.shape({}),
};

Circle.defaultProps = {
  style: {},
};

export default Circle;
