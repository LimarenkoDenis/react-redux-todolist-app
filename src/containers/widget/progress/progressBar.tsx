import * as React from 'react';
import { connect } from 'react-redux';

import { ITaskListById } from '../../../reducers';

import { ProgressBar as Bar } from 'react-bootstrap';

interface IProgressBarProps {
	tasks: ITaskListById;
}

class ProgressBar extends React.Component<IProgressBarProps, any> {
	private getAppProgress(list: ITaskListById): number {
		let completed: number = Object.values(list).filter(t => !t.active).length;
		let all: number = Object.keys(list).length;

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
		tasks: store.present.tasks.listById,
	};
};

export default connect(mapStateToProps)(ProgressBar);