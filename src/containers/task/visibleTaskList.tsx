import { connect } from 'react-redux';

import { toggleTask, editTask, chooseTask } from '../../actions/task.actions';
import taskList from '../../components/task/taskList';

const getFilteredTasks = (taskListById, visibleTaskArray, filter) => {
	let taskSet = new Set(visibleTaskArray);
	let visibleList = [...Object.values(taskListById).filter(t => taskSet.has(t.id))];
	let filteredList;
	
	if (filter.searchTemplate) {
		filteredList = visibleList.filter(t => t.title.toLowerCase().match(filter.searchTemplate));
	} else {
		filteredList = visibleList;
	}

	return filter.active ? filteredList.filter(t => !t.completed) : filteredList;
};


const mapStateToProps = (store) => {
	return {
		tasks: getFilteredTasks(store.tasks.listById, store.tasks.visibleList, store.filterState)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLIClick: (id, title) => dispatch(chooseTask(id, title)),
		onCheckClick: (id) => dispatch(toggleTask(id)),
		onEditClick: (id, title, completed) => dispatch(editTask(id, title, completed))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(taskList);