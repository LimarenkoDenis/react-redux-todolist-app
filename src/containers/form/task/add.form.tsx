import * as React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../../actions/task.actions';
import { IAddFormProps, IAddFormState } from '../../../interfaces';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class TaskAddForm extends React.Component<IAddFormProps, IAddFormState> {

	constructor() {
		super();

		this.state = { title: '' };
	}

	_handleChange(e) {
		let title: string = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();

		this.setState({ title });
	}

	_handleSubmit(e: Event) {
		e.preventDefault();

		if (this.props.activeCategory) {
			this.props.handleSubmit(this.state.title, this.props.activeCategory);
			this.setState({ title: '' });
		} else {
			alert('You need to a choose category to add a task!');
		}
	}

	render() {
		return (
			<Form onSubmit={e => this._handleSubmit(e)} inline>
				<FormGroup >
					<FormControl
						type='text'
						onChange={e => this._handleChange(e)}
						value={this.state.title}
						placeholder='Enter task title'
						required
						/>
				</FormGroup>
				{' '}
				<Button type='submit'>Add</Button>
			</Form>
		);
	}
};

const mapStateToProps = (store: any) => {
	return {
		activeCategory: store.categories.activeCategory
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		handleSubmit: (title, category) => dispatch(addTask(title, category)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddForm);