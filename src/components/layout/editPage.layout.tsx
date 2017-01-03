import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Button, FormGroup, Col, Form, Checkbox } from 'react-bootstrap';

class EditPage extends React.Component<any, any>{
	render() {
		return (
			<Form  onSubmit={(e)=> e.preventDefault()}>
				<FormGroup>
					<Button type='submit'>Save changes</Button>
					<Button>Cancel</Button>
				</FormGroup>
				<FormGroup>
					<Col sm={10}>
						<Field type='text' name='taskTitle' component='input' value={this.props.task.title} />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Checkbox checked={!this.props.task.completed}>Active</Checkbox>
					</Col>
				</FormGroup>
				<FormGroup>
					<Field type='text' name='taskDescription' placeholder='Description' component='textarea' value={this.props.task.title} />
				</FormGroup>
			</Form>

		);
	}
}

export default reduxForm({ form: 'edit' })(EditPage);