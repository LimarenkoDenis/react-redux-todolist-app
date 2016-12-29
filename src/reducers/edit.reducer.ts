import { TodoActions, CategoryActions } from '../actions/action.types';

const editReducer = (state, action) => {
	switch (action.type) {
		case TodoActions[TodoActions.EDIT_TODO]:
			break;
		case CategoryActions[CategoryActions.EDIT_CATEGORY]:
			break;
		default:
			return false;
	}
}

export default editReducer;