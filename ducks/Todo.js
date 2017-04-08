import { List } from 'immutable';
import TodoState from '../models/TodoState.js';

// Actions
const UPDATE_NEW_TODO = 'Todo/UPDATE_NEW_TODO';
const ADD_TODO = 'Todo/ADD_TODO';
const TOGGLE_TODO = 'Todo/TOGGLE_TODO';
const TOGGLE_VISIBLE = 'Todo/TOGGLE_VISIBLE';

// Action Creators
function updateNewTodo(value) {
  return { type: UPDATE_NEW_TODO, value };
}

function addTodo(todo) {
  return { type: ADD_TODO, value: todo };
}

function toggleTodo(todoId) {
  return { type: TOGGLE_TODO, value: todoId };
}

function toggleVisible() {
  return { type: TOGGLE_VISIBLE }
}

export const actions = {
  updateNewTodo,
  addTodo,
  toggleTodo,
  toggleVisible,
};

// initialState
export const $$initialState = new TodoState({
  newTodo: '',
  todos: new List,
});

// Reducer
const reducer = ($$state = $$initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_NEW_TODO:
      return $$state.setNewTodo(action.value);
    case ADD_TODO:
      return $$state.addTodo(action.value);
    case TOGGLE_TODO:
      return $$state.toggleTodo(action.value);
    case TOGGLE_VISIBLE:
      return $$state.toggleVisible();
    default:
      return $$state;
  }
};

export default reducer;
