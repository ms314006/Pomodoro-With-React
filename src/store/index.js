import { createStore } from 'redux';
import reducer from '../reducer/todolist.js';

export default createStore(
  reducer
);
