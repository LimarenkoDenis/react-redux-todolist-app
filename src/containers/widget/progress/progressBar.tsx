import * as React from 'react';
import { connect } from 'react-redux';

import { IProgressBarProps, ITask } from '../../../interfaces';

import { ProgressBar as Bar } from 'react-bootstrap';

const ProgressBar = (props: IProgressBarProps) => <Bar style={{ width: '100%' }} active now={props.progress} />;

const getAppProgress = (list: Array<ITask>) => {
	let completed: number = Object.values(list).filter(t => !t.active).length;
	let all: number = Object.keys(list).length;

	return Math.round(completed / all * 100);
};

const mapStateToProps = (store: any) => {
	return {
		progress: getAppProgress(store.tasks.listById),
	};
};

export default connect(mapStateToProps)(ProgressBar);