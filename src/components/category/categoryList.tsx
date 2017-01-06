import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

import CategoryLink from './categoryLink';

const CategoryList = (props) => {
	return (
		<ListGroup>
			{props.categories.map(c =>
				<CategoryLink
					key={c.id}
					editState={props.editState}
					category={c}
					onAddClick={(id, subSize) => props.onAddClick(c.id, c.subs.length)}
					onArrowClick={(id) => props.onArrowClick(c.id)}
					onExpandClick={id => props.onExpandClick(c.id)}
					onEditClick={props.onEditClick}
					onLIClick={(id, title, tasks) => props.onLIClick(c.id, c.title, c.tasks)}
					onDeleteClick={(id, title, subs, tasks) => props.onDeleteClick(c.id, c.title, c.subs, c.tasks)}
					/>
			)}
		</ListGroup>
	);
};

export default CategoryList;