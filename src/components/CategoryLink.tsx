import * as React from 'react';
import { Link } from 'react-router/lib';

const CategoryLink = ({text, category}) => {
	return (
		<li><Link to='/categoryName'>{text} - {category}</Link></li>
	);
};

export default CategoryLink;
