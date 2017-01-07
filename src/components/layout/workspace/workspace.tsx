import * as React from 'react';

import { IWorkspaceLayoutProps } from '../../../interfaces';

import TaskEditForm from '../../../containers/form/task/edit.form';

import { Col } from 'react-bootstrap';

export class WorkspaceLayout extends React.Component<IWorkspaceLayoutProps, any> {
	render() {
		return (
			<Col xs={7} xsOffset={3} md={7} mdOffset={0}  >
				{this.props.editState.active ? (<TaskEditForm />) : this.props.children}
			</Col>
		);
	}

}