import * as React from 'react';
import { Col } from 'react-bootstrap';

import TaskList from '../../containers/task/visibleTaskList';
import EditPage from './editPage.layout';

const style = { border: '2px solid red', height: '100%' };

export const WorkspaceLayout = (props) => (
	<Col md={8} style={style}>
		{props.editState.active ? (<EditPage task={props.editState.task} />) : (<TaskList />)}
	</Col>
);