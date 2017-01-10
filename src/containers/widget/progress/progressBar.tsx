import * as React from 'react';
import { connect } from 'react-redux';

import { TaskModel } from '../../../model/task.model';

import { ProgressBar as Bar } from 'react-bootstrap';

interface IProgressBarProps {
	progress: number;
}

const ProgressBar = (props: IProgressBarProps): JSX.Element => <Bar style={{ width: '100%' }} active now={props.progress} />;

const getAppProgress = (list: Array<TaskModel>): number => {
	let completed: number = Object.values(list).filter(t => !t.active).length;
	let all: number = Object.keys(list).length;

	return Math.round(completed / all * 100);
};

const mapStateToProps = (store: any): Object => {
	return {
		progress: getAppProgress(store.present.tasks.listById),
	};
};

export default connect(mapStateToProps)(ProgressBar);