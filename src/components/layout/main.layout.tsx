import * as React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

import Header from '../header/header';
import WidgetsLayout from './widgets.layout';
import Aside from './aside.layout';

export class MainLayout extends React.Component<any, any> {
	render() {
		return (
			<Grid>
				<Header />
				<WidgetsLayout />
				<Row>
					<Aside />
					<Col md={6} style={{ border: '2px solid red', height: '100%' }}>
						{this.props.children}
					</Col>
				</Row>
			</Grid >
		);
	};
};