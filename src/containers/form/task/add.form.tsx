import * as React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../../actions/task.actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

interface IAddFormProps {
	activeCategory?: number;
	handleSubmit: (title: string, category?: number) => void;
}

interface IAddFormState {
	title: string;
}

const CHOOSE_CATEGORY_WARNING: string = 'You need to a choose category to add a task!';

class TaskAddForm extends React.Component<IAddFormProps, IAddFormState> {

	constructor() {
		super();

		this.state = { title: '' };
	}

	private handleChange(e: Event | any): void {
		let title: string = e.target.value.replace(/[^(?!' )a-zA-zА-яа-я0-9]+/g, '').replace(/\s{2,}/, ' ');

		this.setState({ title });
	}

	private handleSubmit(e: Event): void {
		e.preventDefault();

		if (this.props.activeCategory) {
			this.props.handleSubmit(this.state.title, this.props.activeCategory);
			this.setState({ title: '' });
		} else {
			alert(CHOOSE_CATEGORY_WARNING);
		}
	}

	public render() {
		return (
			<Form onSubmit={e => this.handleSubmit(e)} inline>
				<FormGroup >
					<FormControl
						type='text'
						onChange={e => this.handleChange(e)}
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

const mapStateToProps = (store: any): Object => {
	return {
		activeCategory: store.present.categories.activeCategory
	};
};

const mapDispatchToProps = (dispatch: any): Object => {
	return {
		handleSubmit: (title, category) => dispatch(addTask(title, category)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddForm);