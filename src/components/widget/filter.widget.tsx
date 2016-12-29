import * as React from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

const Filter = () => {
	return (
		<Form inline>
			<Checkbox>{' '}Show active</Checkbox>
			{' '}
			<FormGroup>
				<FormControl type='text' placeholder='Search' />
			</FormGroup>
		</Form>
	);
};

export default Filter;