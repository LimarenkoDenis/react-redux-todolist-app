import * as React from 'react';
import { mount } from 'enzyme';

import { Task } from '../../../src/components';
import { TaskModel } from '../../../src/models';

describe('Task component tests', () => {
	const task: TaskModel = { id: 1, title: 'Task 1', active: false, description: 'description...' };

	const onLIClick: any = jest.fn();
	const onCheckClick: any = jest.fn();
	const onEditClick: any = jest.fn();

	let wrapper: any;

	beforeAll(() => {
		wrapper = mount(
			<Task
				title={task.title}
				active={task.active}
				onLIClick={onLIClick}
				onCheckClick={onCheckClick}
				onEditClick={onEditClick}
			/>
		);
	});

	it('Should receive task props', () => {
		expect(wrapper.prop('title')).toBe(task.title);
		expect(wrapper.prop('active')).toBe(task.active);

		expect(wrapper.prop('onLIClick')).toBeDefined();
		expect(wrapper.prop('onCheckClick')).toBeDefined();
		expect(wrapper.prop('onEditClick')).toBeDefined();
	});

	it('Should render the title of the task', () => {
		expect(wrapper.find('.task-item input').props().value).toBe(task.title);
	});

	describe('Handlers tests', () => {
		it('Should handle onLIClick call', () => {
			const taskItem: any = wrapper.find('.task-item').first();

			taskItem.simulate('click');
			expect(onLIClick).toBeCalled();
		});

		it('Should handle onCheckClick call', () => {
			const checkSpan: any = wrapper.find('span.glyphicon-check').first();

			checkSpan.simulate('click');
			expect(onCheckClick).toBeCalled();
		});

		it('Should handle onEditClick call', () => {
			const editSpan: any = wrapper.find('span.glyphicon-edit').first();

			editSpan.simulate('click');
			expect(onEditClick).toBeCalled();
		});
	});
});