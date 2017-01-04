import { TaskActions, FormActions, CategoryActions } from '../actions/action.types';
// import { browserHistory } from 'react-router/lib';

const initialState = {
	listById: {
		1: { id: 1, title: 'make coffee', completed: true, description: 'huhuhue' },
		2: { id: 2, title: 'drink coffee', completed: false, description: '' },
		3: { id: 3, title: 'do it again', completed: false, description: '' },
		4: { id: 4, title: 'make coffee', completed: true, description: '' },
		5: { id: 5, title: 'drink coffee', completed: false, description: '' },
		6: { id: 6, title: 'do it again', completed: false, description: '' },
		7: { id: 7, title: 'make coffee', completed: true, description: '' },
		8: { id: 8, title: 'drink coffee', completed: false, description: '' },
		9: { id: 9, title: 'do it again', completed: false, description: '' },
		10: { id: 10, title: 'make coffee', completed: true, description: '' },
		11: { id: 11, title: 'drink coffee', completed: false, description: '' },
		12: { id: 12, title: 'do it again', completed: false, description: '' }
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
					[id]: { id: id, title: action.text, completed: false, description: '' }
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
			// browserHistory.push(`${action.title.split(' ').join('')}`);
			return state;
		// case TaskActions[TaskActions.EDIT_TASK]:
		// 	break;
		case FormActions[FormActions.SAVE_TASK]:
			console.log(action);
			return state;
		// case TaskActions[TaskActions.CANCEL_EDIT_TASK]:
		// 	break;
		default:
			return state;
	}
};

export default taskReducer;