import * as React from 'react';
import { mount } from 'enzyme';
import * as sinon from 'sinon';

import { Category } from '../../../src/components';
import { CategoryModel } from '../../../src/models';

import { IEditState } from '../../../src/reducers';

describe('Category component tests', () => {
	const editState: IEditState = { active: false, task: null };
	const category: CategoryModel = { id: 1, title: 'Day tasks', subs: [11], tasks: [1, 2, 3], parentId: null, expanded: false, level: null, edit: false };

	const onAddClick: any = jest.fn();
	const onArrowClick: any = jest.fn();
	const onExpandClick: any = jest.fn();
	const onEditClick: any = jest.fn();
	const onLIClick: any = jest.fn();
	const onDeleteClick: any = jest.fn();

	let wrapper: any;

	beforeAll(() => {
		wrapper = mount(
			<Category
				editState={editState}
				category={category}
				onAddClick={onAddClick}
				onArrowClick={onArrowClick}
				onExpandClick={onExpandClick}
				onEditClick={onEditClick}
				onLIClick={onLIClick}
				onDeleteClick={onDeleteClick}
			/>
		);
	});

	it('Should receive category props', () => {
		expect(wrapper.prop('editState')).toEqual(editState);
		expect(wrapper.prop('category')).toEqual(category);

		expect(wrapper.prop('onAddClick')).toBeDefined();
		expect(wrapper.prop('onArrowClick')).toBeDefined();
		expect(wrapper.prop('onEditClick')).toBeDefined();
		expect(wrapper.prop('onExpandClick')).toBeDefined();
		expect(wrapper.prop('onLIClick')).toBeDefined();
		expect(wrapper.prop('onDeleteClick')).toBeDefined();
	});

	it('Should render the title of the category', () => {
		expect(wrapper.find('.category-item input').props().defaultValue).toBe(category.title);
	});

	describe('Handlers tests', () => {
		it('Should handle onAddClick call', () => {
			const addSpan: any = wrapper.find('span.glyphicon-plus-sign').first();

			addSpan.simulate('click');
			expect(onAddClick).toBeCalled();
		});

		it('Should handle onDeleteClick call', () => {
			const deleteSpan: any = wrapper.find('span.glyphicon-trash').first();

			const confirmStub = sinon.stub(global, 'confirm');
			confirmStub.returns(true);

			deleteSpan.simulate('click');
			expect(onDeleteClick).toBeCalled();
		});

		it('Should handle onEditClick call', () => {
			const editSpan: any = wrapper.find('span.glyphicon-edit').first();

			editSpan.simulate('click');
			expect(onEditClick).toBeCalled();
		});

		it('Should handle onExpandClick call', () => {
			const expandSpan: any = wrapper.find('span.glyphicon-expand').first();

			expandSpan.simulate('click');
			expect(onExpandClick).toBeCalled();
		});

		it('Should handle onLIClick call', () => {
			const categoryItem: any = wrapper.find('.category-item').first();

			categoryItem.simulate('click');
			expect(onLIClick).toBeCalled();
		});

		it('Should handle onArrowClick call', () => {
			const wrapper: any = mount(
				<Category
					editState={editState}
					category={category}
					onAddClick={onAddClick}
					onArrowClick={onArrowClick}
					onExpandClick={onExpandClick}
					onEditClick={onEditClick}
					onLIClick={onLIClick}
					onDeleteClick={onDeleteClick}
				/>
			);

			wrapper.setProps({
				editState: {
					active: true,
					task: { id: 1, title: 'Task 1', active: false, description: 'description...' }
				}
			});

			const expandSpan: any = wrapper.find('span.glyphicon-share-alt').first();

			expandSpan.simulate('click');
			expect(onArrowClick).toBeCalled();
		});
	});
});