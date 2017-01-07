import { TaskActions, CategoryActions } from '../actions/action.types';
import { ITasksState } from '../interfaces';

const initialState: ITasksState = {
	listById: {
		1: { id: 1, title: 'make coffee', active: false, description: 'Huhuhue' },
		2: { id: 2, title: 'drink coffee', active: true, description: 'Glug, glug, glug' },
		3: { id: 3, title: 'do it again', active: true, description: '' }
	},
	visibleList: []
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case TaskActions[TaskActions.ADD_TASK]:
			const id: number = action.taskId;

			return {
				listById: {
					...state.listById,
					[id]: { id: id, title: action.taskTitle, active: true, description: '' }
				},
				visibleList: [...state.visibleList, id]
			};

		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]:
			return {
				listById: state.listById,
				visibleList: [...action.tasks]
			};

		case CategoryActions[CategoryActions.DELETE_CATEGORY]:
			return {
				listById: {
					...Object.values(state.listById).filter(t => action.tasks.indexOf(t.id) === -1)
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

		case TaskActions[TaskActions.SAVE_TASK]:
			alert(`Task "${action.task.title}" has been saved successfully!`);

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