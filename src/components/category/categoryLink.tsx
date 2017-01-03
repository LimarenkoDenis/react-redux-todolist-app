import * as React from 'react';

import { ListGroupItem, Glyphicon } from 'react-bootstrap';

const CategoryLink = ({ title, edit, subs, expand, editState, onTitleChange, onArrowClick, onAddClick, onExpandClick, onEditClick, onLIClick, onDeleteClick, level }) => {
	return (
		<ListGroupItem
			className='category-item'
			onClick={onLIClick}
			style={{
				marginLeft: `${level * 5}%`,
				width: `${100 - level * 5}%`,
			}}>
			{!editState.active &&
				<Glyphicon
					className='bind-icon'
					style={{ visibility: `${subs.length ? 'visible' : 'hidden'}` }}
					glyph={expand ? 'collapse-down' : 'expand'}
					onClick={onExpandClick}
					/>
			}
			<input type='text'
				value={title}
				size={title.length}
				disabled={!edit}
				className={edit ? 'active' : 'disabled'}
				// onChange={(e) => onTitleChange()}
				// ref={(input) => { textInput = input; }} 
				// defaultValue={title}
				/>
			{!editState.active ? (
				<span>
					<Glyphicon
						glyph='edit'
						onClick={onEditClick}
						/>
					<Glyphicon
						glyph='plus-sign'
						onClick={onAddClick}
						className='icon-right-align' />
					<Glyphicon
						glyph='trash'
						onClick={onDeleteClick}
						className='icon-right-align'
						/>
				</span>
			) : (
					<Glyphicon
						glyph='share-alt'
						onClick={onArrowClick}
						className='icon-right-align'
						/>
				)}
		</ListGroupItem>
	);
};

export default CategoryLink;
