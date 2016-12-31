import * as React from 'react';
import { Col } from 'react-bootstrap';

import CategoryList from '../../containers/category/visibleCategories';

const Aside = () => (
	<Col md={6}>
		<CategoryList />
	</Col>
);

export default Aside;