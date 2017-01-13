import { CategoryActions } from './action.types';
import { CategoryModel } from '../models/category.model';

export let NEXT_ROOT_CATEGORY_ID: number = 2;

const addCategory = (title: string) => {
	return {
		type: CategoryActions[CategoryActions.ADD_CATEGORY],
		data: {
			id: NEXT_ROOT_CATEGORY_ID++,
			title
		}
	};
};

const addSubcategory = (parentId: number, parentSubSize: number) => {
	return {
		type: CategoryActions[CategoryActions.ADD_SUBCATEGORY],
		data: {
			parentId,
			parentSubSize
		}
	};
};

const chooseCategory = (id: number, title: string, tasks: Array<number>) => {
	return {
		type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
		data: {
			id,
			title,
			tasks
		}
	};
};

const deleteCategory = (data: CategoryModel) => {
	return {
		type: CategoryActions[CategoryActions.DELETE_CATEGORY],
		data
	};
};

const editCategory = (id: number, title: string) => {
	return {
		type: CategoryActions[CategoryActions.EDIT_CATEGORY],
		data: {
			id,
			title
		}
	};
};

const nestCategory = (id: number) => {
	return {
		type: CategoryActions[CategoryActions.NEST_CATEGORY],
		data: id
	};
};

const toggleCategory = (id: number) => {
	return {
		type: CategoryActions[CategoryActions.TOGGLE_CATEGORY],
		data: id
	};
};

export { addCategory, addSubcategory, chooseCategory, deleteCategory, editCategory, nestCategory, toggleCategory };
