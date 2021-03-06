import undoable, { distinctState } from 'redux-undo';
import { combineReducers } from 'redux';

import taskReducer from './task.reducer';
import categoryReducer from './category.reducer';
import filterReducer from './filter.reducer';
import editReducer from './edit.reducer';

export { ITasksState } from './task.reducer';
export { ICategoriesState } from './category.reducer';
export { IFilterState } from './filter.reducer';
export { IEditState } from './edit.reducer';

const reducer = combineReducers({
	tasks: taskReducer,
	categories: categoryReducer,
	filterState: filterReducer,
	editState: editReducer
});

const undoableStore = undoable(reducer, {
	filter: distinctState()
});

export default undoableStore;