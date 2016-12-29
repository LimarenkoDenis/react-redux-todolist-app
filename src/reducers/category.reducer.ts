import { CategoryActions } from '../actions/action.types';

const initialState = {
	categoryByID: {}
}

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case CategoryActions[CategoryActions.ADD_CATEGORY]:
			return {
				...state.categoryByID
			};
		case CategoryActions[CategoryActions.EDIT_CATEGORY]:
			return;
		case CategoryActions[CategoryActions.TOGGLE_CATEGORY]:
			return;
		case CategoryActions[CategoryActions.DELETE_CATEGORY]:
			return;
		case CategoryActions[CategoryActions.NEST_CATEGORY]:
			return;
		case CategoryActions[CategoryActions.ADD_SUBCATEGORY]:
			return;
		default:
			return state;
	}
};

export default categoryReducer;