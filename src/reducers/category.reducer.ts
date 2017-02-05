import { browserHistory } from 'react-router/lib';

import { CategoryActions, TaskActions } from '../actions/action.types';
import { CategoryModel } from '../models/category.model';

export interface ICategoriesState {
	list: Array<CategoryModel>;
	activeCategory: number;
}

const initialState: ICategoriesState = {
	list: [
		{ id: 1, title: 'Day tasks', subs: [11], tasks: [1, 2, 3], parentId: null, expanded: false, level: null, edit: false },
		{ id: 11, title: 'Sub tasks', subs: [], tasks: [3], parentId: 1, expanded: false, level: null, edit: false }
	],
	activeCategory: null
};

const getParentsCategories = (currentId: number, categories: Array<CategoryModel>, resultIds: Array<number> = []): Array<number> => {
	categories.forEach(c => {
		if (c.subs.indexOf(currentId) !== -1) {
			resultIds.push(c.id);
			getParentsCategories(c.id, categories, resultIds);
		}
	});

	return resultIds;
};

export const categoryReducer = (state: any = initialState, action: any): Object => {
	switch (action.type) {
		case CategoryActions[CategoryActions.ADD_CATEGORY]:
			return {
				list: [
					...state.list,
					{ id: action.data.id, title: action.data.title, subs: [], tasks: [], parentId: null, expanded: false, level: null, edit: false }
				],
				activeCategory: state.activeCategory
			};

		case CategoryActions[CategoryActions.ADD_SUBCATEGORY]: {
			const newCategoryId: number = Number(`${action.data.parentId}${action.data.parentSubSize + 1}`);
			const newCategoryTitle: string = String(newCategoryId).split('').join('_');

			return {
				list: [
					...state.list.map(c => c.id !== action.data.parentId ? c : { ...c, subs: [...c.subs, newCategoryId], expanded: true }),
					{
						id: newCategoryId, title: `category ${newCategoryTitle}`,
						subs: [], tasks: [], expanded: true, level: null, edit: false, parentId: action.data.parentId
					}
				],
				activeCategory: state.activeCategory
			};
		}

		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]: {
			//for jest tests
			try {
				browserHistory.push(`${action.data.title.split(' ').join('')}`);
			} catch (err) { }

			return { list: state.list, activeCategory: action.data.id };

		}
		case CategoryActions[CategoryActions.DELETE_CATEGORY]: {
			const deleteId: number = action.data.id;
			let subsById: Array<number> = action.data.subs;

			state.list.forEach(c => {
				if (subsById.indexOf(c.id) !== -1 && c.subs.length) {
					c.subs.forEach(s => subsById.push(s));
				}
			});

			return {
				list: state.list
					.filter(c => c.id !== deleteId && subsById.indexOf(c.id) === -1)
					.map(c => c.subs.indexOf(deleteId) !== -1 ? { ...c, subs: c.subs.filter(s => s !== deleteId) } : c),
				activeCategory: state.activeCategory ? state.activeCategory : state.activeCategory.id === deleteId ? null : state.activeCategory
			};
		}

		case CategoryActions[CategoryActions.EDIT_CATEGORY]:
			return {
				list: state.list.map(c => c.id !== action.data.id ? c : c.edit ? { ...c, edit: !c.edit, title: action.data.title } : { ...c, edit: !c.edit }),
				activeCategory: state.activeCategory
			};

		case CategoryActions[CategoryActions.NEST_CATEGORY]: {
			const nestId = action.data;
			const currentCategory: CategoryModel = state.list.find(c => c.id === nestId);
			let newId: number;

			return {
				list: state.list.map(c => {
					let parentNode: number;

					if (c.subs.indexOf(nestId) !== -1) {
						return { ...c, subs: c.subs.filter(id => id !== nestId), tasks: c.tasks.filter(id => currentCategory.tasks.indexOf(id) === -1) };
					}

					if (c.id !== nestId || !c.parentId) return c;

					if (String(c.parentId).length === 1) {
						parentNode = null;
						newId = state.list.filter(c => String(c.id).length === 1).length + 1000;
					} else {
						parentNode = Number(String(nestId).slice(0, -2));
						newId = Number(String(parentNode) + String(state.list.find(c => c.id === parentNode).subs.length + 1));
						state.list.find(c => c.id === parentNode).subs.push(newId);
					}

					return { ...c, parentId: parentNode, id: newId };
				}),
				activeCategory: newId
			};
		}

		case CategoryActions[CategoryActions.TOGGLE_CATEGORY]:
			return {
				list: state.list.map(c => c.id !== action.data ? c : { ...c, expanded: !c.expanded }),
				activeCategory: state.activeCategory
			};

		case TaskActions[TaskActions.ADD_TASK]: {
			const addActId: number = action.data.categoryId;
			let dependCategories: Array<number> = getParentsCategories(addActId, state.list).concat(addActId);

			if (addActId) {
				return {
					list: state.list.map(c => dependCategories.indexOf(c.id) !== -1 ? { ...c, tasks: [...c.tasks, action.data.taskId] } : c),
					activeCategory: state.activeCategory
				};
			} else
				return state;
		}

		default:
			return state;
	}
};

export default categoryReducer;