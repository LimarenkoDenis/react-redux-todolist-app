import * as React from 'react';
import { render } from 'enzyme';

import { TaskEditForm, ITaskEditFormProps } from '../../../../src/containers/form/task/edit.form';

describe('Edit form tests', () => {
	const fakeProps: ITaskEditFormProps = {
		task: { id: 1, title: 'Test 1', active: false, description: 'description...' }
	};
	let editForm: any;

	beforeAll(() => {
		editForm = render(<TaskEditForm task={fakeProps.task} />);
	});

	it('Should generate a edit form', () => {
		const buttons: any = editForm.find('button');
		const titleInput: any = editForm.find('#formTaskTitle').first();
		const descriptionInput: any = editForm.find('#formTaskDescription').first();
		const activeCheckbox: any = editForm.find('input[type="checkbox"]').first();

		expect(buttons).not.toBe(null);
		expect(titleInput.length).toBe(1);
		expect(descriptionInput.length).toBe(1);
		expect(activeCheckbox.length).toBe(1);
	});
});