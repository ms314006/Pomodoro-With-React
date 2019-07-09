import React from 'react';
import styles from './index.scss';

const AddTodoInput = () => (
  <div
    className={styles.add_todo_input_block}
    data-testid="add_todo_input_block"
  >
    <input
      className={styles.add_todo_input}
      value="ADD A NEW MISSION..."
    />
    <i className={`fas fa-plus ${styles.add_todo_icon}`} />
  </div>
);

export default AddTodoInput;
