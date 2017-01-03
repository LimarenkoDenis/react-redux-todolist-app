import * as React from 'react';
import { Col } from 'react-bootstrap';

import CategoryList from '../../containers/category/visibleCategories';

const Aside = () => (
	<Col md={4}>
		<CategoryList />
	</Col>
);

export default Aside;