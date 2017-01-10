import * as React from 'react';

import { ITaskItemProps } from '../../../interfaces';

import { Glyphicon, ListGroupItem } from 'react-bootstrap';

import './task.css';

const Task = (props: ITaskItemProps): JSX.Element => {
	const {title, active, onLIClick, onEditClick, onCheckClick} = props;

	return (
		<ListGroupItem
			className={`${active ? 'task-item' : 'task-item item-checked'}`}
			onClick={onLIClick}
			>
			<Glyphicon
				glyph={`${active ? 'unchecked' : 'check'}`}
				onClick={onCheckClick}
				/>
			<input
				type='text'
				value={title}
				size={title.length}
				maxLength={30}
				disabled
				/>
			<Glyphicon
				glyph='edit'
				onClick={onEditClick}
				className='icon-right-align'
				/>
		</ListGroupItem>
	);
};

export default Task; 