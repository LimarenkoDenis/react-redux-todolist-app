import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

import ProgressBar from '../../containers/widget/progressBar.widget';
import Filter from '../../containers/form/filter.form';
import TaskAddForm from '../../containers/form/taskAdd.form';
import CategoryAddForm from '../../containers/form/categoryAdd.form';

export const WidgetsLayout = (props) => {
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