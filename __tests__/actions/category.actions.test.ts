import { CategoryActions } from '../../src/actions/action.types';
import { addCategory, addSubcategory, chooseCategory, deleteCategory, editCategory, nestCategory, toggleCategory, NEXT_ROOT_CATEGORY_ID } from '../../src/actions/category.actions';

import { CategoryModel } from '../../src/models/category.model';

describe('Category actions tests', () => {
	it('Should create add category action', () => {
		const title: string = 'Category 2';

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.ADD_CATEGORY],
			data: {
				id: NEXT_ROOT_CATEGORY_ID,
				title
			}
		};

		expect(addCategory(title)).toEqual(expectedAction);
	});

	it('Should create add subcategory action', () => {
		const parentId: number = 11;
		const parentSubSize: number = 1;

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.ADD_SUBCATEGORY],
			data: { parentId, parentSubSize }
		};

		expect(addSubcategory(parentId, parentSubSize)).toEqual(expectedAction);
	});

	it('Should create choose category action', () => {
		const id: number = 1;
		const title: string = 'Category 1';
		const tasks: Array<number> = [1, 2, 3];

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.CHOOSE_CATEGORY],
			data: {
				id,
				title,
				tasks
			}
		};

		expect(chooseCategory(id, title, tasks)).toEqual(expectedAction);
	});

	it('Should create delete category action', () => {
		const category: CategoryModel = {
			id: 1, title: 'category 1', subs: [11], tasks: [1, 2, 3], parentId: null, expanded: false, level: null, edit: false
		};

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.DELETE_CATEGORY],
			data: category
		};

		expect(deleteCategory(category)).toEqual(expectedAction);
	});

	it('Should create edit category action', () => {
		const id: number = 1;
		const title: string = 'New title';

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.EDIT_CATEGORY],
			data: {
				id,
				title
			}
		};

		expect(editCategory(id, title)).toEqual(expectedAction);
	});

	it('Should create nest category action', () => {
		const id: number = 11;

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.NEST_CATEGORY],
			data: id
		};

		expect(nestCategory(id)).toEqual(expectedAction);
	});

	it('Should create toggle category action', () => {
		const id: number = 1;

		const expectedAction: Object = {
			type: CategoryActions[CategoryActions.TOGGLE_CATEGORY],
			data: id
		};

		expect(toggleCategory(id)).toEqual(expectedAction);
	});
});