import { createStore } from 'redux';
import reducer from '../ducks/Todo';

const store = createStore(reducer);
export default store;
