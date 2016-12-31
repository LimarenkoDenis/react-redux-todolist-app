import { TaskActions, CategoryActions } from '../actions/action.types';

const initialState = {
	taskListByID: {
		1: { id: 1, text: 'make coffee', completed: false },
		2: { id: 2, text: 'drink coffee', completed: true },
		3: { id: 3, text: 'do it again', completed: false }
	}
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TaskActions[TaskActions.ADD_TASK]:
			let id = action.id;

			return {
				taskListByID: {
					...state.taskListByID,
					[id]: { id: id, text: action.text, completed: false }
				}
			};

		case CategoryActions[CategoryActions.DELETE_CATEGORY]:
			let tasks = new Set(action.tasks || []);

			return {
				taskListByID: {
					...Object.keys(state.taskListByID).filter(index => !tasks.has(state.taskListByID[index].id))
				}
			};

		// case TaskActions[TaskActions.EDIT_TASK]:
		// 	break;
		// case TaskActions[TaskActions.TOGGLE_TASK]:
		// 	break;
		// case TaskActions[TaskActions.SAVE_TASK]:
		// 	break;
		// case TaskActions[TaskActions.CANCEL_EDIT_TASK]:
		// 	break;
		default:
			return state;
	}
};

export default taskReducer;