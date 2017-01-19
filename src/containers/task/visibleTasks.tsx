import * as React from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { toggleTask, editTask, chooseTask } from '../../actions/task.actions';

import { TaskModel } from '../../models/task.model';

import { Task } from '../../components';

import { IFilterState, ITasksState } from '../../reducers';

import { ListGroup } from 'react-bootstrap';

export interface IVisibleTasksProps {
	tasks: ITasksState;
	filterState: IFilterState;
}

export class VisibleTasks extends React.Component<IVisibleTasksProps, any> {
	public render(): JSX.Element {
		const { tasks: {list, visibleList}, filterState} = this.props;

		let filteredTasks: Array<TaskModel> = this.getFilteredTasks(list, visibleList, filterState);

		let tasks: Array<JSX.Element> = filteredTasks.map(t =>
			<Task
				key={t.id}
				title={t.title}
				active={t.active}
				onLIClick={(id, title) => this.onLIClick(t.id, t.title)}
				onCheckClick={id => this.onCheckClick(t.id)}
				onEditClick={task => this.onEditClick(t)}
			/>
		);

		return (
			<ListGroup style={{ overflowY: 'auto', height: '370px' }}>
				{tasks}
			</ListGroup>
		);
	}

	private getFilteredTasks(taskList: Array<TaskModel>, visibleTaskArray: Array<number>, filter: IFilterState): Array<TaskModel> {
		let visibleList: Array<TaskModel> = [...taskList.filter(t => visibleTaskArray.indexOf(t.id) !== -1)];
		let filteredList: Array<TaskModel>;

		if (filter.searchTemplate) {
			filteredList = visibleList.filter(t => t.title.toLowerCase().match(filter.searchTemplate));
		} else {
			filteredList = visibleList;
		}

		return filter.active ? filteredList.filter(t => t.active) : filteredList;
	}

	private onLIClick(id: number, title: string): void {
		store.dispatch(chooseTask(id, title));
	}

	private onCheckClick(id: number): void {
		store.dispatch(toggleTask(id));
	}

	private onEditClick(task: TaskModel): void {
		store.dispatch(editTask(task));
	}
}

const mapStateToProps = (store: any): Object => {
	return {
		tasks: {
			list: store.present.tasks.list,
			visibleList: store.present.tasks.visibleList
		},
		filterState: store.present.filterState
	};
};

export default connect(mapStateToProps)(VisibleTasks);