import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import styles from './index.scss';

const TodoList = (props) => {
  const { todoList, } = props;
  return (
    <div
      className={styles.todoList_block}
      data-testid="todoList_block"
    >
      { todoList.map(todo => <Todo key={todo.id} todo={todo} />) }
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({})),
};

TodoList.defaultProps = {
  todoList: [],
};

const mapStateToProps = state => ({
  todoList: state.todoList,
});

export default connect(mapStateToProps)(TodoList);
