import React from 'react';
import PropTypes from 'prop-types';
import Circle from '../../Circle';
import styles from './index.scss';

const Todo = (props) => {
  const { todo, } = props;
  return (
    <div
      className={styles.todo_block}
      data-testid="todo_block"
    >
      <Circle style={{
        border: '1px solid #003164', width: '24px', height: '24px', marginRight: '10px',
      }}
      />
      <div className={styles.todo_name_block}>
        {todo.name}
      </div>
      <div className={styles.play_button_block}>
        <i className="far fa-play-circle" />
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({}),
};

Todo.defaultProps = {
  todo: {},
};

export default Todo;
