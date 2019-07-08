import React from 'react';
import AddTodoInput from '../../AddTodoInput';
import Circle from '../../Circle';
import styles from './index.scss';

const Information = (props) => {
  const { } = props;
  return (
    <div
      className={styles.information_block}
      data-testid="information_block"
    >
      <AddTodoInput />
      <div className={styles.current_todo_block}>
        <Circle style={{ border: '1px solid #003164', width: '48px', height: '48px', }} />
        <div className={styles.todo_information_block}>
          <span>Current_todo</span>
          <div className={styles.current_tomato_block}>
            <Circle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
