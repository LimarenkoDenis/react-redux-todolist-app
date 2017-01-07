import { browserHistory } from 'react-router/lib';

import { FilterActions } from '../actions/action.types';
import { IFilterState } from '../interfaces';

const initialState: IFilterState = {
	active: false,
	searchTemplate: ''
};

const filterReducer = (state: any = initialState, action: any) => {
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