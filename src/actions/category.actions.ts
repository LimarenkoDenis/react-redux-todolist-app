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

const deleteCategory = (id, title, subs, tasks) => {
	return {
		type: CategoryActions[CategoryActions.DELETE_CATEGORY],
		id,
		title,
		subs,
		tasks
	};
};

const chooseCategory = (id, title) => {
	return {
		type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
		id,
		title
	};
};

export { addSubcategory, toggleCategory, chooseCategory, deleteCategory };
