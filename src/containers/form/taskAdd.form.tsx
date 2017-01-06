import * as React from 'react';

import { connect } from 'react-redux';
import { addTask } from '../../actions/task.actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class TaskAddForm extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.state = { title: '' };
	}

	_handleChange(e) {
		this.setState({ title: e.target.value });
	}

	_handleSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(this.state.title, this.props.activeCategory);
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
						/>
				</FormGroup>
				<Button type='submit'>Add</Button>
			</Form>
		);
	}
};

const mapStateToProps = (store) => {
	return {
		activeCategory: store.categories.activeCategory
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (title, category) => dispatch(addTask(title, category)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddForm);