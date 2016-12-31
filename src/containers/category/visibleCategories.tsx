import { connect } from 'react-redux';

import { addSubcategory, toggleCategory, chooseCategory, deleteCategory } from '../../actions/category.actions';
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
	//?
	currentCategories.sort((a, b) => a.id - b.id);

	for (let i = 0; i < currentCategories.length; i++) {

		if (currentCategories[i].root) {
			categories.push({ ...currentCategories[i], level: depth });
		}

		if (!currentCategories[i].root && depth > 0) {
			categories.push({ ...currentCategories[i], level: depth });
		} else if (!currentCategories[i].root && depth === 0) {
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
		categories: getCategoryList(store.categoryList, [], 0, store.categoryList)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: (parentId, parentSubSize) => dispatch(addSubcategory(parentId, parentSubSize)),
		onExpandClick: (id) => dispatch(toggleCategory(id)),
		onLIClick: (id, title) => dispatch(chooseCategory(id, title)),
		onDeleteClick: (id, subs, tasks) => dispatch(deleteCategory(id, subs, tasks))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);