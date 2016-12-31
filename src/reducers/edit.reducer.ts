// import { TaskActions, CategoryActions } from '../actions/action.types';

const initialState = {
	active: false,
	currentTodoID: null
};

const editReducer = (state = initialState, action) => {
	switch (action.type) {
		// case TaskActions[TaskActions.EDIT_TASK]:
		// 	break;
		// case CategoryActions[CategoryActions.EDIT_CATEGORY]:
		// 	break;
		default:
			return state;
	}
}

export default editReducer;