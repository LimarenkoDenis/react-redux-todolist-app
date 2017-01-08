import { connect } from 'react-redux';

import { ICategory } from '../../interfaces';

import { addSubcategory, nestCategory, toggleCategory, editCategory, chooseCategory, deleteCategory } from '../../actions/category.actions';
import CategoryList from '../../components/category/list/categories';

const getSubCategories = (category: ICategory, storeList: Array<ICategory>) => {
	let subs: Array<ICategory> = [];

	storeList.forEach(c => {
		if (category.subs.indexOf(c.id) !== -1) {
			subs = [...subs, c];
		}
	});

	return subs;
};

const getCategoryList = (currentCategories: Array<ICategory>, inputCategories: Array<ICategory>, depth: number, storeCategories: Array<ICategory>) => {
	let categories: Array<ICategory> = inputCategories;

	for (let i = 0; i < currentCategories.length; i++) {

		if (!currentCategories[i].parentId) {
			categories.push({ ...currentCategories[i], level: depth });
		}

		if (currentCategories[i].parentId && depth > 0) {
			categories.push({ ...currentCategories[i], level: depth });
		} else if (currentCategories[i].parentId && depth === 0) {
			continue;
		}

		if (currentCategories[i].subs.length > 0 && currentCategories[i].expanded) {
			let subs: Array<ICategory> = getSubCategories(currentCategories[i], storeCategories);

			getCategoryList(subs, categories, depth + 1, storeCategories);
		}
	}

	return categories;
}

const mapStateToProps = (store: any) => {
	return {
		categories: getCategoryList(store.present.categories.list, [], 0, store.present.categories.list),
		editState: store.present.editState
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onAddClick: (parentId, parentSubSize) => dispatch(addSubcategory(parentId, parentSubSize)),
		onExpandClick: (id) => dispatch(toggleCategory(id)),
		onEditClick: (id, title) => dispatch(editCategory(id, title)),
		onLIClick: (id, title, tasks) => dispatch(chooseCategory(id, title, tasks)),
		onDeleteClick: (id, title, subs, tasks) => dispatch(deleteCategory(id, title, subs, tasks)),
		onArrowClick: (id) => dispatch(nestCategory(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);