import { TaskActions } from './action.types';

interface ITask {
	id: number;
	title: string;
	active: boolean;
	description: string;
}

let NEXT_ROOT_TASK_ID = 13;

const addTask = (title: string, category: number) => {
	return {
		type: TaskActions[TaskActions.ADD_TASK],
		taskId: NEXT_ROOT_TASK_ID++,
		taskTitle: title,
		activeCategoryId: category
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
		id,
		title
	};
};

const editTask = (task: ITask) => {
	return {
		type: TaskActions[TaskActions.EDIT_TASK],
		...task
	};
};

const saveTask = (task: ITask) => {
	return {
		type: TaskActions[TaskActions.SAVE_TASK],
		task: { ...task }
	};
};

const toggleTask = (id: number) => {
	return {
		type: TaskActions[TaskActions.TOGGLE_TASK],
		id
	};
};

export { addTask, cancelTaskEdit, chooseTask, editTask, saveTask, toggleTask };