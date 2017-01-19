import * as React from 'react';
import { shallow } from 'enzyme';

import { TaskAddForm, IAddFormProps } from '../../../../src/containers/form/task/add.form';

describe('Task add form tests', () => {
	const fakeProps: IAddFormProps = {
		activeCategory: 1
	};
	let addForm: any;

	beforeAll(() => {
		addForm = shallow(<TaskAddForm activeCategory={fakeProps.activeCategory} />);
	});

	it('Should generate a add form', () => {
		const input: any = addForm.find('input').first();
		const button: any = addForm.find('button').first();

		expect(input.length).toBe(1);
		expect(button).not.toBe(null);
	});
});