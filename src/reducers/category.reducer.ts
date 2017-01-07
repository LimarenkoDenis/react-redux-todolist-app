import { browserHistory } from 'react-router/lib';

import { CategoryActions, TaskActions } from '../actions/action.types';
import { ICategoriesState } from '../interfaces';

const initialState: ICategoriesState = {
	list: [
		{ id: 1, title: 'Day tasks', subs: [11], tasks: [1, 2], parentId: null, expanded: true, level: null, edit: false },
		{ id: 11, title: 'Sub tasks', subs: [], tasks: [3], parentId: 1, expanded: false, level: null, edit: false }
	],
	activeCategory: null
};

const categoryReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case TaskActions[TaskActions.ADD_TASK]:
			if (!action.activeCategoryId) {
				return state;
			} else {
				return {
					list: state.list.map(c => c.id !== action.activeCategoryId ? c : { ...c, tasks: [...c.tasks, action.taskId] }),
					activeCategory: state.activeCategory
				};
			}

		case CategoryActions[CategoryActions.ADD_CATEGORY]:
			const nextId: number = state.list.filter(t => String(t.id).length === 1).length + 1;

			return {
				list: [
					...state.list,
					{ id: nextId, title: action.title, subs: [], tasks: [], parentId: null, expanded: false, level: null, edit: false }
				],
				activeCategory: state.activeCategory
			};

		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]:
			browserHistory.push(`${action.title.split(' ').join('')}`);

			return { list: state.list, activeCategory: action.id };

		case CategoryActions[CategoryActions.EDIT_CATEGORY]:
			return {
				list: state.list.map(c => c.id !== action.id ? c : c.edit ? { ...c, edit: !c.edit, title: action.title } : { ...c, edit: !c.edit }),
				activeCategory: state.activeCategory
			};

		case CategoryActions[CategoryActions.TOGGLE_CATEGORY]:
			return {
				list: state.list.map(c => c.id !== action.id ? c : { ...c, expanded: !c.expanded }),
				activeCategory: state.activeCategory
			};

		case CategoryActions[CategoryActions.NEST_CATEGORY]:
			let newId: number;

			return {
				list: state.list.map(c => {
					let parentNode: number;

					if (c.subs.indexOf(action.id) !== -1) {
						return { ...c, subs: c.subs.filter(id => id !== action.id) };
					}

					if (c.id !== action.id || !c.parentId) return c;

					if (String(c.parentId).length === 1) {
						parentNode = null;
						newId = state.list.filter(c => String(c.id).length === 1).length + 1;
					} else {
						parentNode = Number(String(action.id).slice(0, -2));
						newId = Number(String(parentNode) + String(state.list.find(c => c.id === parentNode).subs.length + 1));
						state.list.find(c => c.id === parentNode).subs.push(newId);
					}

					return { ...c, parentId: parentNode, id: newId };
				}),
				activeCategory: newId
			};

		case CategoryActions[CategoryActions.DELETE_CATEGORY]:
			const id = action.id;
			let subsById: Array<number> = action.subs;

			state.list.forEach(c => {
				if (subsById.indexOf(c.id) !== -1 && c.subs.length) {
					c.subs.forEach(s => subsById.push(s));
				}
			});

			return {
				list: state.list
					.filter(c => c.id !== id && subsById.indexOf(c.id) === -1)
					.map(c => c.subs.indexOf(id) !== -1 ? { ...c, subs: c.subs.filter(s => s !== id) } : c),
				activeCategory: state.activeCategory.id === id ? null : state.activeCategory
			};

		case CategoryActions[CategoryActions.ADD_SUBCATEGORY]:
			const newCategoryId: number = Number(`${action.parentId}${action.parentSubSize + 1}`);
			const newCategoryTitle: string = String(newCategoryId).split('').join('_');

			return {
				list: [
					...state.list.map(c => c.id !== action.parentId ? c : { ...c, subs: [...c.subs, newCategoryId], expanded: true }),
					{
						id: newCategoryId, title: `category ${newCategoryTitle}`,
						subs: [], tasks: [], expanded: true, level: null, edit: false, parentId: action.parentId
					}
				],
				activeCategory: state.activeCategory
			};

		default:
			return state;
	}
};

export default categoryReducer;