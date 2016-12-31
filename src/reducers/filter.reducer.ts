// import { FilterActions } from '../actions/action.types';

const initialState = {
	active: false,
	searchTemplate: ''
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		// case FilterActions[FilterActions.SET_ACTIVE_FILTER]:
		// 	break;
		// case FilterActions[FilterActions.SET_SEARCH_TEMPLATE]:
		// 	break;
		default:
			return state;
	}
};

export default filterReducer;