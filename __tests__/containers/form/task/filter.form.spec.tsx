import * as React from 'react';
import { shallow } from 'enzyme';

import { Filter } from '../../../../src/containers/form/task/filter.form';

describe('Filter form tests', () => {
	let filter: any;

	beforeAll(() => {
		filter = shallow(<Filter />);
	});

	it('Should generate a filter form', () => {
		const input: any = filter.find('input').first();
		const button: any = filter.find('button').first();

		expect(input.length).toBe(1);
		expect(button).not.toBe(null);
	});
});