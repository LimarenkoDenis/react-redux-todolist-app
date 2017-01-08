import * as React from 'react';

import Task from '../item/task';

import { ListGroup } from 'react-bootstrap';

const TaskList = (props) => {
	return (
		<ListGroup style={{ heigth: `${props.tasks.length}px` }}>
			{props.tasks.map(t =>
				<Task
					key={t.id}
					title={t.title}
					active={t.active}
					onLIClick={(id, title) => props.onLIClick(t.id, t.title)}
					onCheckClick={id => props.onCheckClick(t.id)}
					onEditClick={task => props.onEditClick(t)}
					/>
			)}
		</ListGroup>
	);
};

export default TaskList;