import React, { PropTypes } from 'react';

export default class TodoItem extends React.PureComponent {
  static propTypes = {
    todoId: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool,
    handleCheck: PropTypes.func.isRequired,
  }

  render() {
    const { todoId, todo, done, handleCheck } = this.props;

    return (
      <div>
        <input type="checkbox" id={todoId} checked={done} onChange={(event) => { handleCheck(event); }} />
        <label htmlFor={todoId}>{todo}</label>
      </div>
    );
  }
}
