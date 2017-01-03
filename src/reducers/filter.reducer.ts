import { FilterActions } from '../actions/action.types';

const initialState = {
	active: false,
	searchTemplate: ''
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER]:
			return { ...state, active: action.active };

		case FilterActions[FilterActions.SET_SEARCH_TEMPLATE]:
			return {
				...state,
				searchTemplate: action.template
			};

		default:
			return state;
	}
};

export default filterReducer;