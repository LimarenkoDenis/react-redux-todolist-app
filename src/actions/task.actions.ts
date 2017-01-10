import { TaskActions } from './action.types';
import { ITask } from '../interfaces';

let NEXT_ROOT_TASK_ID = 4;

const addTask = (title: string, category: number): Object => {
	return {
		type: TaskActions[TaskActions.ADD_TASK],
		taskId: NEXT_ROOT_TASK_ID++,
		taskTitle: title,
		activeCategoryId: category
	};
};

const cancelTaskEdit = (): Object => {
	return {
		type: TaskActions[TaskActions.CANCEL_TASK_EDIT],
	};
};

const chooseTask = (id: number, title: string): Object => {
	return {
		type: TaskActions[TaskActions.CHOOSE_TASK],
		id,
		title
	};
};

const editTask = (task: ITask): Object => {
	return {
		type: TaskActions[TaskActions.EDIT_TASK],
		...task
	};
};

const saveTask = (task: ITask): Object => {
	return {
		type: TaskActions[TaskActions.SAVE_TASK],
		task: { ...task }
	};
};

const toggleTask = (id: number): Object => {
	return {
		type: TaskActions[TaskActions.TOGGLE_TASK],
		id
	};
};

export { addTask, cancelTaskEdit, chooseTask, editTask, saveTask, toggleTask };