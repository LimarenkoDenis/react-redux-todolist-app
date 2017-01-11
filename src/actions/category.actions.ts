import { CategoryActions } from './action.types';

let NEXT_CATEGORY_ID = 2;

const addCategory = (title: string) => {
	return {
		type: CategoryActions[CategoryActions.ADD_CATEGORY],
		title
	};
};

const addSubcategory = (parentId: number, parentSubSize: number) => {
	return {
		type: CategoryActions[CategoryActions.ADD_SUBCATEGORY],
		id: NEXT_CATEGORY_ID++,
		parentSubSize,
		parentId,
	};
};

const chooseCategory = (id: number, title: string, tasks: Array<number>) => {
	return {
		type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
		id,
		title,
		tasks
	};
};

const deleteCategory = (id: number, title: string, subs: Array<number>, tasks: Array<number>) => {
	return {
		type: CategoryActions[CategoryActions.DELETE_CATEGORY],
		id,
		title,
		subs,
		tasks
	};
};

const editCategory = (id: number, title: string) => {
	return {
		type: CategoryActions[CategoryActions.EDIT_CATEGORY],
		id,
		title
	};
};

const nestCategory = (id: number) => {
	return {
		type: CategoryActions[CategoryActions.NEST_CATEGORY],
		id
	};
};

const toggleCategory = (id: number) => {
	return {
		type: CategoryActions[CategoryActions.TOGGLE_CATEGORY],
		id
	};
};

export { addCategory, addSubcategory, chooseCategory, deleteCategory, editCategory, nestCategory, toggleCategory };
