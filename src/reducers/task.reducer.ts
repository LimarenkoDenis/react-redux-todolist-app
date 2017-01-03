import { TaskActions, CategoryActions } from '../actions/action.types';
import { browserHistory } from 'react-router/lib';

const initialState = {
	listById: {
		1: { id: 1, text: 'make coffee', completed: true },
		2: { id: 2, text: 'drink coffee', completed: false },
		3: { id: 3, text: 'do it again', completed: false },
		4: { id: 4, text: 'make coffee', completed: true },
		5: { id: 5, text: 'drink coffee', completed: false },
		6: { id: 6, text: 'do it again', completed: false },
		7: { id: 7, text: 'make coffee', completed: true },
		8: { id: 8, text: 'drink coffee', completed: false },
		9: { id: 9, text: 'do it again', completed: false },
		10: { id: 10, text: 'make coffee', completed: true },
		11: { id: 11, text: 'drink coffee', completed: false },
		12: { id: 12, text: 'do it again', completed: false }
	},
	visibleList: []
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TaskActions[TaskActions.ADD_TASK]:
			let id = action.id;

			return {
				listById: {
					...state.listById,
					[id]: { id: id, text: action.text, completed: false }
				},
				visibleList: state.visibleList
			};

		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]:
			return {
				listById: state.listById,
				visibleList: [...action.tasks]
			};

		case CategoryActions[CategoryActions.DELETE_CATEGORY]:
			let tasks = new Set(action.tasks || []);
			return {
				listById: {
					...Object.values(state.listById).filter(t => !tasks.has(t.id))
				},
				visibleList: state.visibleList
			};

		case TaskActions[TaskActions.TOGGLE_TASK]:
			return {
				listById: {
					...Object.values(state.listById).map(t => t.id !== action.id ? t : { ...t, completed: !t.completed })
				},
				visibleList: state.visibleList
			};

		case TaskActions[TaskActions.CHOOSE_TASK]:
		//TODO
			browserHistory.push(`${action.title.split(' ').join('')}`);
			return state;
		// case TaskActions[TaskActions.EDIT_TASK]:
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