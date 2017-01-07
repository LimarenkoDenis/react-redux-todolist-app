import { connect } from 'react-redux';

import { toggleTask, editTask, chooseTask } from '../../actions/task.actions';
import { IFilterState, ITask, ITaskListById } from '../../interfaces';

import TaskList from '../../components/task/list/tasks';

const getFilteredTasks = (taskListById: Array<ITaskListById>, visibleTaskArray: Array<number>, filter: IFilterState) => {
	let visibleList: Array<ITask> = [...Object.values(taskListById).filter(t => visibleTaskArray.indexOf(t.id) !== -1)];
	let filteredList: Array<ITask>;

	if (filter.searchTemplate) {
		filteredList = visibleList.filter(t => t.title.toLowerCase().match(filter.searchTemplate));
	} else {
		filteredList = visibleList;
	}

	return filter.active ? filteredList.filter(t => t.active) : filteredList;
};

const mapStateToProps = (store: any) => {
	return {
		tasks: getFilteredTasks(store.tasks.listById, store.tasks.visibleList, store.filterState)
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onLIClick: (id, title) => dispatch(chooseTask(id, title)),
		onCheckClick: (id) => dispatch(toggleTask(id)),
		onEditClick: (task) => dispatch(editTask(task))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);