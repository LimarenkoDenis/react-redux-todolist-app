import { filterReducer, IFilterState } from '../../src/reducers/filter.reducer';

import { FilterActions } from '../../src/actions/action.types';

describe('Filter reducer tests', () => {
	const initialState: IFilterState = {
		active: null,
		searchTemplate: ''
	};

	it('Should return the initial state', () => {
		expect(filterReducer(initialState, {})).toEqual(initialState);
	});

	it('Should set new search template', () => {
		expect(
			filterReducer(initialState, {
				type: FilterActions[FilterActions.SET_SEARCH_TEMPLATE],
				data: 'templ'
			})
		).toEqual({
			active: null,
			searchTemplate: 'templ'
		});
	});

	it('Should update state of filter (active or not)', () => {
		expect(
			filterReducer(initialState, {
				type: FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER],
				data: true
			})
		).toEqual({
			active: true,
			searchTemplate: ''
		});

		expect(
			filterReducer(initialState, {
				type: FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER],
				data: false
			})
		).toEqual({
			active: false,
			searchTemplate: ''
		});
	});
});