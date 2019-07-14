import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PanelHeader = (props) => {
  const { title, close, } = props;
  return (
    <div className={styles.panel_header_block}>
      <span>{title}</span>
      {close ? <i className="fas fa-caret-down" /> : null}
    </div>
  );
};

PanelHeader.propTypes = {
  title: PropTypes.string,
  close: PropTypes.bool,
};

PanelHeader.defaultProps = {
  title: '',
  close: false,
};

export default PanelHeader;
