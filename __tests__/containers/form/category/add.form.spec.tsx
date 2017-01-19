import * as React from 'react';
import { shallow } from 'enzyme';

import { CategoryAddForm } from '../../../../src/containers/form/category/add.form';

describe('Category add form tests', () => {
	let addForm: any;

	beforeAll(() => {
		addForm = shallow(<CategoryAddForm />);
	});

	it('Should generate a add form', () => {
		const input: any = addForm.find('input').first();
		const button: any = addForm.find('button').first();

		expect(input.length).toBe(1);
		expect(button).not.toBe(null);
	});
});