import * as React from 'react';
import { connect } from 'react-redux';

import { saveTask, cancelTaskEdit } from '../../../actions/task.actions';
import { IEditFormProps, ITask } from '../../../interfaces';

import { Button, Col, Checkbox, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';

const labelStyle: Object = { margin: '1em 0' };

class TaskEditForm extends React.Component<IEditFormProps, ITask> {

	constructor(props: IEditFormProps) {
		super(props);

		this.state = { ...props.task };
	}

	_handleSubmit(e: Event) {
		e.preventDefault();

		this.props.handleSubmit(this.state);
	}

	_handleCancel() {
		if (confirm(`Do you really want to cancel editing?`)) {
			this.props.handleCancel();
		}
	}

	_handleTitleChange(e) {
		let title = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();

		this.setState({ title });
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
					<Button onClick={() => this._handleCancel()}>Cancel</Button>
				</Col>
				<Col md={10}>
					<FormGroup controlId='formHorizontalEmail'>
						<ControlLabel style={labelStyle}>Title</ControlLabel>
						<FormControl type='text' placeholder='Title' value={this.state.title} onChange={e => this._handleTitleChange(e)} required />
					</FormGroup>
				</Col>
				<Col md={10}>
					<Checkbox checked={this.state.active} onChange={e => this._handleActiveToggle(e)}>Active</Checkbox>
				</Col>
				<Col md={10}>
					<FormGroup controlId='formControlsTextarea' >
						<ControlLabel style={labelStyle}>Description</ControlLabel>
						<FormControl componentClass='textarea' placeholder='Description' value={this.state.description} onChange={e => this._handleDescriptionChange(e)} />
					</FormGroup>
				</Col>
			</Form>
		);
	}

}

const mapStateToProps = (store: any) => {
	let task = store.editState.task;

	return { task: { ...task } };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		handleSubmit: (task) => dispatch(saveTask(task)),
		handleCancel: () => dispatch(cancelTaskEdit())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditForm);


