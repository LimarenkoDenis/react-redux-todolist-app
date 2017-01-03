import { combineReducers } from 'redux';

import taskReducer from './task.reducer';
import categoryReducer from './category.reducer';
import filterReducer from './filter.reducer';
import editReducer from './edit.reducer';

const reducer = combineReducers({
	tasks: taskReducer,
	categories: categoryReducer,
	filterState: filterReducer,
	editState: editReducer
});

export default reducer;