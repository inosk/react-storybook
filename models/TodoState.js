import { Record, List, Map} from 'immutable'

const TodoStateRecord = Record({
  newTodo: '',
  todos: new List,
});

export default class TodoState extends TodoStateRecord {
  setNewTodo(todo) {
    return this.set('newTodo', todo);
  }

  addTodo(todo) {
    const todoModel = Map({ todo, done: false });
    return this.set('newTodo', '').update('todos', todos => todos.push(todoModel));
  }

  toggleTodo(todoId) {
    return this.updateIn(['todos', todoId, 'done'], done => !done);
  }
}
