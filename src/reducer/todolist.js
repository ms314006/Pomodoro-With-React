import { ADD_TODO, ADD_SPEND_SECONDS, CHECK_TODO } from '../actions/todolist';

const initState = {
  currentId: 0,
  todoList: [
    {
      id: 0,
      name: 'TodoList 1',
      completed: false,
      spendSeconds: 0,
    }
  ],
};

const todolist = (state = initState, action) => {

  const getTargetIndex = () => {
    state.todoList.findIndex(todo => todo.id === action.payload.id);
  };

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        currentId: state.currentId + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.currentId + 1,
            ...action.payload.todo,
          }
        ],
      };
    case ADD_SPEND_SECONDS:
      state.todoList.splice(getTargetIndex(), 1, {
        ...state.todoList[getTargetIndex()],
        spendSeconds: state.todoList[getTargetIndex()].spendSeconds + 1,
      });
      return { ...state, };
    case CHECK_TODO: {
      state.todoList.splice(getTargetIndex(), 1, {
        ...state.todoList[getTargetIndex()],
        completed: action.payload.completed,
      });
      return { ...state, };
    }
    default:
      return state;
  }
};

export default todolist;
