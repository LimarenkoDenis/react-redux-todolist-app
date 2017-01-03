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
					completed={t.completed}
					onLIClick={(id, title) => props.onLIClick(t.id, t.title)}
					onCheckClick={id => props.onCheckClick(t.id)}
					onEditClick={(id, title, completed) => props.onEditClick(t.id, t.title, t.completed)}
					/>
			)}
		</ListGroup>
	);
};

export default TaskList;