import * as React from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

const Filter = ({ onFilterInput, onActiveToggle }) => {

	let _handleFilter = (e) => {
		let value = e.target.value.replace(/[^(?!' )a-zA-z0-9]+/g, '').replace(/\s{2,}/, ' ').toLowerCase();

		onFilterInput(value);
	};

	return (
		<Form inline>
			<Checkbox onChange={(e) => onActiveToggle(e.target.checked)}>{' '}Show active</Checkbox>
			{' '}
			<FormGroup>
				<FormControl type='text' placeholder='Search' onChange={(e) => _handleFilter(e)} />
			</FormGroup>
		</Form >
	);
};

export default Filter;