import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

import ProgressBar from '../widget/progressBar.widget';
import Filter from '../widget/filter.widget';
import AddForm from '../widget/AddForm.widget';

const WidgetsLayout = () => {
	return (
		<Row>
			<Row>
				<Col md={6} mdOffset={6} >
					<Filter />
				</Col>
			</Row>
			<Row>
				<Col md={6} mdOffset={3}>
					<ProgressBar />
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<AddForm placeholder='Enter category title' btnText='Add' />
				</Col>
				<Col mdOffset={8}>
					<AddForm placeholder='Enter task title' btnText='Add' />
				</Col>
			</Row>
		</Row>
	);
};

export default WidgetsLayout;