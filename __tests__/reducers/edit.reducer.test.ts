import { editReducer, IEditState } from '../../src/reducers/edit.reducer';

import { TaskActions } from '../../src/actions/action.types';

describe('Edit reducer tests', () => {
	const initialState: IEditState = {
		active: true,
		task: { id: 1, title: 'task 1', active: false, description: 'description...' }
	};

	const actions = [
		{ type: TaskActions[TaskActions.CANCEL_TASK_EDIT] },
		{ type: TaskActions[TaskActions.SAVE_TASK], data: { id: 2, title: 'my task', active: false, description: 'lalala' } },
		{ type: TaskActions[TaskActions.EDIT_TASK], data: { id: 2, title: 'my task', active: false, description: 'lalala' } }
	];

	Object.freeze(initialState);

	it('Should return the initial state', () => {
		expect(editReducer(initialState, {})).toEqual(initialState);
	});

	it('Should set edit state to false', () => {
		expect(
			editReducer(initialState, actions[0])
		).toEqual({
			active: false,
			task: null
		});

		expect(
			editReducer(initialState, actions[1])
		).toEqual({
			active: false,
			task: null
		});
	});

	it('Should set edit state with chosen task and display its title in browser url ', () => {
		expect(
			editReducer(initialState, actions[2])
		).toEqual({
			active: true,
			task: { id: 2, title: 'my task', active: false, description: 'lalala' }
		});
	});

	it('Can be used with reduce', () => {
		const finalState = actions.reduce(editReducer, initialState);

		expect(finalState).toEqual({
			active: true,
			task: { id: 2, title: 'my task', active: false, description: 'lalala' }
		});
	});
});