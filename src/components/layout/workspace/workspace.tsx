import * as React from 'react';

import { IEditState } from '../../../reducers/edit.reducer';

import TaskEditForm from '../../../containers/form/task/edit.form';

import { Col } from 'react-bootstrap';

interface IWorkspaceLayoutProps {
	editState: IEditState;
}

export class WorkspaceLayout extends React.Component<IWorkspaceLayoutProps, any> {
	public render() {
		return (
			<Col xs={7} xsOffset={3} md={7} mdOffset={0}  >
				{this.props.editState.active ? (<TaskEditForm />) : this.props.children}
			</Col>
		);
	}

}