import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);
//debug
setTimeout(()=> console.log(store.getState()), 7000);

export default store;
