import * as React from 'react';

import { Button, Col, Checkbox, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { saveTask, cancelTaskEdit } from '../../actions/task.actions';

import './style.css';

class EditForm extends React.Component<any, any>{

	constructor(props) {
		super(props);

		this.state = { ...props.task };
	}

	_handleSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(this.state);
	}

	_handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	_handleActiveToggle(e) {
		this.setState({ active: e.target.checked });

	}

	_handleDescriptionChange(e) {
		this.setState({ description: e.target.value });
	}

	render() {
		return (
			<Form onSubmit={e => this._handleSubmit(e)}>
				<Col mdOffset={8}>
					<Button type='submit'>Save changes</Button>
					{' '}
					<Button onClick={this.props.handleCancel}>Cancel</Button>
				</Col>
				<Col md={10}>
					<FormGroup controlId='formHorizontalEmail'>
						<ControlLabel>Title</ControlLabel>
						<FormControl type='text' placeholder='Title' value={this.state.title} onChange={e => this._handleTitleChange(e)} required />
					</FormGroup>
				</Col>
				<Col md={10}>
					<Checkbox checked={this.state.active} onChange={e => this._handleActiveToggle(e)}>Active</Checkbox>
				</Col>
				<Col md={10}>
					<FormGroup controlId='formControlsTextarea' >
						<ControlLabel>Description</ControlLabel>
						<FormControl componentClass='textarea' placeholder='Description' value={this.state.description} onChange={e => this._handleDescriptionChange(e)} />
					</FormGroup>
				</Col>
			</Form>
		);
	}

}

const mapStateToProps = (store) => {
	let task = store.editState.task;

	return { task: { ...task } };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (task) => dispatch(saveTask(task)),
		handleCancel: () => dispatch(cancelTaskEdit())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);


