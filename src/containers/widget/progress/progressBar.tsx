import * as React from 'react';
import { connect } from 'react-redux';

import { TaskModel } from '../../../models/task.model';

import { ProgressBar as Bar } from 'react-bootstrap';

interface IProgressBarProps {
	tasks: Array<TaskModel>;
}

class ProgressBar extends React.Component<IProgressBarProps, any> {
	private getAppProgress(list: Array<TaskModel>): number {
		let completed: number = list.filter(t => !t.active).length;
		let all: number = list.length;

		return Math.round(completed / all * 100);
	}

	public render(): JSX.Element {
		let progress = this.getAppProgress(this.props.tasks);

		return (
			<Bar style={{ width: '100%' }} active now={progress} />
		);
	}
}

const mapStateToProps = (store: any): Object => {
	return {
		tasks: store.present.tasks.list,
	};
};

export default connect(mapStateToProps)(ProgressBar);