import Immutable, { Map } from 'immutable';

// Actions
const UPDATE_NEW_TODO = 'Todo/UPDATE_NEW_TODO';
const ADD_TODO = 'Todo/ADD_TODO';
const TOGGLE_TODO = 'Todo/TOGGLE_TODO';

export const $$initialState = Immutable.fromJS({
  newTodo: '',
  todos: [],
});

// Reducer
const reducer = ($$state = $$initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_NEW_TODO:
      return $$state.set('newTodo', action.value);
    case ADD_TODO:
      return $$state.merge({
        newTodo: '',
        todos: $$state.get('todos').push(new Map({ name: action.name, done: false })),
      });
    case TOGGLE_TODO: {
      const key = ['todos', action.todoId, 'done'];
      return $$state.setIn(key, !$$state.getIn(key));
    }
    default:
      return $$state;
  }
};

export default reducer;

// Action Creators
function updateNewTodo(value) {
  return { type: UPDATE_NEW_TODO, value };
}

function addTodo(name) {
  return { type: ADD_TODO, name };
}

function toggleTodo(todoId) {
  return { type: TOGGLE_TODO, todoId };
}

export const actions = {
  updateNewTodo,
  addTodo,
  toggleTodo,
};
