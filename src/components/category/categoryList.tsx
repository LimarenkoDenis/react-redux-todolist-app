import * as React from 'react';
import { ListGroup } from 'react-bootstrap';

import CategoryLink from './categoryLink';

const CategoryList = (props) => (
	<ListGroup>
		{props.categories.map(c =>
			<CategoryLink
				level={c.level}
				key={c.id}
				title={c.title}
				onAddClick={(id, subSize) => props.onAddClick(c.id, c.subs.length)}
				onExpandClick={id => props.onExpandClick(c.id)}
				onLIClick={(id, title) => props.onLIClick(c.id, c.title)}
				onDeleteClick={(id, subs) => props.onDeleteClick(c.id, c.subs)}
				/>
		)}
	</ListGroup>
);

export default CategoryList;