import * as React from 'react';

// import { Link } from 'react-router/lib';
// <Link to={`/${title}`}>{title}</Link>
import { Glyphicon, ListGroupItem } from 'react-bootstrap';

interface ITask {
	title: string,
	completed: boolean,
	onLIClick: Function,
	onEditClick:Function,
	onCheckClick: Function,
}

const TaskLink = ({title, completed, onLIClick, onEditClick, onCheckClick}: ITask) => {
	return (
		<ListGroupItem
			className={`${completed ? 'task-item item-checked' : 'task-item'}`}
			onClick={onLIClick}
			>
			<Glyphicon
				glyph={`${completed ? 'check' : 'unchecked'}`}
				onClick={onCheckClick}
				/>
			<input type='text' value={title} size={title.length} disabled />
			<Glyphicon
				glyph='edit'
				onClick={onEditClick}
				className='icon-right-align'
				/>
		</ListGroupItem>
	);
}

export default TaskLink; 