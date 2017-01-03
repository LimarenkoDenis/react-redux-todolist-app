import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import taskReducer from './task.reducer';
import categoryReducer from './category.reducer';
import filterReducer from './filter.reducer';
import editReducer from './edit.reducer';

const reducer = combineReducers({
	tasks: taskReducer,
	categories: categoryReducer,
	filterState: filterReducer,
	editState: editReducer,
	form: formReducer
});

export default reducer;