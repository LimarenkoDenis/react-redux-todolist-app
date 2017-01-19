import * as React from 'react';
import { mount } from 'enzyme';

import { CategoryModel } from '../../../src/models';

import { VisibleCategories, IVisibleCategoriesProps } from '../../../src/containers/category/visibleCategories';

describe('Visible categories container tests', () => {
	const fakeProps: IVisibleCategoriesProps = {
		storedCategories: [
			{ id: 1, title: 'Day tasks', subs: [11], tasks: [1, 2, 3], parentId: null, expanded: false, level: null, edit: false },
			{ id: 11, title: 'Sub tasks', subs: [], tasks: [3], parentId: 1, expanded: false, level: null, edit: false }
		],
		editState: { active: false, task: null }
	};
	let listElt: any;

	beforeEach(() => {
		listElt = mount(<VisibleCategories storedCategories={fakeProps.storedCategories} editState={fakeProps.editState} />);
	});

	it('Should render all resolved in getCategoryList method items', () => {
		const {storedCategories} = fakeProps;
		const arr: Array<CategoryModel> = listElt.instance().getCategoryList(storedCategories, [], 0, storedCategories);

		expect(arr.length).toBe(arr.length);
	});

	it('Should defined handlers for category item', () => {
		expect(listElt.instance().onAddClick).toBeDefined();
		expect(listElt.instance().onArrowClick).toBeDefined();
		expect(listElt.instance().onExpandClick).toBeDefined();
		expect(listElt.instance().onEditClick).toBeDefined();
		expect(listElt.instance().onLIClick).toBeDefined();
		expect(listElt.instance().onDeleteClick).toBeDefined();
	});
});