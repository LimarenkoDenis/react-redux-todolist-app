import * as React from 'react';

import { connect } from 'react-redux';
import { addCategory } from '../../actions/category.actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class CategoryAddForm extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.state = { title: '' };
	}

	_handleChange(e) {
		let title = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();
		this.setState({ title });
	}

	_handleSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(this.state.title);
	}

	render() {
		return (
			<Form onSubmit={e => this._handleSubmit(e)} inline>
				<FormGroup >
					<FormControl
						type='text'
						onChange={e => this._handleChange(e)}
						value={this.state.title}
						placeholder='Enter category title'
						required
						/>
				</FormGroup>
				<Button type='submit'>Add</Button>
			</Form>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (title) => dispatch(addCategory(title)),
	};
};

export default connect(null, mapDispatchToProps)(CategoryAddForm);