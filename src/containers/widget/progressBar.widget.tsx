import * as React from 'react';
import { ProgressBar as Bar } from 'react-bootstrap';

import { connect } from 'react-redux';

const ProgressBar = (props) => <Bar style={{ width: '100%' }} active now={props.progressCounter} />;

const getAppProgress = (list) => {
	let completed: number = Object.values(list).filter(t => !t.active).length;
	let all: number = Object.keys(list).length;

	return Math.round(completed / all * 100);
};

const mapStateToProps = (store) => {
	return {
		progressCounter: getAppProgress(store.tasks.listById),
	};
};

export default connect(mapStateToProps)(ProgressBar);