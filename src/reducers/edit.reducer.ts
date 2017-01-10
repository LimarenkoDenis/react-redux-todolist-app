import { browserHistory } from 'react-router/lib';

import { TaskActions } from '../actions/action.types';
import { IEditState, ITask } from '../interfaces';

const initialState: IEditState = {
	active: false,
	task: null
};

const editReducer = (state: any = initialState, action: any): Object => {
	switch (action.type) {
		case TaskActions[TaskActions.EDIT_TASK]:
			const {id, title, active, description}: ITask = action;

			browserHistory.push(`edit_${title.split(' ').join('_')}`);

			return {
				active: true,
				task: { id, title, active, description }
			};

		case TaskActions[TaskActions.CANCEL_TASK_EDIT]:
			return { active: false, task: null };

		case TaskActions[TaskActions.SAVE_TASK]:
			return { active: false, task: null };

		default:
			return state;
	}
};

export default editReducer;