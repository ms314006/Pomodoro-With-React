export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const ADD_SPEND_SECONDS = 'ADD_SPEND_SECONDS';

export const addSpendSeconds = id => ({
  type: ADD_SPEND_SECONDS,
  payload: {
    id,
  },
});

export const CHECK_TODO = 'CHECK_TODO';

export const checkTodo = ({ id, completed, }) => ({
  type: CHECK_TODO,
  payload: {
    id,
    completed,
  },
});
