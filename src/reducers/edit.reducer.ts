import { BrowserRouter } from 'react-router-dom'

import { TaskActions } from '../actions/action.types';
import { TaskModel } from '../models/task.model';

export interface IEditState {
	active: boolean;
	task: TaskModel;
}

const initialState: IEditState = {
	active: false,
	task: null
};

export const editReducer = (state: any = initialState, action: any): Object => {
	switch (action.type) {
		case TaskActions[TaskActions.CANCEL_TASK_EDIT]:
			return { active: false, task: null };

		case TaskActions[TaskActions.EDIT_TASK]:
			//for jest tests
			try {
				BrowserRouter.push(`edit_${action.data.title.split(' ').join('_')}`);
			} catch (err) { }

			return { active: true, task: action.data };

		case TaskActions[TaskActions.SAVE_TASK]:
			return { active: false, task: null };

		default:
			return state;
	}
};

export default editReducer;