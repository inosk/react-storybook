import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import TodoItem from './TodoItem';
import TodoOptions from './TodoOptions';
import { actions } from '../../ducks/Todo';

export default class Todo extends React.PureComponent {
  static propTypes = {
    newTodo: PropTypes.string,
    $$todos: PropTypes.instanceOf(List),
    updateNewTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    toggleVisible: PropTypes.func.isRequired,
  };

  handleChange(event) {
    this.props.updateNewTodo(event.target.value);
  }

  handleCheck(event) {
    const todoId = event.target.id;
    this.props.toggleTodo(todoId);
  }

  handleEnterKeyDown(event) {
    const ENTER_KEY_CODE = 13;

    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      this.props.addTodo(event.target.value);
    }
  }

  render() {
    const { newTodo, $$todos, visible, toggleVisible } = this.props;

    return (
      <div>
        <input
          value={newTodo}
          onChange={(event) => { this.handleChange(event); }}
          onKeyDown={(event) => { this.handleEnterKeyDown(event); }}
        />

        <TodoOptions
          visible={visible}
          toggleVisible={toggleVisible}
        />

        {
          $$todos.map(($$todo, index) => {
            if (visible || !$$todo.get('done')) {
              return (
                <TodoItem
                  key={index}
                  todoId={index}
                  todo={$$todo.get('todo')}
                  done={$$todo.get('done')}
                  handleCheck={e => this.handleCheck(e)}
                />
              );
            }
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTodo: state.get('newTodo'),
    $$todos: state.get('todos'),
    visible: state.get('visible'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch),
  };
}

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
