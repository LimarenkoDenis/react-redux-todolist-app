import { connect } from 'react-redux';

import { toggleTask, editTask, chooseTask } from '../../actions/task.actions';

import { TaskModel } from '../../model/task.model';

import { ITaskListById } from '../../reducers/task.reducer';
import { IFilterState } from '../../reducers/filter.reducer';

import TaskList from '../../components/task/list/tasks';

const getFilteredTasks = (taskListById: Array<ITaskListById>, visibleTaskArray: Array<number>, filter: IFilterState): Array<TaskModel> => {
	let visibleList: Array<TaskModel> = [...Object.values(taskListById).filter(t => visibleTaskArray.indexOf(t.id) !== -1)];
	let filteredList: Array<TaskModel>;

	if (filter.searchTemplate) {
		filteredList = visibleList.filter(t => t.title.toLowerCase().match(filter.searchTemplate));
	} else {
		filteredList = visibleList;
	}

	return filter.active ? filteredList.filter(t => t.active) : filteredList;
};

const mapStateToProps = (store: any): Object => {
	return {
		tasks: getFilteredTasks(store.present.tasks.listById, store.present.tasks.visibleList, store.present.filterState)
	};
};

const mapDispatchToProps = (dispatch: any): Object => {
	return {
		onLIClick: (id, title) => dispatch(chooseTask(id, title)),
		onCheckClick: (id) => dispatch(toggleTask(id)),
		onEditClick: (task) => dispatch(editTask(task))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);