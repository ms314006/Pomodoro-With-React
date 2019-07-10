import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../actions/todolist';
import styles from './index.scss';

const AddTodoInput = (props) => {
  const [todoName, setTodoName] = useState('');
  return (
    <div
      className={styles.add_todo_input_block}
      data-testid="add_todo_input_block"
    >
      <input
        value={todoName}
        className={styles.add_todo_input}
        placeholder="ADD A NEW MISSION..."
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
        data-testid="add_todo_input"
      />
      <i
        className={`fas fa-plus ${styles.add_todo_icon}`}
        onClick={() => {
          props.addTodo(todoName);
          setTodoName('');
        }}
        onKeyDown={() => {}}
        data-testid="add_todo_button"
      />
    </div>
  );
};

AddTodoInput.propTypes = {
  addTodo: PropTypes.func,
};

AddTodoInput.defaultProps = {
  addTodo: () => {},
};

const mapStateToDispatch = dispatch => ({
  addTodo: (name) => { dispatch(addTodo({ name, })); },
});

export default connect(null, mapStateToDispatch)(AddTodoInput);
