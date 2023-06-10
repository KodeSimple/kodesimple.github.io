import { createStore } from 'redux';
import userReducer from './userReducer';

const store = createStore(userReducer);
console.log(store);
export default store;