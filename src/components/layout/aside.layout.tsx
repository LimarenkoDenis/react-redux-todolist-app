import * as React from 'react';
import { Col } from 'react-bootstrap';

import CategoryList from '../../containers/category/visibleCategories';

const Aside = () => (
	<Col xs={6} xsOffset={3} md={5} mdOffset={0} className='content-container__category'>
		<CategoryList />
	</Col>
);

export default Aside;