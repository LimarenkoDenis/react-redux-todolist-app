import * as React from 'react';
import { connect } from 'react-redux';

import store from '../../../store';

import { saveTask, cancelTaskEdit } from '../../../actions/task.actions';
import { TaskModel } from '../../../models/task.model';

import { Button, Col, Checkbox, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';

const labelStyle: Object = { margin: '1em 0' };

const TASK_EDIT_QUESTION = 'Do you really want to cancel editing?';

export interface ITaskEditFormProps {
	task: TaskModel;
}

export class TaskEditForm extends React.Component<ITaskEditFormProps, TaskModel> {

	constructor(props: ITaskEditFormProps) {
		super(props);
		this.state = { ...props.task };
	}

	public render(): JSX.Element {
		return (
			<Form onSubmit={e => this.handleSubmit(e)}>
				<Col mdOffset={8}>
					<Button type='submit'>Save changes</Button>
					{' '}
					<Button onClick={() => this.handleCancel()}>Cancel</Button>
				</Col>
				<Col md={10}>
					<FormGroup controlId='formTaskTitle'>
						<ControlLabel style={labelStyle}>Title</ControlLabel>
						<FormControl type='text' placeholder='Title' value={this.state.title} onChange={e => this.handleTitleChange(e)} required />
					</FormGroup>
				</Col>
				<Col md={10}>
					<Checkbox checked={this.state.active} onChange={e => this.handleActiveToggle(e)}>Active</Checkbox>
				</Col>
				<Col md={10}>
					<FormGroup controlId='formTaskDescription' >
						<ControlLabel style={labelStyle}>Description</ControlLabel>
						<FormControl componentClass='textarea' placeholder='Description' value={this.state.description} onChange={e => this.handleDescriptionChange(e)} />
					</FormGroup>
				</Col>
			</Form>
		);
	}

	private handleSubmit(e: Event): void {
		e.preventDefault();

		store.dispatch(saveTask(this.state));
	}

	private handleCancel(): void {
		if (confirm(TASK_EDIT_QUESTION)) {
			store.dispatch(cancelTaskEdit());
		}
	}

	private handleTitleChange(e: Event | any): void {
		let title: string = e.target.value.replace(/[^(?!' )a-zA-zА-яа-я0-9]+/g, '').replace(/\s{2,}/, ' ');

		this.setState({ title });
	}

	private handleActiveToggle(e: Event | any): void {
		this.setState({ active: e.target.checked });
	}

	private handleDescriptionChange(e: Event | any): void {
		this.setState({ description: e.target.value });
	}
}

const mapStateToProps = (store: any): Object => {
	let task = store.present.editState.task;

	return { task };
};

export default connect(mapStateToProps)(TaskEditForm);


