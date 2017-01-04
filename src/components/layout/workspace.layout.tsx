import * as React from 'react';
import { Col } from 'react-bootstrap';

import TaskList from '../../containers/task/visibleTaskList';
import EditForm from '../../containers/form/editForm';

export const WorkspaceLayout = (props) => (
	<Col xs={7} xsOffset={3} md={7} mdOffset={0}  >
		{props.editState.active ? (<EditForm />) : (<TaskList />)}
	</Col>
);