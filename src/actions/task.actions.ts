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
const editTask = (id, title, completed) => {
	return {
		type: TaskActions[TaskActions.EDIT_TASK],
		id,
		title,
		completed
	};
};

const toggleTask = (id) => {
	return {
		type: TaskActions[TaskActions.TOGGLE_TASK],
		id
	};
};

const chooseTask = (id, title) => {
	return {
		type: TaskActions[TaskActions.CHOOSE_TASK],
		id,
		title
	}
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

export { addTask, chooseTask, editTask, toggleTask, saveTask, cancelEdit };