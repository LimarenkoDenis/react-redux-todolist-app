import * as React from 'react';
import { connect } from 'react-redux';

import store from '../../../store';

import { addTask } from '../../../actions/task.actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

interface IAddFormProps {
	activeCategory: number;
}

interface IAddFormState {
	title: string;
}

const CHOOSE_CATEGORY_WARNING: string = 'You need to a choose category to add a task!';

export class TaskAddForm extends React.Component<IAddFormProps, IAddFormState> {
	private activeCategory: number;

	constructor(props: IAddFormProps) {
		super(props);

		this.state = { title: '' };
	}

	public componentWillReceiveProps(nextProps: IAddFormProps): void {
		this.activeCategory = nextProps.activeCategory;
	}

	public render(): JSX.Element {
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

	private handleChange(e: Event | any): void {
		let title: string = e.target.value.replace(/[^(?!' )a-zA-zА-яа-я0-9]+/g, '').replace(/\s{2,}/, ' ');

		this.setState({ title });
	}

	private handleSubmit(e: Event): void {
		e.preventDefault();

		if (this.activeCategory) {
			store.dispatch(addTask(this.state.title, this.activeCategory));
			this.setState({ title: '' });
		} else {
			alert(CHOOSE_CATEGORY_WARNING);
		}
	}
};

const mapStateToProps = (store: any): Object => {
	return {
		activeCategory: store.present.categories.activeCategory
	};
};

export default connect(mapStateToProps)(TaskAddForm);