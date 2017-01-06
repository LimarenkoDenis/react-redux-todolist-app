import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

import TaskLink from './taskLink';
import './style.css';

const TaskList = (props) => {
	return (
		<ListGroup>
			{props.tasks.map(t =>
				<TaskLink
					key={t.id}
					title={t.title}
					active={t.active}
					onLIClick={(id, title) => props.onLIClick(t.id, t.title)}
					onCheckClick={id => props.onCheckClick(t.id)}
					onEditClick={(task) => props.onEditClick(t)}
					/>
			)}
		</ListGroup>
	);
};

export default TaskList;