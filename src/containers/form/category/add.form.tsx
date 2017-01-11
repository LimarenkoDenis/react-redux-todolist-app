import * as React from 'react';

import store from '../../../store';

import { addCategory } from '../../../actions/category.actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

interface IAddFormState {
	title: string;
}

class CategoryAddForm extends React.Component<any, IAddFormState> {

	constructor() {
		super();

		this.state = { title: '' };
	}

	public render(): JSX.Element {
		return (
			<Form onSubmit={e => this.handleSubmit(e)} inline>
				<FormGroup >
					<FormControl
						type='text'
						onChange={e => this.handleChange(e)}
						value={this.state.title}
						placeholder='Enter category title'
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

		store.dispatch(addCategory(this.state.title));
		this.setState({ title: '' });
	}
}

export default CategoryAddForm;