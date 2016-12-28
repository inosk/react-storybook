import React from 'react';

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

  handleEnterKeyDown(event) {
    const ENTER_KEY_CODE = 13;

    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      const value = event.target.value;

      this.setState({
        newTodo: '',
        todos: this.state.todos.concat([value]),
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
          this.state.todos.map((todo, index) => (<p key={index}>{todo}</p>))
        }
      </div>
    );
  }
}
