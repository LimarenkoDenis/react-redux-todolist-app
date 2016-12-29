import * as React from 'react';
import { Col } from 'react-bootstrap';

import CategoryList from '../../containers/category/categoryList';

const Aside = () => (
	<Col md={6} style={{ border: '1px solid black', overflowY: 'scroll', height: '100%' }}>
		<CategoryList />
	</Col>
);

export default Aside;