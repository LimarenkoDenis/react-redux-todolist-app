import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

import CategoryLink from './categoryLink';

const CategoryList = (props) => {
	return (
		<ListGroup>
			{props.categories.map(c =>
				<CategoryLink
					editState={props.editState}
					level={c.level}
					key={c.id}
					title={c.title}
					edit={c.edit}
					subs={c.subs}
					expand={c.expanded}
					onAddClick={(id, subSize) => props.onAddClick(c.id, c.subs.length)}
					onArrowClick={(id) => props.onArrowClick(c.id)}
					onExpandClick={id => props.onExpandClick(c.id)}
					onTitleChange={(id, title) => props.onTitleChange()}
					onEditClick={(id, title) => props.onEditClick(c.id, c.title)}
					onLIClick={(id, title, tasks) => props.onLIClick(c.id, c.title, c.tasks)}
					onDeleteClick={(id, title, subs, tasks) => props.onDeleteClick(c.id, c.title, c.subs, c.tasks)}
					/>
			)}
		</ListGroup>
	);
};

export default CategoryList;