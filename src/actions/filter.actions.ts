import { FilterActions } from '../actions/action.types';

const toggleActiveFilter = (active) => {
	return {
		type: FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER],
		active
	};
};

const setSearchTemplate = (template) => {
	return {
		type: FilterActions[FilterActions.SET_SEARCH_TEMPLATE],
		template
	};
};

export { toggleActiveFilter, setSearchTemplate };
