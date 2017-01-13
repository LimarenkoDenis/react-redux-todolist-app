import { TaskActions } from './action.types';
import { TaskModel } from '../models/task.model';

export let NEXT_ROOT_TASK_ID: number = 4;

const addTask = (taskTitle: string, categoryId: number) => {
	return {
		type: TaskActions[TaskActions.ADD_TASK],
		data: {
			taskId: NEXT_ROOT_TASK_ID++,
			taskTitle,
			categoryId
		}
	};
};

const cancelTaskEdit = () => {
	return {
		type: TaskActions[TaskActions.CANCEL_TASK_EDIT],
	};
};

const chooseTask = (id: number, title: string) => {
	return {
		type: TaskActions[TaskActions.CHOOSE_TASK],
		data: {
			id,
			title
		}
	};
};

const editTask = (data: TaskModel) => {
	return {
		type: TaskActions[TaskActions.EDIT_TASK],
		data
	};
};

const saveTask = (data: TaskModel) => {
	return {
		type: TaskActions[TaskActions.SAVE_TASK],
		data
	};
};

const toggleTask = (id: number) => {
	return {
		type: TaskActions[TaskActions.TOGGLE_TASK],
		data: id
	};
};

export { addTask, cancelTaskEdit, chooseTask, editTask, saveTask, toggleTask };