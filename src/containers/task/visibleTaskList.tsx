import { connect } from 'react-redux';

// import { toggleCategory } from '../../actions/category.actions';
import taskList from '../../components/task/taskList';

const getFilteredTasks = (taskList, filter) => {
	let filteredList;

	if (filter.searchTemplate) {

		filteredList = filteredList.filter(t => t.title.toLowerCase().match(filter.searchTemplate));
	}

	return filter.active ? filteredList.filter(t => !t.completed) : filteredList;

};


const mapStateToProps = (store) => {
	return {
		categories: getFilteredTasks(store.categoryList.listByID, store.filter)
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onCategoryClick: (id) => dispatch(toggleCategory(id))
// 	}
// };

export default connect(mapStateToProps)(taskList);