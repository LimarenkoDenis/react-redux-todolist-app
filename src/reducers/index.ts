import { combineReducers } from 'redux';

import todoReducer from './todo.reducer';
import categoryReducer from './category.reducer';
import filterReducer from './filter.reducer';
import editReducer from './edit.reducer';

const reducer = combineReducers({
	todoList: todoReducer,
	categoryList: categoryReducer,
	filterState: filterReducer,
	editState: editReducer
});

export default reducer;