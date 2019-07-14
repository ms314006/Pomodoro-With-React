import React from 'react';
import TodoList from '../../../TodoList';
import AddTodoInput from '../../../AddTodoInput';
import PanelHeader from '../PanelHeader';
import styles from './index.scss';

const TodoListOverview = (props) => {
  const { match, } = props;
  return (
    <div
      className={styles.todoListOverview_block}
      data-testid="todoListOverview_block"
    >
      <AddTodoInput />
      <div className={styles.row_height}>
        <PanelHeader title="TO - DO" close />
      </div>
      <TodoList match={match} />
      <div className={styles.row_height}>
        <PanelHeader title="DONE" close />
      </div>
      <TodoList match={match} />
    </div>
  );
};

export default TodoListOverview;
