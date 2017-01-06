import * as React from 'react';

// import { Link } from 'react-router/lib';
// <Link to={`/${title}`}>{title}</Link>
import { Glyphicon, ListGroupItem } from 'react-bootstrap';

interface ITask {
	title: string,
	active: boolean,
	onLIClick: Function,
	onEditClick: Function,
	onCheckClick: Function,
}

const TaskLink = ({title, active, onLIClick, onEditClick, onCheckClick}: ITask) => {
	return (
		<ListGroupItem
			className={`${active ? 'task-item' : 'task-item item-checked'}`}
			onClick={onLIClick}
			>
			<Glyphicon
				glyph={`${active ? 'unchecked' : 'check'}`}
				onClick={onCheckClick}
				/>
			<input type='text' value={title} size={title.length} disabled maxLength={30} />
			<Glyphicon
				glyph='edit'
				onClick={onEditClick}
				className='icon-right-align'
				/>
		</ListGroupItem>
	);
}

export default TaskLink; 