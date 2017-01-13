import * as React from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { addSubcategory, nestCategory, toggleCategory, editCategory, chooseCategory, deleteCategory } from '../../actions/category.actions';

import { CategoryModel } from '../../models/category.model';

import { Category } from '../../components';

import { IEditState } from '../../reducers';

import { ListGroup } from 'react-bootstrap';

interface IVisibleCategoriesProps {
	storedCategories: Array<CategoryModel>;
	editState: IEditState;
}

class VisibleCategories extends React.Component<IVisibleCategoriesProps, any> {
	public render(): JSX.Element {
		const {storedCategories, editState} = this.props;

		let visibleCategories = this.getCategoryList(storedCategories, [], 0, storedCategories);

		let categories = visibleCategories.map(c =>
			<Category
				key={c.id}
				editState={editState}
				category={c}
				onAddClick={(id, subSize) => this.onAddClick(c.id, c.subs.length)}
				onArrowClick={id => this.onArrowClick(c.id)}
				onExpandClick={id => this.onExpandClick(c.id)}
				onEditClick={this.onEditClick}
				onLIClick={(id, title, tasks) => this.onLIClick(c.id, c.title, c.tasks)}
				onDeleteClick={this.onDeleteClick}
				/>
		);

		return (
			<ListGroup style={{ overflowY: 'auto', height: '370px' }}>
				{categories}
			</ListGroup>
		);
	}

	private getSubCategories(category: CategoryModel, storeList: Array<CategoryModel>): Array<CategoryModel> {
		let subs: Array<CategoryModel> = [];

		storeList.forEach(c => {
			if (category.subs.indexOf(c.id) !== -1) {
				subs = [...subs, c];
			}
		});

		return subs;
	}

	private getCategoryList(currentCategories: Array<CategoryModel>, inputCategories: Array<CategoryModel>,
		depth: number, storeCategories: Array<CategoryModel>): Array<CategoryModel> {
		let categories: Array<CategoryModel> = inputCategories;

		for (let i = 0; i < currentCategories.length; i++) {
			if (!currentCategories[i].parentId) {
				categories.push({ ...currentCategories[i], level: depth });
			}

			if (currentCategories[i].parentId && depth > 0) {
				categories.push({ ...currentCategories[i], level: depth });
			} else if (currentCategories[i].parentId && depth === 0) continue;

			if (currentCategories[i].subs.length > 0 && currentCategories[i].expanded) {
				let subs: Array<CategoryModel> = this.getSubCategories(currentCategories[i], storeCategories);

				this.getCategoryList(subs, categories, depth + 1, storeCategories);
			}
		}

		return categories;
	}

	private onAddClick(parentId: number, parentSubSize: number): void {
		store.dispatch(addSubcategory(parentId, parentSubSize));
	}

	private onExpandClick(id: number): void {
		store.dispatch(toggleCategory(id));
	}

	private onEditClick(id: number, title: string): void {
		store.dispatch(editCategory(id, title));
	}

	private onLIClick(id: number, title: string, tasks: Array<number>): void {
		store.dispatch(chooseCategory(id, title, tasks));
	}

	private onDeleteClick(category: CategoryModel): void {
		store.dispatch(deleteCategory(category));
	}

	private onArrowClick(id: number): void {
		store.dispatch(nestCategory(id));
	}

}

const mapStateToProps = (store: any): Object => {
	return {
		storedCategories: store.present.categories.list,
		editState: store.present.editState
	};
};

export default connect(mapStateToProps)(VisibleCategories);