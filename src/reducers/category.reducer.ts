import { CategoryActions } from '../actions/action.types';
import { browserHistory } from 'react-router/lib';

const initialState = {
	list: [
		{ id: 1, title: 'category 1', subs: [11, 12], tasks: [1, 2, 3], parentId: null, expanded: true, level: null, edit: false },
		{ id: 2, title: 'category 2', subs: [21], tasks: [4, 5, 6], parentId: null, expanded: false, level: null, edit: false },
		{ id: 3, title: 'category 3', subs: [], tasks: [7, 8, 9], parentId: null, expanded: false, level: null, edit: false },
		{ id: 11, title: 'category 1_1', subs: [111], tasks: [10], parentId: 1, expanded: false, level: null, edit: false },
		{ id: 12, title: 'category 1_2', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false },
		{ id: 111, title: 'category 1_1_1', subs: [], tasks: [11], parentId: 11, expanded: false, level: null, edit: false },
		{ id: 21, title: 'category 2_1', subs: [], tasks: [12], parentId: 2, expanded: false, level: null, edit: false }
	],
	activeCategory: null
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {

		// case CategoryActions[CategoryActions.ADD_CATEGORY]:
		// 	return state;
		//DELETE
		// case CategoryActions[CategoryActions.CHANGE_CATEGORY_TITLE]:
		// 	return state;

		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]:
			// browserHistory.push(`${action.title.split(' ').join('')}`);
			browserHistory.push(`${action.id}`);

			return {
				list: state.list,
				activeCategory: action.id
			};

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
			let newId;
			return {
				list: state.list.map(c => {
					let parentNode;

					if (c.id !== action.id || !c.parentId) return c;

					if (String(c.parentId).length === 1) {
						parentNode = null;
						newId = state.list.filter(c => String(c.id).length === 1).length + 1; //GLOBAL 
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
			let subIdSet;

			if (!confirm(`Do you really want to delete ${action.title}?`)) return state;

			subIdSet = new Set(action.subs);

			state.list.forEach(c => {
				if (subIdSet.has(c.id) && c.subs.length) {
					c.subs.forEach(s => subIdSet.add(s));
				}
			});

			return {
				list: state.list.filter(c => (c.id !== action.id && !subIdSet.has(c.id))),
				activeCategory: null
			};

		case CategoryActions[CategoryActions.ADD_SUBCATEGORY]:
			let newCategoryId = Number(`${action.parentId}${action.parentSubSize + 1}`);
			let newCategoryTitle = String(newCategoryId).split('').join('_');

			return {
				list: [
					...state.list.map(c => c.id !== action.parentId ? c : { ...c, subs: [...c.subs, newCategoryId], expanded: true }),
					{
						id: newCategoryId, title: `category ${newCategoryTitle}`,
						subs: [], tasks: [], expanded: true, root: false, level: null, parentId: action.parentId
					}
				],
				activeCategory: state.activeCategory
			}

		default:
			return state;
	}
};

export default categoryReducer;