import * as React from 'react';

import { CategoryModel } from '../../models/category.model';
import { IEditState } from '../../reducers';

import { Glyphicon, ListGroupItem } from 'react-bootstrap';
import './category.css';

interface ICategoryItemProps {
	category: CategoryModel;
	editState: IEditState;
	onAddClick: (id: number, subs: Array<number>) => void;
	onArrowClick: (id: number) => void;
	onDeleteClick: (id: number, title: string, subs: Array<number>, tasks: Array<number>) => void;
	onEditClick: (id: number, title: string) => void;
	onExpandClick: (id: number) => void;
	onLIClick: (id: number, title: string, tasks: Array<number>) => void;
}

const CATEGORY_DELETE_QUESTION = (title: string): string => `Do you really want to delete ${title}?`;

export class Category extends React.Component<ICategoryItemProps, any> {
	private titleInput: HTMLElement | any;

	public render(): JSX.Element {
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
					ref={(input: HTMLElement) => this.titleInput = input}
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
	}

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
}
