import React from 'react';
import TodoItem from './TodoItem';

export default class Todo extends React.PureComponent {
  componentWillMount() {
    this.setState({
      newTodo: '',
      todos: [],
    });
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleCheck(event) {
    const todoId = event.target.id;
    const checked = event.target.checked;
    const newTodos = this.state.todos;

    newTodos[todoId].done = checked;

    this.setState({ todos: newTodos });
  }

  handleEnterKeyDown(event) {
    const ENTER_KEY_CODE = 13;

    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      const value = event.target.value;

      this.setState({
        newTodo: '',
        todos: this.state.todos.concat({ name: value, done: false }),
      });
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.newTodo}
          onChange={(event) => { this.handleChange(event); }}
          onKeyDown={(event) => { this.handleEnterKeyDown(event); }}
        />

        {
          this.state.todos.map((todo, index) => (
            <TodoItem
              key={index}
              todoId={index}
              todo={todo.name}
              done={todo.done}
              handleCheck={this.handleCheck}
            />
          ))
        }
      </div>
    );
  }
}
