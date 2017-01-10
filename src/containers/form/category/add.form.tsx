import * as React from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../../../actions/category.actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

interface IAddFormProps {
	activeCategory?: number;
	handleSubmit: (title: string, category?: number) => void;
}

interface IAddFormState {
	title: string;
}

class CategoryAddForm extends React.Component<IAddFormProps, IAddFormState> {

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

		this.props.handleSubmit(this.state.title);
		this.setState({ title: '' });
	}

	public render() {
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
};

const mapDispatchToProps = (dispatch: any): Object => {
	return {
		handleSubmit: (title) => dispatch(addCategory(title)),
	};
};

export default connect(null, mapDispatchToProps)(CategoryAddForm);