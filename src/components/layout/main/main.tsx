import * as React from 'react';

import { Aside, Header, WidgetsLayout, WorkspaceLayout } from '../index';
import UndoRedo from '../../../containers/widget/undoredo/undoredo';

import { IEditState } from '../../../reducers/edit.reducer';

import { Row, Grid } from 'react-bootstrap';

interface IMainLayoutProps {
	editState: IEditState;
}

export class MainLayout extends React.Component<IMainLayoutProps, any> {
	public render() {
		const {editState, children} = this.props;

		return (
			<Grid fluid>
				<UndoRedo />
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
			</Grid>
		);
	};
};