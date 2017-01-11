import * as React from 'react';

import { Col, Row } from 'react-bootstrap';

export const Header = ({title, fontSize}): JSX.Element => (
	<Row>
		<Col xs={6} md={4}>
			<h1 className='todo-header' style={{ fontSize: `${fontSize}` }}>{title}</h1>
		</Col>
	</Row >
);