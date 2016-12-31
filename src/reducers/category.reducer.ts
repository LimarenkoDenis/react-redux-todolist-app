import { CategoryActions } from '../actions/action.types';
import { browserHistory } from 'react-router/lib';

const initialState = [
	{ id: 1, title: 'category 1', subs: [11, 12], tasks: [], expanded: false, root: true, level: null },
	{ id: 2, title: 'category 2', subs: [21], tasks: [], expanded: false, root: true, level: null },
	{ id: 3, title: 'category 3', subs: [], tasks: [], expanded: false, root: true, level: null },
	{ id: 11, title: 'category 1_1', subs: [111], tasks: [], expanded: false, root: false, level: null },
	{ id: 12, title: 'category 1_2', subs: [], tasks: [], expanded: false, root: false, level: null },
	{ id: 111, title: 'category 1_1_1', subs: [], tasks: [], expanded: false, root: false, level: null },
	{ id: 21, title: 'category 2_1', subs: [], tasks: [], expanded: false, root: false, level: null }
];

const categoryReducer = (state = initialState, action) => {
	// console.log(action);
	switch (action.type) {
		// case CategoryActions[CategoryActions.ADD_CATEGORY]:
		// 	return state;
		// case CategoryActions[CategoryActions.EDIT_CATEGORY]:
		// 	return;
		case CategoryActions[CategoryActions.CHOOSE_CATEGORY]:
			state.forEach(c => {
				if (c.id === action.id) {
					browserHistory.push(`${c.title.split(' ').join('')}`);
				}
			});

			return state;
		case CategoryActions[CategoryActions.TOGGLE_CATEGORY]:
			return state.map(c => {
				if (c.id !== action.id) return c;

				return { ...c, expanded: !c.expanded };
			});
		case CategoryActions[CategoryActions.DELETE_CATEGORY]:
			let subIdSet = new Set(action.subs);

			state.forEach(item => {
				if (subIdSet.has(item.id) && item.subs.length) {
					item.subs.forEach(s => subIdSet.add(s));
				}
			});

			return state.filter(c => (c.id !== action.id && !subIdSet.has(c.id)));
		// case CategoryActions[CategoryActions.NEST_CATEGORY]:
		// 	return;
		case CategoryActions[CategoryActions.ADD_SUBCATEGORY]:
			let newCategoryId = Number(`${action.parentId}${action.parentSubSize + 1}`);
			let newCategoryTitleId = String(newCategoryId).split('').join('_');
			return [
				...state.map(c => {

					// if (String(c.id)[0] === String(newCategoryId)[0]) {

					// 	return { ...c, expanded: true }
					// };

					if (c.id !== action.parentId) return c;

					return { ...c, subs: [...c.subs, newCategoryId], expanded:true };
				}),
				{
					id: newCategoryId,
					title: `Category ${newCategoryTitleId}`,
					subs: [], tasks: [], expanded: true, root: false, level: null
				}
			]

		default:
			return state;
	}
};

export default categoryReducer;