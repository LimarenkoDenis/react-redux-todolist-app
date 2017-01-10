import { connect } from 'react-redux';

import { CategoryModel } from '../../model/category.model';

import { addSubcategory, nestCategory, toggleCategory, editCategory, chooseCategory, deleteCategory } from '../../actions/category.actions';
import CategoryList from '../../components/category/list/categories';

const getSubCategories = (category: CategoryModel, storeList: Array<CategoryModel>): Array<CategoryModel> => {
	let subs: Array<CategoryModel> = [];

	storeList.forEach(c => {
		if (category.subs.indexOf(c.id) !== -1) {
			subs = [...subs, c];
		}
	});

	return subs;
};

const getCategoryList = (currentCategories: Array<CategoryModel>, inputCategories: Array<CategoryModel>, depth: number, storeCategories: Array<CategoryModel>): Array<CategoryModel> => {
	let categories: Array<CategoryModel> = inputCategories;

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
			let subs: Array<CategoryModel> = getSubCategories(currentCategories[i], storeCategories);

			getCategoryList(subs, categories, depth + 1, storeCategories);
		}
	}

	return categories;
};

const mapStateToProps = (store: any): Object => {
	return {
		categories: getCategoryList(store.present.categories.list, [], 0, store.present.categories.list),
		editState: store.present.editState
	};
};

const mapDispatchToProps = (dispatch: any): Object => {
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