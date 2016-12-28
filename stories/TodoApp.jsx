import React from 'react';
import { Provider } from 'react-redux';
import { TodoContainer } from '../components/Todo';
import todoStore from '../store/Todo';

const TodoApp = () => (
  <Provider store={todoStore}>
    <TodoContainer />
  </Provider>
);

export default TodoApp;
