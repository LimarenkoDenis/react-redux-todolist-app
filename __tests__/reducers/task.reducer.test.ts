import { taskReducer, ITasksState } from '../../src/reducers/task.reducer';

import { CategoryActions, TaskActions } from '../../src/actions/action.types';

describe('Task reducer tests', () => {
	const initialState: ITasksState = {
		list: [
			{ id: 1, title: 'task 1', active: false, description: 'description...' }
		],
		visibleList: []
	};

	Object.freeze(initialState);

	it('Should return the initial state', () => {
		expect(taskReducer(initialState, {})).toEqual(initialState);
	});

	it('Should add new task to store', () => {
		expect(
			taskReducer(initialState, {
				type: TaskActions[TaskActions.ADD_TASK],
				data: {
					taskId: 2,
					taskTitle: 'task 2',
					categoryId: '2'
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'task 1', active: false, description: 'description...' },
				{ id: 2, title: 'task 2', active: true, description: '' }
			],
			visibleList: [2]
		});
	});

	it('Should save new info of edited task', () => {
		expect(
			taskReducer(initialState, {
				type: TaskActions[TaskActions.SAVE_TASK],
				data: { id: 1, title: 'new task 1', active: false, description: 'new description...' }
			})
		).toEqual({
			list: [
				{ id: 1, title: 'new task 1', active: false, description: 'new description...' }
			],
			visibleList: []
		});
	});

	it('Should set active state of chosen task to reverse value', () => {
		expect(
			taskReducer(initialState, {
				type: TaskActions[TaskActions.TOGGLE_TASK],
				data: 1
			})
		).toEqual({
			list: [
				{ id: 1, title: 'task 1', active: true, description: 'description...' }
			],
			visibleList: []
		});
	});

	it('Should add to visible list all chosen category tasks', () => {
		expect(
			taskReducer(initialState, {
				type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
				data: {
					id: 2,
					title: 'category 2',
					tasks: [1]
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'task 1', active: false, description: 'description...' }
			],
			visibleList: [1]
		});
	});

	it('Should delete chosen category tasks', () => {
		expect(
			taskReducer(initialState, {
				type: CategoryActions[CategoryActions.DELETE_CATEGORY],
				data: {
					id: 1, title: 'category 1', subs: [], tasks: [1], parentId: null, expanded: false, level: null, edit: false
				}
			})
		).toEqual({
			list: [],
			visibleList: []
		});
	});
});
