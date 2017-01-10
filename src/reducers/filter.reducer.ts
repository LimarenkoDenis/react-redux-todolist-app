import { browserHistory } from 'react-router/lib';

import { FilterActions } from '../actions/action.types';

export interface IFilterState {
	active?: boolean;
	searchTemplate: string;
}

const initialState: IFilterState = {
	active: false,
	searchTemplate: ''
};

const filterReducer = (state: any = initialState, action: any): Object => {
	switch (action.type) {
		case FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER]:
			if (action.active) {
				browserHistory.push('active');
			} else {
				browserHistory.push('all');
			}

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