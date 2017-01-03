import * as React from 'react';
import { Col, ProgressBar as Bar, Row } from 'react-bootstrap';

const ProgressBar = (props) => (
	<Row>
		<Col md={12}>
			<Bar style={{ width: '100%' }} active now={props.now} />
		</Col>
	</Row>
);

export default ProgressBar;