import { browserHistory } from 'react-router/lib';

import { FilterActions } from '../../src/actions/action.types';

export interface IFilterState {
	active?: boolean;
	searchTemplate: string;
}

const initialState: IFilterState = {
	active: false,
	searchTemplate: ''
};

export const filterReducer = (state: any = initialState, action: any): Object => {
	switch (action.type) {
		case FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER]:
			//for jest tests
			try {
				if (action.data) {
					browserHistory.push('active');
				} else {
					browserHistory.push('all');
				}
			} catch (err) { }

			return { ...state, active: action.data };

		case FilterActions[FilterActions.SET_SEARCH_TEMPLATE]:
			return {
				...state,
				searchTemplate: action.data
			};

		default:
			return state;
	}
};

export default filterReducer;