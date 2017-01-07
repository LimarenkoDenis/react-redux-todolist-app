import * as React from 'react';

import { Col, Row } from 'react-bootstrap';

import './header.css';

export const Header = ({title}) => (
	<Row>
		<Col xs={6} md={4}>
			<h1 className='todo-header'>{title}</h1>
		</Col>
	</Row>
);