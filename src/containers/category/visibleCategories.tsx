import { connect } from 'react-redux';

import { addSubcategory, nestCategory, toggleCategory, editCategory, chooseCategory, deleteCategory } from '../../actions/category.actions';
import CategoryList from '../../components/category/categoryList';

const getSubCategories = (category, storeList) => {
	let subSet = new Set(category.subs);
	let subs = [];

	storeList.forEach(c => {
		if (subSet.has(c.id)) {
			subs = [...subs, c];
		}
	});

	return subs;
};

const getCategoryList = (currentCategories, inputCategories, depth, storeCategories) => {
	let categories = inputCategories;

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
			let subs = getSubCategories(currentCategories[i], storeCategories);

			getCategoryList(subs, categories, depth + 1, storeCategories);
		}
	}

	return categories;
}

const mapStateToProps = (store) => {
	return {
		categories: getCategoryList(store.categories.list, [], 0, store.categories.list),
		editState: store.editState
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: (parentId, parentSubSize) => dispatch(addSubcategory(parentId, parentSubSize)),
		onExpandClick: (id) => dispatch(toggleCategory(id)),
		onEditClick: (id, title) => dispatch(editCategory(id, title)),
		onLIClick: (id, title, tasks) => dispatch(chooseCategory(id, title, tasks)),
		onDeleteClick: (id, title, subs, tasks) => dispatch(deleteCategory(id, title, subs, tasks)),
		onArrowClick: (id) => dispatch(nestCategory(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);