import { TaskActions } from '../actions/action.types';
import { browserHistory } from 'react-router/lib';

const initialState = {
	active: false,
	task: null
};

const editReducer = (state = initialState, action) => {
	switch (action.type) {
		case TaskActions[TaskActions.EDIT_TASK]:
			let {id, title, active, description} = action;
			browserHistory.push(`edit_${title.split(' ').join('_')}`);
			return { active: true, task: { id, title, active, description } };

		case TaskActions[TaskActions.CANCEL_TASK_EDIT]:
			if (confirm(`Do you really want to cancel editing?`)) {
				return { active: false, task: null };
			} else
				return state;

		case TaskActions[TaskActions.SAVE_TASK]:
			alert(`Task "${action.task.title}" has been saved successfully!`);
			return { active: false, task: null };

		default:
			return state;
	}
}

export default editReducer;