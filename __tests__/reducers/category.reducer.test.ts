import { categoryReducer, ICategoriesState } from '../../src/reducers/category.reducer';

import { CategoryActions, TaskActions } from '../../src/actions/action.types';

describe('Category reducer tests', () => {
	const initialState: ICategoriesState = {
		list: [
			{ id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: false, level: null, edit: false },
			{ id: 11, title: 'category 1_1', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false }
		],
		activeCategory: 1
	};

	it('Should return the initial state', () => {
		expect(categoryReducer(initialState, {})).toEqual(initialState);
	});

	it('Should add new category to store', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.ADD_CATEGORY],
				data: {
					id: 2,
					title: 'category 2'
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: false, level: null, edit: false },
				{ id: 11, title: 'category 1_1', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false },
				{ id: 2, title: 'category 2', subs: [], tasks: [], parentId: null, expanded: false, level: null, edit: false },
			],
			activeCategory: 1
		});
	});

	it('Should add new subcategory to stored parent category', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.ADD_SUBCATEGORY],
				data: {
					parentId: 1,
					parentSubSize: 1
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [11, 12], tasks: [], parentId: null, expanded: true, level: null, edit: false },
				{ id: 11, title: 'category 1_1', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false },
				{ id: 12, title: 'category 1_2', subs: [], tasks: [], parentId: 1, expanded: true, level: null, edit: false }
			],
			activeCategory: 1
		});
	});

	it('Should display the title of chosen category in browser url and set active this category', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
				data: {
					id: 2,
					title: 'category 2',
					tasks: []
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: false, level: null, edit: false },
				{ id: 11, title: 'category 1_1', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false }
			],
			activeCategory: 2
		});
	});

	it('Should delete chosen category and its child categories', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.DELETE_CATEGORY],
				data: {
					id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: false, level: null, edit: false
				}
			})
		).toEqual({
			list: [],
			activeCategory: 1
		});
	});

	it('Should set edit state of chosen category to true and get new data after editing', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.EDIT_CATEGORY],
				data: {
					id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: false, level: null, edit: false
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: false, level: null, edit: true },
				{ id: 11, title: 'category 1_1', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false }
			],
			activeCategory: 1
		});
	});

	it('Should replace chosen category from current parent to upper parent or root level, and change its id', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.NEST_CATEGORY],
				data: 11
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [], tasks: [], parentId: null, expanded: false, level: null, edit: false },
				{ id: 1001, title: 'category 1_1', subs: [], tasks: [], parentId: null, expanded: false, level: null, edit: false }
			],
			activeCategory: 1001
		});
	});

	it('Should set expand state of chosen category to reverse value', () => {
		expect(
			categoryReducer(initialState, {
				type: CategoryActions[CategoryActions.TOGGLE_CATEGORY],
				data: 1
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [11], tasks: [], parentId: null, expanded: true, level: null, edit: false },
				{ id: 11, title: 'category 1_1', subs: [], tasks: [], parentId: 1, expanded: false, level: null, edit: false }
			],
			activeCategory: 1
		});
	});

	it('Should add task to chosen category and all its higher parents', () => {
		expect(
			categoryReducer(initialState, {
				type: TaskActions[TaskActions.ADD_TASK],
				data: {
					taskId: 5,
					taskTitle: 'new task',
					categoryId: 11
				}
			})
		).toEqual({
			list: [
				{ id: 1, title: 'category 1', subs: [11], tasks: [5], parentId: null, expanded: false, level: null, edit: false },
				{ id: 11, title: 'category 1_1', subs: [], tasks: [5], parentId: 1, expanded: false, level: null, edit: false }
			],
			activeCategory: 1
		});
	});

});