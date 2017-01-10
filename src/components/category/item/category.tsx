import * as React from 'react';

import { ICategoryItemProps } from '../../../interfaces';

import { Glyphicon, ListGroupItem } from 'react-bootstrap';

import './category.css';

const CATEGORY_DELETE_QUESTION = (title: string): string => `Do you really want to delete ${title}?`;

class Category extends React.Component<ICategoryItemProps, any> {
	private titleInput: HTMLElement | any;

	private handleEditClick(): void {
		if (!this.titleInput.value) return;

		this.props.onEditClick(this.props.category.id, this.titleInput.value);
	}

	private handleDeleteClick(): void {
		const {id, title, subs, tasks } = this.props.category;

		if (confirm(CATEGORY_DELETE_QUESTION(title))) {
			this.props.onDeleteClick(id, title, subs, tasks);
		}
	}

	public render() {
		const { editState, category, onArrowClick, onAddClick, onExpandClick, onLIClick } = this.props;

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
						glyph={category.expanded ? 'collapse-down' : 'expand'}
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
							onClick={() => this.handleEditClick()}
							/>
						<Glyphicon
							glyph='plus-sign'
							onClick={onAddClick}
							className='icon-right-align' />
						<Glyphicon
							glyph='trash'
							onClick={() => this.handleDeleteClick()}
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

export default Category;
