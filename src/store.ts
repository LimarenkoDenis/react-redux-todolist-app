import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);
setTimeout(()=> console.log(store.getState()), 3000);
export default store;
