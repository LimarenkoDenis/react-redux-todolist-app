import { FilterActions } from '../../src/actions/action.types';
import { setSearchTemplate, toggleActiveFilter } from '../../src/actions/filter.actions';

describe('Filter actions test', () => {
	it('Should create setting new search template action', () => {
		const template: string = 'templ';

		const expectedAction: Object = {
			type: FilterActions[FilterActions.SET_SEARCH_TEMPLATE],
			data: template
		};

		expect(setSearchTemplate(template)).toEqual(expectedAction);
	});

	it('Should create filter toggle action', () => {
		const toggle: boolean = true;

		const expectedAction: Object = {
			type: FilterActions[FilterActions.TOGGLE_ACTIVE_FILTER],
			data: toggle
		};

		expect(toggleActiveFilter(toggle)).toEqual(expectedAction);
	});
});

