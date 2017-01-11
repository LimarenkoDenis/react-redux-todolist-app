import { FilterActions } from '../actions/action.types';

const setSearchTemplate = (template: string) => {
	return {
		type: FilterActions[FilterActions.SET_SEARCH_TEMPLATE],
		template
	};
};

const toggleActiveFilter = (active: boolean) => {
	return {
		type: FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER],
		active
	};
};

export { setSearchTemplate, toggleActiveFilter };
