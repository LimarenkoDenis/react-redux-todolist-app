import { TaskActions, CategoryActions } from '../actions/action.types';

const initialState = {
	active: false,
	task: null
};

const editReducer = (state = initialState, action) => {
	switch (action.type) {
		case TaskActions[TaskActions.EDIT_TASK]:
			let {id, title, completed} = action;
			return { active: true, task: { id, title, completed } };

		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]:
			return { active: false, task: null };
		// case CategoryActions[CategoryActions.EDIT_CATEGORY]:
		// 	break;
		default:
			return state;
	}
}

export default editReducer;