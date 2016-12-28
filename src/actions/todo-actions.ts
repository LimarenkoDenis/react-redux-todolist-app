import { TodoActions } from './action-types';

let nextTodoID = 0;

const addTodo = (text) => {
	return {
		type: TodoActions[TodoActions.ADD_TODO],
		id: nextTodoID,
		text
	};
};

//TODO
const editTodo = (id) => {
	return {
		type: TodoActions[TodoActions.EDIT_TODO],
		id
	};
};

const toggleTodo = () => {
	return {
		type: TodoActions[TodoActions.TOGGLE_TODO],
	};
};

const saveTodo = () => {
	return {
		type: TodoActions[TodoActions.SAVE_TODO],
	};
};

const cancelEdit = () => {
	return {
		type: TodoActions[TodoActions.CANCEL_EDIT_TODO],
	};
};

export { addTodo, editTodo, toggleTodo, saveTodo, cancelEdit };