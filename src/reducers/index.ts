import { combineReducers } from 'redux';

import todoList from './todo-reducer';
import categoryList from './category-reducer';
import filterState from './filter-reducer';

const reducer = combineReducers({
	todoList,
	categoryList,
	filterState
});

export default reducer;