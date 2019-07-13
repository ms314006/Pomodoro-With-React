import React from 'react';
import { Link } from 'react-router-dom';
import AddTodoInput from '../../AddTodoInput';
import Time from '../../Time';
import Circle from '../../Circle';
import TodoList from '../../TodoList';
import styles from './index.scss';

const Information = () => (
  <div
    className={styles.information_block}
    data-testid="information_block"
  >
    <AddTodoInput />
    <div className={styles.center_block}>
      <div className={styles.current_todo_block}>
        <Circle style={{ border: '1px solid #003164', width: '48px', height: '48px', }} />
        <div className={styles.todo_information_block}>
          <span>Current_todo</span>
          <div className={styles.current_tomato_block}>
            <Circle style={{
              backgroundColor: '#003164',
              width: '13px',
              height: '13px',
              marginRight: '8px',
            }}
            />
            <Circle style={{ border: '1px solid #FF4384', width: '12px', height: '12px', }} />
          </div>
        </div>
      </div>
      <Time />
    </div>
    <div>
      <TodoList listCount={3} />
      <div className={styles.more_link}>
        <Link
          className={styles.clean_link_style}
          data-testid="todolist_link"
          to="/todolist"
        >
          MORE
        </Link>
      </div>
    </div>
  </div>
);

export default Information;
