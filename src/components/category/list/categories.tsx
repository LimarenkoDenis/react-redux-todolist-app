import * as React from 'react';

import CategoryItem from '../item/category';

import { ListGroup } from 'react-bootstrap';

const CategoryList = (props) => {
	return (
		<ListGroup>
			{props.categories.map(c =>
				<CategoryItem
					key={c.id}
					editState={props.editState}
					category={c}
					onAddClick={(id, subSize) => props.onAddClick(c.id, c.subs.length)}
					onArrowClick={id => props.onArrowClick(c.id)}
					onExpandClick={id => props.onExpandClick(c.id)}
					onEditClick={props.onEditClick}
					onLIClick={(id, title, tasks) => props.onLIClick(c.id, c.title, c.tasks)}
					onDeleteClick={props.onDeleteClick}
					/>
			)}
		</ListGroup>
	);
};

export default CategoryList;