import * as React from 'react';
import { Col, ProgressBar as Bar, Row } from 'react-bootstrap';

const ProgressBar = () => (
	<Row>
		<Col md={12}>
			<Bar style={{ width: '100%' }} active now={25} />
		</Col>
	</Row>
);

export default ProgressBar;