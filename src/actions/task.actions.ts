import { TaskActions } from './action.types';

let nextTodoID = 0;

const addTask = (text) => {
	return {
		type: TaskActions[TaskActions.ADD_TASK],
		id: nextTodoID,
		text
	};
};

//TODO
const editTask = (id) => {
	return {
		type: TaskActions[TaskActions.EDIT_TASK],
		id
	};
};

const toggleTask = () => {
	return {
		type: TaskActions[TaskActions.TOGGLE_TASK],
	};
};

const saveTask = () => {
	return {
		type: TaskActions[TaskActions.SAVE_TASK],
	};
};

const cancelEdit = () => {
	return {
		type: TaskActions[TaskActions.CANCEL_EDIT_TASK],
	};
};

export { addTask, editTask, toggleTask, saveTask, cancelEdit };