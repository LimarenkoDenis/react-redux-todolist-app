import * as React from 'react';
import { Row, Grid } from 'react-bootstrap';

import Header from '../header/header';
import WidgetsLayout from '../../containers/widgets';
import Aside from './aside.layout';
import { WorkspaceLayout } from './workspace.layout';

export class MainLayout extends React.Component<any, any> {
	render() {
		let {editState, children} = this.props;

		return (
			<Grid fluid>
				{!editState.active ?
					<div>
						<Header title='To-Do List' />
						<WidgetsLayout />
					</div> :
					<Header title={editState.task.title} />
				}
				<Row className='todo-content-container'>
					<Aside />
					<WorkspaceLayout editState={editState}>{children}</WorkspaceLayout>
				</Row>
			</Grid >
		);
	};
};