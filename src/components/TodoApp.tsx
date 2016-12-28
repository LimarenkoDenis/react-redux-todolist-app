import * as React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

import Header from './Header';
import Filter from './Filter';
import ProgressBar from './ProgressBar';
import TodoListAddForm from './TodoListAddForm';
import CategoryList from './CategoryList';


class TodoApp extends React.Component<any, any> {

	public render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} md={8} >
						<Header />
					</Col>
					<Col xs={6} md={4} >
						<Filter />
					</Col>
				</Row>
				<Row>
					<Col md={6} mdOffset={3}>
						<ProgressBar />
					</Col>
				</Row>
				<Row>
					<Col md={6} mdOffset={3}>
						<TodoListAddForm />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<CategoryList />
					</Col>
					<Col md={6}>
						{this.props.children}
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default TodoApp;