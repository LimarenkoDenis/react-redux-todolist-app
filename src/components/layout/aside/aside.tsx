import * as React from 'react';

import VisibleCategoryList from '../../../containers/category/visibleCategories';

import { Col } from 'react-bootstrap';

export const Aside = () => {
	return (
		<Col xs={6} xsOffset={3} md={5} mdOffset={0} className='content-container__category'>
			<VisibleCategoryList />
		</Col>
	);
};