import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import styles from './index.scss';

const TodoList = (props) => {
  const { todoList, listCount, } = props;
  return (
    <div
      className={styles.todoList_block}
      data-testid="todoList_block"
    >
      { todoList.slice(0, (listCount || todoList.length)).map(todo => <Todo key={todo.id} todo={todo} />) }
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({})),
  listCount: PropTypes.number,
};

TodoList.defaultProps = {
  todoList: [],
  listCount: 0,
};

const mapStateToProps = state => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps)(TodoList);
