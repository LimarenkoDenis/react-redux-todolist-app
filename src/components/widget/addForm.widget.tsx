import * as React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const AddForm = (props) => {
	return (
		<Form inline>
			<FormGroup >
				<FormControl type='text' placeholder={props.placeholder} />
			</FormGroup>
			<Button type='submit'>{props.btnText}</Button>
		</Form>
	);
};

export default AddForm;