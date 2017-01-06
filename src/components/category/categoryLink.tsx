import * as React from 'react';

import { ListGroupItem, Glyphicon } from 'react-bootstrap';

class CategoryLink extends React.Component<any, any> {
	private titleInput;

	_handleEditClick() {
		if (!this.titleInput.value) return;

		this.props.onEditClick(this.props.category.id, this.titleInput.value);
	}

	render() {
		const { editState, category, onArrowClick, onAddClick, onExpandClick, onLIClick, onDeleteClick } = this.props;

		return (
			<ListGroupItem
				className='category-item'
				onClick={onLIClick}
				style={{
					marginLeft: `${category.level * 5}%`,
					width: `${100 - category.level * 5}%`
				}}>
				{!editState.active &&
					<Glyphicon
						className='bind-icon'
						style={{ visibility: `${category.subs.length ? 'visible' : 'hidden'}` }}
						glyph={category.expand ? 'collapse-down' : 'expand'}
						onClick={onExpandClick}
						/>
				}
				<input type='text'
					defaultValue={category.title}
					size={category.title.length}
					disabled={!category.edit}
					className={category.edit ? 'active' : 'disabled'}
					ref={input => this.titleInput = input}
					/>
				{!editState.active ? (
					<span>
						<Glyphicon
							glyph='edit'
							onClick={() => this._handleEditClick()}
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
}


export default CategoryLink;
