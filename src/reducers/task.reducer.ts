import { TaskActions, CategoryActions } from '../actions/action.types';
// import { browserHistory } from 'react-router/lib';

const initialState = {
	listById: {
		1: { id: 1, title: 'make coffee', active: false, description: 'huhuhue' },
		2: { id: 2, title: 'drink coffee', active: true, description: '' },
		3: { id: 3, title: 'do it again', active: true, description: '' },
		4: { id: 4, title: 'make coffee', active: false, description: '' },
		5: { id: 5, title: 'drink coffee', active: true, description: '' },
		6: { id: 6, title: 'do it again', active: true, description: '' },
		7: { id: 7, title: 'make coffee', active: false, description: '' },
		8: { id: 8, title: 'drink coffee', active: true, description: '' },
		9: { id: 9, title: 'do it again', active: true, description: '' },
		10: { id: 10, title: 'make coffee', active: false, description: '' },
		11: { id: 11, title: 'drink coffee', active: true, description: '' },
		12: { id: 12, title: 'do it again', active: true, description: '' }
	},
	visibleList: []
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TaskActions[TaskActions.ADD_TASK]:
			let id = action.taskId;

			if (!action.activeCategoryId) {
				alert('You need to a choose category to add a task!');
				return state;
			} else {
				return {
					listById: {
						...state.listById,
						[id]: { id: id, title: action.taskTitle, active: true, description: '' }
					},
					visibleList: [...state.visibleList, id]
				};
			}


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
					...Object.values(state.listById).map(t => t.id !== action.id ? t : { ...t, active: !t.active })
				},
				visibleList: state.visibleList
			};

		case TaskActions[TaskActions.CHOOSE_TASK]:
			//TODO
			// browserHistory.push(`${action.title.split(' ').join('')}`);
			return state;

		case TaskActions[TaskActions.SAVE_TASK]:
			return {
				listById: {
					...Object.values(state.listById).map(t => t.id !== action.task.id ? t : action.task)
				},
				visibleList: state.visibleList
			};

		default:
			return state;
	}
};

export default taskReducer;