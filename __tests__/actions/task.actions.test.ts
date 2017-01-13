import { TaskActions } from '../../src/actions/action.types';
import { addTask, cancelTaskEdit, chooseTask, editTask, saveTask, toggleTask, NEXT_ROOT_TASK_ID } from '../../src/actions/task.actions';

import { TaskModel } from '../../src/models/task.model';

describe('Task actions test', () => {
	it('Should create add task action', () => {
		const taskTitle: string = 'task 4';
		const categoryId: number = 1;

		const expectedAction: Object = {
			type: TaskActions[TaskActions.ADD_TASK],
			data: {
				taskId: NEXT_ROOT_TASK_ID,
				taskTitle,
				categoryId
			}
		};

		expect(addTask(taskTitle, categoryId)).toEqual(expectedAction);
	});

	it('Should create cancel edit task action', () => {
		const expectedAction: Object = {
			type: TaskActions[TaskActions.CANCEL_TASK_EDIT],
		};

		expect(cancelTaskEdit()).toEqual(expectedAction);
	});

	it('Should create choose task action', () => {
		const id: number = 1;
		const title: string = 'task 1';

		const expectedAction: Object = {
			type: TaskActions[TaskActions.CHOOSE_TASK],
			data: {
				id,
				title
			}
		};

		expect(chooseTask(id, title)).toEqual(expectedAction);
	});

	it('Should create edit task action', () => {
		const task: TaskModel = {
			id: 1, title: 'task 1', active: false, description: 'description...'
		};

		const expectedAction: Object = {
			type: TaskActions[TaskActions.EDIT_TASK],
			data: task
		};

		expect(editTask(task)).toEqual(expectedAction);
	});

	it('Should create save task action', () => {
		const task: TaskModel = {
			id: 1, title: 'task 1', active: false, description: 'description...'
		};

		const expectedAction: Object = {
			type: TaskActions[TaskActions.SAVE_TASK],
			data: task
		};

		expect(saveTask(task)).toEqual(expectedAction);
	});

	it('Should create toggle task action', () => {
		const id: number = 1;

		const expectedAction: Object = {
			type: TaskActions[TaskActions.TOGGLE_TASK],
			data: id
		};

		expect(toggleTask(id)).toEqual(expectedAction);
	});
});