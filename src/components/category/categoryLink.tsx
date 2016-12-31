import * as React from 'react';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const CategoryLink = ({title, onAddClick, onExpandClick, onLIClick, onDeleteClick, level}) => (
	<ListGroupItem
		onClick={onLIClick}
		style={{
			marginLeft: `${level * 5}%`,
			width: `${100 - level * 5}%`
		}}>
		<Glyphicon
			glyph='collapse-down'
			onClick={onExpandClick}
			/>
		{title}
		<Glyphicon glyph='edit' />
		<Glyphicon
			glyph='trash'
			onClick={onDeleteClick}
			className='icon-right-align'
			/>
		<Glyphicon
			glyph='plus-sign'
			onClick={onAddClick}
			className='icon-right-align' />
	</ListGroupItem>
);

export default CategoryLink;
