import * as React from 'react';

import ProgressBar from '../../containers/widget/progress/progressBar';
import Filter from '../../containers/form/task/filter.form';
import TaskAddForm from '../../containers/form/task/add.form';
import CategoryAddForm from '../../containers/form/category/add.form';

import { Col, Row } from 'react-bootstrap';
import './widgets.css';

export const Widgets = (): JSX.Element => {
	return (
		<Row>
			<Col xs={6} xsOffset={6} md={4} mdOffset={8} className='todo-search'>
				<Filter />
			</Col>
			<Row className='todo-progressbar'>
				<Col>
					<ProgressBar />
				</Col>
			</Row>
			<Row className='todo-form-container'>
				<Col md={4} className='form-container__add-form'>
					<CategoryAddForm />
				</Col>
				<Col mdOffset={8} className='form-container__add-form'>
					<TaskAddForm />
				</Col>
			</Row>
		</Row>
	);
};