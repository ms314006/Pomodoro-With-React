import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import styles from './index.scss';

const TodoList = (props) => {
  const { todoList, match, } = props;
  const displayListCount = match.path.indexOf('todolist') !== -1 ? todoList.length : 3;
  return (
    <div
      className={styles.todoList_block}
      data-testid="todoList_block"
    >
      { todoList.slice(0, displayListCount).map(todo => <Todo key={todo.id} todo={todo} match={match} />) }
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({})),
  match: PropTypes.shape({}),
};

TodoList.defaultProps = {
  todoList: [],
  match: {
    path: '',
  },
};

const mapStateToProps = state => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps)(TodoList);
