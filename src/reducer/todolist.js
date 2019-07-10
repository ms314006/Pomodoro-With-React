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
  const getTargetIndex = () => state.todoList.findIndex(todo => todo.id === action.payload.id);
  const cloneArray = array => array.map(item => item);
  const updateTodoStatus = (value) => {
    const todoList = cloneArray(state.todoList);
    const targetTodo = todoList[getTargetIndex()];
    todoList.splice(getTargetIndex(), 1, {
      ...targetTodo,
      ...value,
    });
    return todoList;
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
            name: action.payload.todo.name,
            completed: false,
            spendSeconds: 0,
          }
        ],
      };
    case ADD_SPEND_SECONDS:
      return {
        ...state,
        todoList: [
          ...updateTodoStatus({ spendSeconds: state.todoList[getTargetIndex()].spendSeconds + 1, })
        ],
      };
    case CHECK_TODO:
      return {
        ...state,
        todoList: [
          ...updateTodoStatus({ completed: action.payload.completed, })
        ],
      };
    default:
      return state;
  }
};

export default todolist;
