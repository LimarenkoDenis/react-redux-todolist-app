import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { saveTask } from '../../actions/form.actons';

import './style.css';

class EditForm extends React.Component<any, any>{

	onSubmit(val) {
		console.log(val)

	}

	render() {

		return (
			<form onSubmit={(e) => { this.onSubmit } }>
				<Col mdOffset={8}>
					<Button type='submit'>Save changes</Button>
					{' '}
					<Button>Cancel</Button>
				</Col>
				<Col md={10} className='form-row'>
					<label htmlFor='taskTitle'>Title</label>
					<div>
						<Field
							id='taskTitle'
							type='text'
							name='taskTitle'
							component='input'
							/>
					</div>
				</Col>
				<Col md={10} className='form-row'>
					<div>
						<Field name='taskActive' id='taskActive' component='input' type='checkbox' />
					</div>
					<label htmlFor='taskActive'>Active</label>
				</Col>
				<Col md={10} className='form-row'>
					<label htmlFor='taskDescription'>Description</label>
					<Field
						rows={20}
						cols={50}
						id='taskDescription'
						type='text'
						name='taskDescription'
						placeholder='Description'
						component='textarea'
						/>
				</Col>
			</form>

		);
	}
}

const mapStateToProps = (store) => {
	let { id, title, completed, description } = store.editState.task;
	return {
		initialValues: {
			id: id,
			taskTitle: title,
			taskActive: !completed,
			taskDescription: description
		}
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (id, title, completed, description) => dispatch(saveTask(id, title, completed, description))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'edit' })(EditForm));


