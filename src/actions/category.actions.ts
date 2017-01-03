import { CategoryActions } from './action.types';

let nextTodoId = 4;

const addSubcategory = (parentId, parentSubSize) => {
	return {
		type: CategoryActions[CategoryActions.ADD_SUBCATEGORY],
		id: nextTodoId++,
		parentSubSize,
		parentId,
	};
};

const toggleCategory = (id) => {
	return {
		type: CategoryActions[CategoryActions.TOGGLE_CATEGORY],
		id
	};
};

const editCategory = (id, title) => {
	return {
		type: CategoryActions[CategoryActions.EDIT_CATEGORY],
		id,
		title
	};
};

const deleteCategory = (id, title, subs, tasks) => {
	return {
		type: CategoryActions[CategoryActions.DELETE_CATEGORY],
		id,
		title,
		subs,
		tasks
	};
};

const changeTitle = (id, title) => {
	return {
		type: CategoryActions[CategoryActions.CHANGE_CATEGORY_TITLE],
		id,
		title
	};
};

const chooseCategory = (id, title, tasks) => {
	return {
		type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
		id,
		title,
		tasks
	};
};

const nestCategory = (id) => {
	return {
		type: CategoryActions[CategoryActions.NEST_CATEGORY],
		id
	};
};


export { addSubcategory, changeTitle, editCategory, nestCategory, toggleCategory, chooseCategory, deleteCategory };
