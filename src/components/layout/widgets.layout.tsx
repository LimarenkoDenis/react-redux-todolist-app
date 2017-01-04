import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

import ProgressBar from '../widget/progressBar.widget';
import Filter from '../widget/filter.widget';
import AddForm from '../widget/AddForm.widget';

export const WidgetsLayout = (props) => {
	return (
		<Row>
			<Col xs={4} xsOffset={7} md={4} mdOffset={8} className='todo-search'>
				<Filter
					onActiveToggle={props.onActiveToggle}
					onFilterInput={props.onFilterInput}
					/>
			</Col>
			<Row className='todo-progressbar'>
				<Col>
					<ProgressBar now={props.progressCounter} />
				</Col>
			</Row>
			<Row className='todo-form-container'>
				<Col md={4} className='form-container__add-form'>
					<AddForm placeholder='Enter category title' btnText='Add' />
				</Col>
				<Col mdOffset={8} className='form-container__add-form'>
					<AddForm placeholder='Enter task title' btnText='Add' />
				</Col>
			</Row>
		</Row>
	);
};