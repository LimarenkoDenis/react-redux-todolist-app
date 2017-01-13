import { FilterActions } from '../actions/action.types';

const setSearchTemplate = (data: string) => {
	return {
		type: FilterActions[FilterActions.SET_SEARCH_TEMPLATE],
		data
	};
};

const toggleActiveFilter = (data: boolean) => {
	return {
		type: FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER],
		data
	};
};

export { setSearchTemplate, toggleActiveFilter };
